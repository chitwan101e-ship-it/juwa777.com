import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OTP_TTL_SEC = 15 * 60;
const SESSION_TTL_SEC = 4 * 60 * 60;
const MAX_OTP_ATTEMPTS = 5;
const MAX_CODE_REQUESTS_PER_HOUR = 5;

let registryCache = null;

export function getAuthSecret() {
  const secret = process.env.GIVEAWAY_AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("GIVEAWAY_AUTH_SECRET is not configured (min 32 characters)");
  }
  return secret;
}

export function normalizeEmail(email) {
  return String(email ?? "")
    .trim()
    .toLowerCase();
}

export function normalizeAccount(account) {
  return String(account ?? "")
    .trim()
    .replace(/^@+/, "")
    .toLowerCase();
}

export function normalizeId(id) {
  const trimmed = String(id ?? "").trim();
  if (!trimmed) return "";
  if (/^\d+\.0+$/.test(trimmed)) return String(parseInt(trimmed, 10));
  return trimmed;
}

function hashValue(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function signPayload(payload) {
  const secret = getAuthSecret();
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto.createHmac("sha256", secret).update(data).digest("base64url");
  return `${data}.${sig}`;
}

export function verifySignedPayload(token) {
  if (!token || typeof token !== "string" || !token.includes(".")) return null;
  const [data, sig] = token.split(".");
  if (!data || !sig) return null;

  const secret = getAuthSecret();
  const expected = crypto.createHmac("sha256", secret).update(data).digest("base64url");
  try {
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  } catch {
    return null;
  }

  try {
    return JSON.parse(Buffer.from(data, "base64url").toString("utf8"));
  } catch {
    return null;
  }
}

export function createOtpToken({ email, account, id, code }) {
  const now = Math.floor(Date.now() / 1000);
  return signPayload({
    type: "otp",
    emailHash: hashValue(normalizeEmail(email)),
    account: normalizeAccount(account),
    id: normalizeId(id),
    codeHash: hashValue(String(code)),
    exp: now + OTP_TTL_SEC,
    attempts: 0,
    iat: now,
  });
}

export function createSessionToken({ account, id, email, emailHash }) {
  const now = Math.floor(Date.now() / 1000);
  return signPayload({
    type: "session",
    emailHash: emailHash ?? hashValue(normalizeEmail(email)),
    account: normalizeAccount(account),
    id: normalizeId(id),
    exp: now + SESSION_TTL_SEC,
    iat: now,
  });
}

export function verifyOtpCode(token, code) {
  const payload = verifySignedPayload(token);
  if (!payload || payload.type !== "otp") return { ok: false, error: "invalid" };

  const now = Math.floor(Date.now() / 1000);
  if (payload.exp < now) return { ok: false, error: "expired" };
  if ((payload.attempts ?? 0) >= MAX_OTP_ATTEMPTS) return { ok: false, error: "locked" };

  const submitted = hashValue(String(code ?? "").trim());
  let matches = false;
  try {
    matches = crypto.timingSafeEqual(Buffer.from(submitted), Buffer.from(payload.codeHash));
  } catch {
    matches = false;
  }

  if (!matches) {
    const next = { ...payload, attempts: (payload.attempts ?? 0) + 1 };
    return { ok: false, error: "wrong", nextToken: signPayload(next), attemptsLeft: MAX_OTP_ATTEMPTS - next.attempts };
  }

  return {
    ok: true,
    account: payload.account,
    id: payload.id,
    emailHash: payload.emailHash,
  };
}

export function verifySessionToken(token) {
  const payload = verifySignedPayload(token);
  if (!payload || payload.type !== "session") return null;
  const now = Math.floor(Date.now() / 1000);
  if (payload.exp < now) return null;
  return payload;
}

function loadRegistryFromEnv() {
  const raw = process.env.GIVEAWAY_WINNER_REGISTRY_JSON;
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed?.winners) ? parsed.winners : null;
  } catch {
    return null;
  }
}

function loadRegistryFromFile() {
  const filePath = path.join(__dirname, "..", "..", "data", "giveaway-winner-registry.json");
  if (!fs.existsSync(filePath)) return null;
  try {
    const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return Array.isArray(parsed?.winners) ? parsed.winners : null;
  } catch {
    return null;
  }
}

export function loadWinnerRegistry() {
  if (registryCache) return registryCache;

  const winners = loadRegistryFromEnv() ?? loadRegistryFromFile();
  if (!winners) {
    throw new Error("Winner registry is not configured");
  }

  const byEmail = new Map();
  const byAccount = new Map();
  const byId = new Map();

  for (const row of winners) {
    const email = normalizeEmail(row.email);
    const account = normalizeAccount(row.account);
    const id = normalizeId(row.id);
    if (!email || !account || !id) continue;

    const entry = { email, account, id };
    byEmail.set(email, entry);
    byAccount.set(account, entry);
    byId.set(id, entry);
  }

  registryCache = { byEmail, byAccount, byId };
  return registryCache;
}

export function lookupWinnerCredentials({ email, accountOrId }) {
  const registry = loadWinnerRegistry();
  const normalizedEmail = normalizeEmail(email);
  const query = String(accountOrId ?? "").trim();
  if (!normalizedEmail || !query) return null;

  let entry = null;
  if (/^\d+$/.test(query)) {
    entry = registry.byId.get(normalizeId(query));
  } else {
    entry = registry.byAccount.get(normalizeAccount(query));
  }

  if (!entry) return null;
  if (entry.email !== normalizedEmail) return null;
  return entry;
}

export function generateOtpCode() {
  return String(crypto.randomInt(100000, 1000000));
}

export function parseCookies(header) {
  const out = {};
  if (!header) return out;
  for (const part of header.split(";")) {
    const [rawKey, ...rest] = part.trim().split("=");
    if (!rawKey) continue;
    out[rawKey] = decodeURIComponent(rest.join("="));
  }
  return out;
}

export function setCookie(res, name, value, maxAgeSec) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  res.setHeader(
    "Set-Cookie",
    `${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAgeSec}${secure}`
  );
}

export function clearCookie(res, name) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  res.setHeader("Set-Cookie", `${name}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${secure}`);
}

export function applyCors(req, res) {
  const origin = req.headers.origin;
  const allowed = process.env.GIVEAWAY_ALLOWED_ORIGIN || "https://www.juwa777.com";
  if (origin && (origin === allowed || origin.includes("localhost"))) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export function genericAuthMessage() {
  return "If your email and account details match our winner records, a verification code has been sent.";
}

export function maskAccount(account) {
  const value = String(account ?? "");
  if (value.length <= 3) return "***";
  return `${value.slice(0, 2)}${"*".repeat(Math.min(4, value.length - 2))}${value.slice(-1)}`;
}

export function checkRateLimit(req) {
  const ip = req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket?.remoteAddress || "unknown";
  const key = hashValue(ip).slice(0, 16);
  if (!globalThis.__giveawayRateLimit) globalThis.__giveawayRateLimit = new Map();

  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const bucket = globalThis.__giveawayRateLimit.get(key) ?? [];
  const recent = bucket.filter((t) => now - t < windowMs);

  if (recent.length >= MAX_CODE_REQUESTS_PER_HOUR) {
    return false;
  }

  recent.push(now);
  globalThis.__giveawayRateLimit.set(key, recent);
  return true;
}

export { OTP_TTL_SEC, SESSION_TTL_SEC };
