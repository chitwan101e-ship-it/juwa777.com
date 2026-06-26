import React, { useEffect, useState } from "react";
import { Gift, Star, ChevronDown } from "lucide-react";
import { GiveawayTermsLink } from "@/components/GiveawayTermsModal";

const GIVEAWAY_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe--S8HtqbX1759yFJ18o9HQw7XCp2nutPjySITZdr7ImGwgg/viewform?embedded=true";

const FORM_IFRAME_DEFAULT = { mobile: 1420, desktop: 1240 };

function parseGoogleFormHeight(data) {
  if (typeof data === "number" && data > 200) return data;
  if (Array.isArray(data)) {
    if (data[0] === "setHeight" && typeof data[1] === "number") return data[1];
    if (typeof data[0] === "number") return data[0];
  }
  if (data && typeof data === "object") {
    if (typeof data.height === "number") return data.height;
  }
  return null;
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

function RegistrationSteps() {
  return (
    <div className="giveaway-form-steps border-b border-neutral-200/70 dark:border-neutral-800/70 bg-gradient-to-r from-red-50/90 via-white to-blue-50/90 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 px-4 py-4 sm:px-6 sm:py-5">
      <div className="flex items-center justify-center gap-2 max-w-xs mx-auto">
        <div className="giveaway-step giveaway-step--active flex items-center gap-2.5">
          <span className="giveaway-step-dot flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-xs sm:text-sm font-bold shadow-md shrink-0">
            1
          </span>
          <span className="text-xs sm:text-sm font-semibold text-red-700 dark:text-red-400 leading-tight">
            Complete the entry form below
          </span>
        </div>
      </div>
    </div>
  );
}

export default function GiveawayPage() {
  const isMobile = useIsMobile();
  const [rulesOpen, setRulesOpen] = useState(!isMobile);
  const [iframeHeight, setIframeHeight] = useState(
    () => (typeof window !== "undefined" && window.innerWidth < 768
      ? FORM_IFRAME_DEFAULT.mobile
      : FORM_IFRAME_DEFAULT.desktop)
  );

  useEffect(() => {
    setRulesOpen(!isMobile);
    setIframeHeight(isMobile ? FORM_IFRAME_DEFAULT.mobile : FORM_IFRAME_DEFAULT.desktop);
  }, [isMobile]);

  useEffect(() => {
    const onMessage = (event) => {
      if (event.origin !== "https://docs.google.com") return;
      const parsed = parseGoogleFormHeight(event.data);
      if (parsed) setIframeHeight(parsed + 24);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    document.body.classList.add("giveaway-scroll-active");
    return () => document.body.classList.remove("giveaway-scroll-active");
  }, []);

  return (
    <div className="giveaway-page">
      <section className="relative overflow-hidden px-4 sm:px-6 md:px-10 py-6 sm:py-12 md:py-20 bg-gradient-to-br from-red-900 via-red-700 to-blue-900">
        <div className="absolute -top-20 -left-20 h-48 sm:h-72 w-48 sm:w-72 rounded-full blur-3xl opacity-25 bg-white" />
        <div className="absolute -bottom-16 -right-16 h-48 sm:h-72 w-48 sm:w-72 rounded-full blur-3xl opacity-20 bg-blue-300" />
        <div className="relative max-w-4xl mx-auto text-center text-white z-10">
          <div className="inline-flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-white/15 backdrop-blur-sm text-amber-200 text-[11px] sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 border border-amber-400/30 max-w-full">
            <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-300 text-amber-300 shrink-0" />
            <span className="truncate">America&apos;s 250th Anniversary</span>
            <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-300 text-amber-300 shrink-0" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-2 sm:mb-4 leading-tight px-1">
            July 4th Giveaway
            <span className="block text-lg sm:text-2xl md:text-4xl font-bold text-white/95 mt-0.5 sm:mt-1">
              Registration
            </span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-1">
            Win from our $250K prize pool. Complete and submit the form below to enter.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-4 sm:py-8 md:py-12">
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-6">
          <div className="rounded-xl sm:rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-50 to-red-50 dark:from-neutral-900 dark:to-neutral-900/80 dark:border-amber-400/20 overflow-hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 p-4 sm:p-6 md:p-8 md:cursor-default text-left"
              onClick={() => isMobile && setRulesOpen((open) => !open)}
              aria-expanded={rulesOpen}
            >
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <Gift className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600 dark:text-amber-400 shrink-0" />
                <h2 className="text-base sm:text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">
                  July 4th Giveaway Rules
                </h2>
              </div>
              {isMobile && (
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-200 ${
                    rulesOpen ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            <div
              className={`giveaway-rules-panel px-4 sm:px-6 md:px-8 ${
                rulesOpen ? "pb-4 sm:pb-6 md:pb-8" : "max-h-0 overflow-hidden md:max-h-none md:overflow-visible md:pb-8"
              }`}
            >
              <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed list-disc list-outside pl-4 sm:pl-5">
                <li>Complete and submit the giveaway registration form below.</li>
                <li>You must be 18 years or older to enter.</li>
                <li>One entry per person. Duplicate entries may be disqualified.</li>
                <li>All entries are subject to verification by Juwa777.</li>
              </ul>
            </div>
          </div>

          <div className="giveaway-form-frame -mx-4 sm:mx-0 p-[2px] sm:p-[3px] rounded-none sm:rounded-2xl bg-gradient-to-r from-red-600 via-amber-100 to-blue-600 shadow-xl shadow-red-900/10">
            <div className="overflow-hidden rounded-none sm:rounded-[13px] bg-white dark:bg-neutral-950">
              <RegistrationSteps />
              <div className="hidden sm:block px-4 py-3 border-b border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50/80 dark:bg-neutral-900/50">
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 text-center">
                  Fill out all required fields to enter
                </p>
              </div>
              <div className="giveaway-form-embed relative w-full bg-white dark:bg-neutral-950 overflow-hidden">
                <div className="giveaway-form-scroll-fade" aria-hidden="true" />
                <iframe
                  src={GIVEAWAY_FORM_URL}
                  title="America's 250th anniversary Giveaway registration"
                  className="w-full border-0 block bg-white dark:bg-neutral-950 transition-[height] duration-300 ease-out"
                  style={{ height: `${iframeHeight}px` }}
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  loading="lazy"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>

          <p className="text-center text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed px-2">
            <span className="block sm:inline">18+ Only · For Entertainment Purposes Only</span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline mt-1 sm:mt-0">
              <GiveawayTermsLink className="text-neutral-500 dark:text-neutral-400" />
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
