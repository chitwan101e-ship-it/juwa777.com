import React, { useState } from "react";
import { Search, Trophy, Sparkles, Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  GIVEAWAY_PRIZE_LABEL,
  GIVEAWAY_WINNER_COUNT,
  GIVEAWAY_CLAIM_PATH,
  JUWA2_DASHBOARD_URL,
} from "@/lib/giveawayConstants";
import { lookupWinner, useGiveawayWinners, useWinnerIndexes } from "@/lib/useGiveawayWinners";

export default function GiveawayWinnerLookup({ onViewAllWinners }) {
  const { loading, error, data } = useGiveawayWinners();
  const indexes = useWinnerIndexes(data?.winners);
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState(null);

  function handleSearch(e) {
    e?.preventDefault();
    if (loading || error) return;
    const match = lookupWinner(query, indexes);
    setResult(match);
    setSearched(true);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-amber-400/30 bg-white shadow-lg dark:border-amber-400/20 dark:bg-neutral-950 sm:rounded-2xl">
      <div className="border-b border-amber-200/50 bg-gradient-to-r from-amber-50 via-white to-red-50 px-4 py-5 dark:border-amber-900/30 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 sm:px-6 sm:py-6">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
          <Trophy className="h-5 w-5 shrink-0" />
          <h2 className="text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">Check if you won</h2>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          Enter the <strong className="font-semibold text-neutral-800 dark:text-neutral-200">username</strong> or{" "}
          <strong className="font-semibold text-neutral-800 dark:text-neutral-200">user ID</strong> you used when you
          registered. {GIVEAWAY_WINNER_COUNT} winners each receive {GIVEAWAY_PRIZE_LABEL}.
        </p>

        <form onSubmit={handleSearch} className="mt-4 flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSearched(false);
              }}
              placeholder="Username or user ID"
              disabled={loading || !!error}
              className="w-full rounded-xl border border-neutral-200 bg-white py-3 pl-9 pr-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 disabled:opacity-60 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
              autoComplete="off"
              aria-label="Username or user ID"
            />
          </div>
          <Button
            type="submit"
            disabled={loading || !!error || !query.trim()}
            style={{ background: "#dc2626", borderColor: "#dc2626" }}
            className="h-12 w-full shrink-0 px-6 text-white hover:opacity-90 sm:w-auto"
          >
            Check result
          </Button>
        </form>

        {loading ? (
          <p className="mt-3 text-xs text-neutral-500">Loading official winner data…</p>
        ) : error ? (
          <p className="mt-3 text-xs text-red-600 dark:text-red-400">{error}</p>
        ) : null}

        <p className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
          Need more info?{" "}
          <a
            href={JUWA2_DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-red-600 underline-offset-2 hover:underline dark:text-red-400"
          >
            juwa2.com
            <ExternalLink className="h-3 w-3 opacity-70" aria-hidden="true" />
          </a>
        </p>
      </div>

      {searched && !loading && !error ? (
        <div className="px-4 py-5 sm:px-6 sm:py-6">
          {result ? (
            <div className="rounded-xl border border-emerald-300/60 bg-gradient-to-br from-emerald-50 to-amber-50 p-5 text-center dark:border-emerald-800/50 dark:from-emerald-950/40 dark:to-amber-950/20 sm:p-6">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15">
                <Sparkles className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
                Congratulations!
              </p>
              <h3 className="mt-2 text-xl font-extrabold text-neutral-900 dark:text-white sm:text-2xl">
                You are a winner!
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="text-neutral-900 dark:text-white">@{result.account}</strong> (ID: {result.id}) has
                been selected as one of our {GIVEAWAY_WINNER_COUNT} winners. Your prize is{" "}
                <strong className="text-neutral-900 dark:text-white">{GIVEAWAY_PRIZE_LABEL}</strong>.
              </p>
              <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                To receive your {GIVEAWAY_PRIZE_LABEL} prize, verify your registration email and account on the secure
                claim page.
              </p>
              <a
                href={GIVEAWAY_CLAIM_PATH}
                className="mt-5 inline-flex h-12 items-center justify-center rounded-xl bg-emerald-600 px-6 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700"
              >
                Claim your prize — verify details
              </a>
            </div>
          ) : (
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 text-center dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-6">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-200/80 dark:bg-neutral-800">
                <Heart className="h-7 w-7 text-neutral-500 dark:text-neutral-400" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                Not selected this time
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                We&apos;re sorry — your username or user ID was not on the official winner list for this giveaway.
                Thank you for participating.
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                More promotions and giveaways are coming soon. Stay connected with Juwa777 so you don&apos;t miss the
                next opportunity.
              </p>
            </div>
          )}

          <p className="mt-4 text-center text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-xs">
            Want to verify the full list?{" "}
            <button
              type="button"
              onClick={onViewAllWinners}
              className="font-semibold text-red-600 underline-offset-2 hover:underline dark:text-red-400"
            >
              View all {GIVEAWAY_WINNER_COUNT} winners
            </button>
          </p>
        </div>
      ) : null}
    </div>
  );
}
