import React, { useEffect, useMemo, useState } from "react";
import { X, Search, Users } from "lucide-react";
import { GIVEAWAY_PRIZE_LABEL, GIVEAWAY_WINNER_COUNT } from "@/lib/giveawayConstants";
import { useGiveawayWinners } from "@/lib/useGiveawayWinners";

export default function GiveawayWinnersModal({ open, onClose }) {
  const { loading, error, data } = useGiveawayWinners();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) setFilter("");
  }, [open]);

  const filtered = useMemo(() => {
    const list = data?.winners ?? [];
    const q = filter.trim().toLowerCase();
    if (!q) return list;
    return list.filter((w) => String(w.name ?? "").toLowerCase().includes(q));
  }, [data?.winners, filter]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="winners-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close winner list"
      />

      <div className="relative flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950 sm:max-h-[85dvh] sm:rounded-2xl">
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-neutral-200 px-4 py-4 dark:border-neutral-800 sm:px-5">
          <div className="min-w-0">
            <div className="mb-1 flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <Users className="h-4 w-4 shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wide">Official list</span>
            </div>
            <h2 id="winners-modal-title" className="text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
              {GIVEAWAY_WINNER_COUNT} Giveaway Winners
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-sm">
              Each winner receives {GIVEAWAY_PRIZE_LABEL}. Winners are listed by name to protect account details.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="shrink-0 border-b border-neutral-200 px-4 py-3 dark:border-neutral-800 sm:px-5">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              type="search"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Filter by name…"
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 py-2.5 pl-9 pr-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
              autoComplete="off"
            />
          </div>
          <p className="mt-2 text-[11px] text-neutral-500 dark:text-neutral-400">
            Showing {filtered.length} of {data?.winnerCount ?? GIVEAWAY_WINNER_COUNT} winners
          </p>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {loading ? (
            <p className="px-4 py-8 text-center text-sm text-neutral-500">Loading winner list…</p>
          ) : error ? (
            <p className="px-4 py-8 text-center text-sm text-red-600 dark:text-red-400">{error}</p>
          ) : (
            <table className="w-full text-left text-sm">
              <thead className="sticky top-0 z-10 bg-neutral-50 text-[11px] font-semibold uppercase tracking-wide text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400">
                <tr>
                  <th className="px-4 py-2.5 sm:px-5">#</th>
                  <th className="px-2 py-2.5">Winner</th>
                  <th className="px-4 py-2.5 text-right sm:px-5">Prize</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {filtered.map((w, i) => (
                  <tr key={`${w.id}-${i}`} className="text-neutral-800 dark:text-neutral-200">
                    <td className="px-4 py-2.5 tabular-nums text-neutral-500 sm:px-5">{i + 1}</td>
                    <td className="px-2 py-2.5 font-medium">{w.name}</td>
                    <td className="px-4 py-2.5 text-right text-xs font-medium text-amber-700 dark:text-amber-300 sm:px-5">
                      {GIVEAWAY_PRIZE_LABEL}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {!loading && !error && filtered.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-neutral-500">No matches for your filter.</p>
          ) : null}
        </div>

        <div className="shrink-0 border-t border-neutral-200 px-4 py-3 text-center text-[11px] leading-relaxed text-neutral-500 dark:border-neutral-800 dark:text-neutral-400 sm:px-5 sm:text-xs">
          For privacy, emails are not published. Use the checker on the giveaway page for your personal result.
        </div>
      </div>
    </div>
  );
}
