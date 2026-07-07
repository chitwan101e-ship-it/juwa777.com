/**
 * Creates .env.local for local API testing (gitignored).
 * Run: npm run setup:local-env
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const envPath = path.join(root, ".env.local");
const examplePath = path.join(root, ".env.example");
const registryPath = path.join(root, "data", "giveaway-winner-registry.json");

function readExistingSecret() {
  if (!fs.existsSync(envPath)) return null;
  const match = fs.readFileSync(envPath, "utf8").match(/^GIVEAWAY_AUTH_SECRET=(.+)$/m);
  return match?.[1]?.trim() || null;
}

function ensureRegistry() {
  if (fs.existsSync(registryPath)) return;

  console.log("Registry file missing — running npm run build:registry …");
  const result = spawnSync("npm", ["run", "build:registry"], {
    cwd: root,
    shell: true,
    stdio: "inherit",
  });
  if (result.status !== 0 || !fs.existsSync(registryPath)) {
    console.error("Could not build data/giveaway-winner-registry.json");
    process.exit(1);
  }
}

ensureRegistry();

const secret = readExistingSecret() || crypto.randomBytes(32).toString("hex");
const registryJson = fs.readFileSync(registryPath, "utf8").trim();

const envLocal = `# Local testing only — this file is gitignored.
# Start the app + API together: npm run dev:full
# Or frontend only (no verify API): npm run dev

GIVEAWAY_AUTH_SECRET=${secret}
GIVEAWAY_WINNER_REGISTRY_JSON=${registryJson}
`;

fs.writeFileSync(envPath, envLocal, "utf8");

const envExample = `# Copy to .env.local for local testing: npm run setup:local-env
# Production: set these in Vercel Dashboard -> Settings -> Environment Variables

# Random string, at least 32 characters (generate: npm run setup:local-env)
GIVEAWAY_AUTH_SECRET=replace-with-long-random-secret-min-32-chars

# Minified JSON from data/giveaway-winner-registry.json (generate: npm run build:registry)
GIVEAWAY_WINNER_REGISTRY_JSON={"winnerCount":500,"winners":[...]}

# Optional — only if testing from a non-production origin
# GIVEAWAY_ALLOWED_ORIGIN=http://localhost:5173
`;

fs.writeFileSync(examplePath, envExample, "utf8");

console.log("");
console.log("Created .env.local for local testing");
console.log(`  GIVEAWAY_AUTH_SECRET=${secret.slice(0, 8)}… (${secret.length} chars)`);
console.log(`  GIVEAWAY_WINNER_REGISTRY_JSON=${registryJson.length} chars (${JSON.parse(registryJson).winnerCount} winners)`);
console.log("");
console.log("Next: npm run dev:full   (needs Vercel CLI: npm i -g vercel)");
console.log("      then open http://localhost:3000/giveaway-claim");
