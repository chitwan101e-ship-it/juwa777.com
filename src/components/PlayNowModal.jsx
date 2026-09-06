import React, { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";

const JUWA1_URL = "https://m.juwaauto.com/v1/user/register?code=1AZu1S";
const JUWA2_URL = "https://m.juwa2.xin/v1/user/register?code=1AZu1F";
const TRP_URL = "https://www.therightpay.com/sign-up?invite_code=1AZu1O";
const TELEGRAM_URL = "https://t.me/juwaauto";
const JUWA1_LOGO = "/logo.png";
const JUWA2_LOGO = "/juwa2/juwa2%20logo.png";

const platformCardClass =
  "group relative rounded-xl border border-red-500/50 bg-gradient-to-b from-red-600 to-red-800 px-4 py-5 sm:px-3 sm:py-4 shadow-[0_0_24px_rgba(220,38,38,0.35)] hover:shadow-[0_0_36px_rgba(220,38,38,0.55)] hover:border-red-400 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]";

export default function PlayNowModal({ open, onClose }) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!open) {
      setClosing(false);
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open && !closing) return null;

  const dismiss = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose?.();
    }, 220);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 ${
        closing ? "opacity-0" : "opacity-100"
      } transition-opacity duration-200`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="play-now-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close play options"
        onClick={dismiss}
      />

      <div
        className={`relative w-full max-w-sm sm:max-w-lg rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl ${
          closing ? "" : "animate-popup-in"
        }`}
      >
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-3 top-3 z-10 rounded-lg p-1.5 text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="px-5 pt-6 pb-5 sm:px-6 sm:pt-7 sm:pb-6">
          <div className="flex items-center gap-2 mb-1 pr-8">
            <Sparkles className="h-5 w-5 shrink-0 text-red-500" />
            <h2 id="play-now-title" className="text-lg sm:text-xl font-bold text-white">
              Choose your platform
            </h2>
          </div>
          <p className="text-sm text-neutral-400 mb-4 sm:mb-5">
            Pick where you want to play.
          </p>

          <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-4">
            <a
              href={JUWA1_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className={platformCardClass}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <img
                  src={JUWA1_LOGO}
                  alt="Juwa1 logo"
                  className="h-24 sm:h-20 w-auto max-w-full object-contain drop-shadow-md group-hover:scale-[1.03] transition-transform duration-300"
                />
                <span className="inline-flex items-center rounded-lg bg-white/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white border border-white/30 group-hover:bg-white/25 transition-colors">
                  Play Now
                </span>
              </div>
            </a>

            <a
              href={JUWA2_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className={platformCardClass}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <img
                  src={JUWA2_LOGO}
                  alt="Juwa2 logo"
                  className="h-28 sm:h-24 w-auto max-w-full object-contain drop-shadow-md group-hover:scale-[1.03] transition-transform duration-300"
                />
                <span className="inline-flex items-center rounded-lg bg-white/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white border border-white/30 group-hover:bg-white/25 transition-colors">
                  Play Now
                </span>
              </div>
            </a>
          </div>

          <a
            href={TRP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="mt-3 sm:mt-4 flex w-full items-center justify-center rounded-xl border border-emerald-400/50 bg-gradient-to-b from-emerald-500 to-emerald-700 px-4 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_24px_rgba(16,185,129,0.35)] hover:shadow-[0_0_36px_rgba(16,185,129,0.55)] hover:border-emerald-300 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            TRP
          </a>

          <p className="mt-4 text-center text-sm text-neutral-400">
            For more info contact{" "}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-2 hover:text-[#40B3E0] transition-colors"
            >
              Telegram
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
