const API_BASE = "/api/giveaway-winner";

async function parseJsonResponse(response) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }
  return data;
}

export async function verifyWinnerCredentials({ email, accountOrId }) {
  const response = await fetch(`${API_BASE}/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, accountOrId }),
  });
  return parseJsonResponse(response);
}

export async function fetchWinnerSession() {
  const response = await fetch(`${API_BASE}/session`, {
    method: "GET",
    credentials: "include",
  });
  return parseJsonResponse(response);
}
