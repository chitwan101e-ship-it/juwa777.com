import {
  applyCors,
  maskAccount,
  parseCookies,
  verifySessionToken,
} from "../_lib/giveawayAuth.js";

export default async function handler(req, res) {
  applyCors(req, res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const cookies = parseCookies(req.headers.cookie);
    const session = verifySessionToken(cookies.gw_session);

    if (!session) {
      return res.status(200).json({ verified: false });
    }

    return res.status(200).json({
      verified: true,
      account: session.account,
      accountMasked: maskAccount(session.account),
      id: session.id,
    });
  } catch (error) {
    console.error("session error:", error);
    return res.status(200).json({ verified: false });
  }
}
