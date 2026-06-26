import React, { useEffect, useState } from "react";
import { X, Gift, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GiveawayTermsLink } from "@/components/GiveawayTermsModal";

function PatrioticAccent() {
  return (
    <div className="relative h-7 shrink-0 overflow-hidden sm:h-9" aria-hidden="true">
      <div className="patriotic-accent-stripes absolute inset-0 opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/25 to-black/85" />
      <div className="patriotic-accent-glow absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

      <div className="absolute inset-0 flex items-center justify-center px-3">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-2.5 py-0.5 shadow-[0_4px_20px_rgba(0,0,0,0.45)] backdrop-blur-md sm:gap-3 sm:px-4 sm:py-1">
          <span className="hidden h-px w-6 bg-gradient-to-r from-transparent via-red-400/70 to-white/50 sm:block sm:w-10" />
          <div className="flex items-center gap-0.5 rounded-full bg-gradient-to-b from-[#1d4ed8] to-[#0f172a] px-2 py-0.5 sm:gap-1 sm:px-2.5 sm:py-1">
            {[0, 1, 2].map((i) => (
              <Star
                key={i}
                className="h-2 w-2 fill-white/95 text-white/95 drop-shadow-[0_0_6px_rgba(255,255,255,0.35)] sm:h-2.5 sm:w-2.5"
              />
            ))}
          </div>
          <span className="hidden h-px w-6 bg-gradient-to-l from-transparent via-blue-400/70 to-white/50 sm:block sm:w-10" />
        </div>
      </div>
    </div>
  );
}

export default function AnniversaryGiveawayPopup({ onEnterGiveaway }) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  const dismiss = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 280);
  };

  const handleEnterGiveaway = () => {
    dismiss();
    onEnterGiveaway?.();
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 transition-opacity duration-300 sm:p-4 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
      style={{
        paddingTop: "max(0.75rem, env(safe-area-inset-top))",
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="giveaway-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={dismiss}
        aria-label="Close announcement"
      />

      <div
        className={`giveaway-popup relative flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-red-900/40 transition-all duration-300 sm:max-w-lg sm:rounded-3xl ${
          closing ? "scale-[0.98] opacity-0" : "scale-100 opacity-100 animate-popup-in"
        }`}
        style={{ maxHeight: "calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 1.5rem)" }}
      >
        <PatrioticAccent />

        <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
          <img
            src="/250.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-hidden="true"
          />

          <div className="pointer-events-none absolute inset-0 bg-black/50" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/90" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

          <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden px-3.5 py-2.5 text-center text-white sm:px-6 sm:py-4">
            <button
              type="button"
              onClick={dismiss}
              className="absolute right-1.5 top-1.5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white/90 backdrop-blur-sm transition-colors hover:bg-black/60 hover:text-white sm:right-2 sm:top-2"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="giveaway-popup-badge relative mx-auto inline-flex max-w-full shrink-0 items-center gap-1 rounded-full border border-amber-400/40 bg-black/45 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-amber-300 backdrop-blur-sm sm:text-[10px]">
              <Star className="h-2.5 w-2.5 shrink-0 fill-amber-300 text-amber-300" />
              <span className="truncate">Limited Announcement</span>
              <Star className="h-2.5 w-2.5 shrink-0 fill-amber-300 text-amber-300" />
            </div>

            <p className="giveaway-popup-eyebrow relative mt-1.5 shrink-0 text-[10px] font-medium uppercase tracking-[0.16em] text-red-300 drop-shadow-md sm:text-xs">
              Get Ready For
            </p>

            <h2
              id="giveaway-title"
              className="giveaway-popup-title relative mt-0.5 shrink-0 px-5 text-[1.05rem] font-extrabold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] sm:px-0 sm:text-2xl"
            >
              America&apos;s Anniversary
              <span className="block bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                Biggest Giveaway Ever
              </span>
            </h2>

            <div className="giveaway-popup-prize relative mx-auto my-1.5 flex w-full max-w-[13rem] shrink-0 flex-col items-center rounded-xl border border-amber-400/35 bg-black/45 px-3 py-2 shadow-lg shadow-black/40 backdrop-blur-md sm:my-2 sm:max-w-[15rem] sm:rounded-2xl sm:px-5 sm:py-3">
              <Gift className="mb-0.5 h-4 w-4 text-amber-400 sm:mb-1 sm:h-5 sm:w-5" />
              <div className="giveaway-shimmer text-[clamp(1.75rem,7vw,2.5rem)] font-black leading-none tracking-tight text-amber-400 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                $250K
              </div>
              <p className="mt-0.5 text-[9px] font-bold uppercase tracking-widest text-white/90 sm:text-[10px]">
                Total Prize Pool
              </p>
            </div>

            <p className="giveaway-popup-status relative shrink-0 text-sm font-semibold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] sm:text-[15px]">
              Registration Is Open
            </p>
            <p className="giveaway-popup-desc relative mx-auto mt-0.5 max-w-xs shrink-0 px-1 text-[11px] leading-snug text-neutral-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] sm:text-xs">
              Enter now — complete the registration form to qualify.
            </p>

            <div className="giveaway-popup-actions mt-auto shrink-0 pt-2">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-2.5">
                <Button
                  style={{ background: "#dc2626", borderColor: "#dc2626" }}
                  className="h-10 w-full py-2 text-sm text-white hover:opacity-90 sm:flex-1"
                  onClick={handleEnterGiveaway}
                >
                  Enter Giveaway
                </Button>
                <Button
                  variant="outline"
                  className="h-10 w-full border-white/30 bg-black/20 py-2 text-sm text-white hover:bg-white/10 sm:flex-1"
                  onClick={dismiss}
                >
                  Maybe Later
                </Button>
              </div>

              <p className="mt-2 text-center text-[9px] leading-tight text-neutral-400 sm:text-[10px]">
                18+ Only · For Entertainment Purposes Only ·{" "}
                <GiveawayTermsLink className="text-neutral-400 hover:text-white" />
              </p>
            </div>
          </div>
        </div>

        <div
          className="h-px shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(178,34,52,0.55) 22%, rgba(255,255,255,0.45) 42%, rgba(37,99,235,0.55) 50%, rgba(255,255,255,0.45) 58%, rgba(178,34,52,0.55) 78%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
