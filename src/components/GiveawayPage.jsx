import React, { useEffect, useState } from "react";
import { Gift, Star, ChevronDown, Calendar, Trophy, Clock } from "lucide-react";
import { GiveawayTermsLink } from "@/components/GiveawayTermsModal";

const GIVEAWAY_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe--S8HtqbX1759yFJ18o9HQw7XCp2nutPjySITZdr7ImGwgg/viewform?embedded=true";

const FORM_IFRAME_DEFAULT = { mobile: 1420, desktop: 1240 };

const ANNOUNCEMENT_ITEMS = [
  {
    icon: Trophy,
    label: "Winner announcement",
    value: "July 6",
    detail: "The selected winner will be announced on Monday, July 6.",
  },
  {
    icon: Calendar,
    label: "Prize distribution",
    value: "Following week",
    detail: "Verified winners will receive prizes after the announcement.",
  },
  {
    icon: Clock,
    label: "Registration",
    value: "Open now",
    detail: "Submit your entry before the July 6 announcement.",
  },
];

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

function ImportantDatesCard() {
  return (
    <div className="mx-auto max-w-3xl rounded-xl border border-amber-400/30 bg-black/20 px-3 py-3 text-left backdrop-blur-sm sm:rounded-2xl sm:px-5 sm:py-5">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-200 sm:text-xs">
        Important Dates
      </p>
      <ul className="mt-3 grid gap-2.5 sm:grid-cols-3 sm:gap-3">
        {ANNOUNCEMENT_ITEMS.map(({ icon: Icon, label, value, detail }) => (
          <li
            key={label}
            className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 sm:flex-col sm:items-center sm:px-3 sm:py-3 sm:text-center"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 sm:mx-auto">
              <Icon className="h-4 w-4 text-amber-300" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1 sm:w-full">
              <p className="text-[11px] font-medium uppercase tracking-wide text-white/70 sm:text-xs">{label}</p>
              <p className="mt-0.5 text-sm font-semibold text-white sm:text-base">{value}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/80 sm:text-[13px]">{detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RegistrationSteps() {
  return (
    <div className="giveaway-form-steps border-b border-neutral-200/70 dark:border-neutral-800/70 bg-gradient-to-r from-red-50/90 via-white to-blue-50/90 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 px-4 py-3.5 sm:px-6 sm:py-5">
      <div className="mx-auto flex max-w-md items-center justify-center gap-2.5">
        <span className="giveaway-step-dot flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold shadow-md sm:h-9 sm:w-9 sm:text-sm">
          1
        </span>
        <p className="text-left text-xs font-semibold leading-snug text-red-700 dark:text-red-400 sm:text-sm">
          Complete the registration form below to submit your official entry.
        </p>
      </div>
    </div>
  );
}

export default function GiveawayPage() {
  const isMobile = useIsMobile();
  const [rulesOpen, setRulesOpen] = useState(!isMobile);
  const [iframeHeight, setIframeHeight] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768
      ? FORM_IFRAME_DEFAULT.mobile
      : FORM_IFRAME_DEFAULT.desktop
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
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-700 to-blue-900 px-4 py-7 sm:px-6 sm:py-12 md:px-10 md:py-20">
        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white opacity-25 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-blue-300 opacity-20 blur-3xl sm:h-72 sm:w-72" />
        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <div className="mb-4 inline-flex max-w-full items-center gap-1 rounded-full border border-amber-400/30 bg-white/15 px-3 py-1 text-[11px] font-semibold text-amber-200 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-1.5 sm:text-sm">
            <Star className="h-3 w-3 shrink-0 fill-amber-300 text-amber-300 sm:h-3.5 sm:w-3.5" />
            <span className="truncate">America&apos;s 250th Anniversary</span>
            <Star className="h-3 w-3 shrink-0 fill-amber-300 text-amber-300 sm:h-3.5 sm:w-3.5" />
          </div>

          <h1 className="mb-2 px-1 text-2xl font-extrabold leading-tight tracking-tight sm:mb-3 sm:text-3xl md:text-5xl">
            July 4th Giveaway
            <span className="mt-0.5 block text-lg font-bold text-white/95 sm:mt-1 sm:text-2xl md:text-4xl">
              Official Registration
            </span>
          </h1>

          <p className="mx-auto max-w-2xl px-1 text-sm leading-relaxed text-white/90 sm:text-lg md:text-xl">
            Enter for your chance to win from our $250,000 prize pool. Additional details will be published on Monday, July 6.
          </p>

          <div className="mt-5 sm:mt-7">
            <ImportantDatesCard />
          </div>

          <p className="mx-auto mt-4 max-w-xl px-2 text-xs leading-relaxed text-white/75 sm:mt-5 sm:text-sm">
            Registration remains open until the winner announcement. Please review the guidelines below before
            submitting your entry.
          </p>
        </div>
      </section>

      <section className="px-4 py-5 sm:px-6 sm:py-8 md:px-10 md:py-12">
        <div className="mx-auto max-w-3xl space-y-3 sm:space-y-6">
          <div className="overflow-hidden rounded-xl border border-amber-400/25 bg-gradient-to-br from-amber-50 to-red-50 dark:border-amber-400/20 dark:from-neutral-900 dark:to-neutral-900/80 sm:rounded-2xl">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 p-4 text-left sm:p-6 md:cursor-default md:p-8"
              onClick={() => isMobile && setRulesOpen((open) => !open)}
              aria-expanded={rulesOpen}
            >
              <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                <Gift className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400 sm:h-6 sm:w-6" />
                <h2 className="text-base font-bold text-neutral-900 dark:text-white sm:text-xl md:text-2xl">
                  Participation Guidelines
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
              <ul className="list-outside list-disc space-y-2.5 pl-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:space-y-3 sm:pl-5 sm:text-base">
                <li>
                  The winner will be announced on Monday, July 6. Full details will be shared at that time, and prizes will be
                  distributed to verified winners the following week.
                </li>
                <li>Complete and submit the registration form below to enter.</li>
                <li>Participants must be 18 years of age or older.</li>
                <li>One entry per person. Duplicate submissions may be disqualified.</li>
                <li>All entries are subject to verification by Juwa777.</li>
              </ul>
            </div>
          </div>

          <div className="giveaway-form-frame -mx-4 rounded-none bg-gradient-to-r from-red-600 via-amber-100 to-blue-600 p-[2px] shadow-xl shadow-red-900/10 sm:mx-0 sm:rounded-2xl sm:p-[3px]">
            <div className="overflow-hidden rounded-none bg-white dark:bg-neutral-950 sm:rounded-[13px]">
              <RegistrationSteps />
              <div className="hidden border-b border-neutral-200/60 bg-neutral-50/80 px-4 py-3 dark:border-neutral-800/60 dark:bg-neutral-900/50 sm:block">
                <p className="text-center text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Please complete all required fields to submit your entry
                </p>
              </div>
              <div className="giveaway-form-embed relative w-full overflow-hidden bg-white dark:bg-neutral-950">
                <div className="giveaway-form-scroll-fade" aria-hidden="true" />
                <iframe
                  src={GIVEAWAY_FORM_URL}
                  title="America's 250th anniversary Giveaway registration"
                  className="block w-full border-0 bg-white transition-[height] duration-300 ease-out dark:bg-neutral-950"
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

          <p className="px-2 text-center text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-xs">
            <span className="block sm:inline">18+ only · Entertainment purposes only</span>
            <span className="hidden sm:inline"> · </span>
            <span className="mt-1 block sm:mt-0 sm:inline">
              <GiveawayTermsLink className="text-neutral-500 dark:text-neutral-400" />
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
