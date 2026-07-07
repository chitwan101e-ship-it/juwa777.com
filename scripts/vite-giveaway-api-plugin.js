import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

function loadEnvLocal(root) {
  const envPath = path.join(root, ".env.local");
  if (!fs.existsSync(envPath)) return false;

  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
  return true;
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");
      if (!raw) {
        resolve(undefined);
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch {
        resolve(undefined);
      }
    });
    req.on("error", reject);
  });
}

function createMockResponse(serverRes) {
  let statusCode = 200;
  const headers = {};

  const res = {
    setHeader(key, value) {
      headers[key.toLowerCase()] = value;
      return res;
    },
    status(code) {
      statusCode = code;
      return res;
    },
    json(payload) {
      if (!headers["content-type"]) {
        serverRes.setHeader("Content-Type", "application/json");
      }
      for (const [key, value] of Object.entries(headers)) {
        serverRes.setHeader(key, value);
      }
      serverRes.statusCode = statusCode;
      serverRes.end(JSON.stringify(payload));
      return res;
    },
    end(body = "") {
      for (const [key, value] of Object.entries(headers)) {
        serverRes.setHeader(key, value);
      }
      serverRes.statusCode = statusCode;
      serverRes.end(body);
      return res;
    },
  };

  return res;
}

export function giveawayApiDevPlugin() {
  const root = process.cwd();
  let envLoaded = false;

  return {
    name: "giveaway-api-dev",
    configureServer(server) {
      server.middlewares.use(async (nodeReq, nodeRes, next) => {
        const url = nodeReq.url?.split("?")[0] ?? "";
        const match = url.match(/^\/api\/giveaway-winner\/([a-z-]+)$/);
        if (!match) return next();

        if (!envLoaded) {
          envLoaded = loadEnvLocal(root);
          if (!envLoaded) {
            nodeRes.statusCode = 503;
            nodeRes.setHeader("Content-Type", "application/json");
            nodeRes.end(
              JSON.stringify({
                error: "Missing .env.local — run: npm run setup:local-env",
              })
            );
            return;
          }
        }

        const route = match[1];
        const handlerPath = path.join(root, "api", "giveaway-winner", `${route}.js`);
        if (!fs.existsSync(handlerPath)) {
          nodeRes.statusCode = 404;
          nodeRes.setHeader("Content-Type", "application/json");
          nodeRes.end(JSON.stringify({ error: "API route not found" }));
          return;
        }

        try {
          const moduleUrl = `${pathToFileURL(handlerPath).href}?t=${Date.now()}`;
          const { default: handler } = await import(moduleUrl);
          const body = nodeReq.method === "POST" ? await readRequestBody(nodeReq) : undefined;

          const req = {
            method: nodeReq.method,
            headers: nodeReq.headers,
            body,
            socket: { remoteAddress: nodeReq.socket.remoteAddress },
          };

          const res = createMockResponse(nodeRes);
          await handler(req, res);
        } catch (error) {
          console.error("[giveaway-api-dev]", route, error);
          if (!nodeRes.headersSent) {
            nodeRes.statusCode = 500;
            nodeRes.setHeader("Content-Type", "application/json");
            nodeRes.end(JSON.stringify({ error: "Local API handler failed" }));
          }
        }
      });
    },
  };
}
