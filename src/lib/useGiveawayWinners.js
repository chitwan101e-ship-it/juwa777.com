import { useEffect, useMemo, useState } from "react";
import { GIVEAWAY_WINNERS_JSON } from "@/lib/giveawayConstants";

let cachedPromise = null;

export function loadGiveawayWinners() {
  if (!cachedPromise) {
    cachedPromise = fetch(GIVEAWAY_WINNERS_JSON)
      .then((r) => {
        if (!r.ok) throw new Error("Could not load winner list");
        return r.json();
      })
      .then((data) => {
        const winners = Array.isArray(data?.winners) ? data.winners : [];
        return {
          publishedAt: data?.publishedAt ?? "",
          winnerCount: data?.winnerCount ?? winners.length,
          prizeDescription: data?.prizeDescription ?? "",
          winners,
        };
      });
  }
  return cachedPromise;
}

export function useGiveawayWinners() {
  const [state, setState] = useState({ loading: true, error: null, data: null });

  useEffect(() => {
    let cancelled = false;
    loadGiveawayWinners()
      .then((data) => {
        if (!cancelled) setState({ loading: false, error: null, data });
      })
      .catch((e) => {
        if (!cancelled) {
          setState({
            loading: false,
            error: e instanceof Error ? e.message : "Failed to load winners",
            data: null,
          });
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}

export function normalizeLookupQuery(raw) {
  const trimmed = String(raw ?? "").trim();
  if (!trimmed) return "";
  if (/^\d+$/.test(trimmed)) return trimmed;
  return trimmed.replace(/^@+/, "").toLowerCase();
}

export function buildWinnerIndexes(winners) {
  const byAccount = new Map();
  const byId = new Map();
  for (const w of winners) {
    const account = String(w.account ?? "").trim();
    const id = String(w.id ?? "").trim();
    if (account) byAccount.set(account.toLowerCase(), w);
    if (id) byId.set(id, w);
  }
  return { byAccount, byId };
}

export function lookupWinner(query, indexes) {
  const q = normalizeLookupQuery(query);
  if (!q) return null;
  if (/^\d+$/.test(q)) return indexes.byId.get(q) ?? null;
  return indexes.byAccount.get(q) ?? null;
}

export function useWinnerIndexes(winners) {
  return useMemo(() => buildWinnerIndexes(winners ?? []), [winners]);
}
