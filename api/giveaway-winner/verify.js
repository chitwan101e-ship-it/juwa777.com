import {
  applyCors,
  checkRateLimit,
  createSessionToken,
  lookupWinnerCredentials,
  normalizeEmail,
  SESSION_TTL_SEC,
  setCookie,
} from "../_lib/giveawayAuth.js";

export default async function handler(req, res) {
  applyCors(req, res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!checkRateLimit(req)) {
    return res.status(429).json({ error: "Too many requests. Please try again later." });
  }

  const { email, accountOrId } = req.body ?? {};
  const normalizedEmail = normalizeEmail(email);
  const query = String(accountOrId ?? "").trim();

  if (!normalizedEmail || !normalizedEmail.includes("@") || !query) {
    return res.status(400).json({ error: "Email and username or user ID are required." });
  }

  try {
    const match = lookupWinnerCredentials({ email: normalizedEmail, accountOrId: query });

    if (!match) {
      return res.status(403).json({
        error:
          "We could not verify your registration email and account details. Please double-check and try again.",
      });
    }

    const sessionToken = createSessionToken({
      email: match.email,
      account: match.account,
      id: match.id,
    });

    setCookie(res, "gw_session", sessionToken, SESSION_TTL_SEC);

    return res.status(200).json({
      ok: true,
      verified: true,
      account: match.account,
      id: match.id,
    });
  } catch (error) {
    console.error("verify error:", error);
    const message =
      error instanceof Error && error.message.includes("registry")
        ? "Winner verification is temporarily unavailable."
        : "Unable to process your request right now.";
    return res.status(503).json({ error: message });
  }
}
