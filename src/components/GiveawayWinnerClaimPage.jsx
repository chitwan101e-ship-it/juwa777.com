import React, { useEffect, useState } from "react";
import { ShieldCheck, Mail, FileText, CheckCircle2, Loader2, Lock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GIVEAWAY_PRIZE_FORM_URL, GIVEAWAY_PRIZE_LABEL } from "@/lib/giveawayConstants";
import { fetchWinnerSession, verifyWinnerCredentials } from "@/lib/giveawayClaimApi";

const STEPS = [
  { key: "verify", label: "Verify details", icon: Mail },
  { key: "form", label: "Claim form", icon: FileText },
];

function StepIndicator({ currentStep }) {
  return (
    <ol className="mx-auto flex max-w-md items-center justify-between gap-2">
      {STEPS.map((step, index) => {
        const Icon = step.icon;
        const active = index === currentStep;
        const done = index < currentStep;
        return (
          <li
            key={step.key}
            className={`giveaway-step flex flex-1 flex-col items-center gap-1.5 text-center ${
              active ? "giveaway-step--active" : ""
            }`}
          >
            <span
              className={`giveaway-step-dot flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${
                done ? "opacity-90" : active ? "" : "bg-neutral-200 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
              }`}
            >
              {done ? <CheckCircle2 className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
            </span>
            <span className={`text-[10px] font-semibold uppercase tracking-wide sm:text-xs ${active || done ? "text-neutral-900 dark:text-white" : "text-neutral-500"}`}>
              {step.label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

export default function GiveawayWinnerClaimPage({ onBackToGiveaway }) {
  const [step, setStep] = useState(0);
  const [loadingSession, setLoadingSession] = useState(true);
  const [email, setEmail] = useState("");
  const [accountOrId, setAccountOrId] = useState("");
  const [verifiedAccount, setVerifiedAccount] = useState("");
  const [verifiedId, setVerifiedId] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.classList.add("giveaway-scroll-active");
    return () => document.body.classList.remove("giveaway-scroll-active");
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetchWinnerSession()
      .then((data) => {
        if (cancelled) return;
        if (data.verified) {
          setVerifiedAccount(data.account ?? "");
          setVerifiedId(data.id ?? "");
          setStep(1);
        }
      })
      .catch(() => {
        /* unauthenticated */
      })
      .finally(() => {
        if (!cancelled) setLoadingSession(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleVerify(e) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const data = await verifyWinnerCredentials({ email, accountOrId });
      setVerifiedAccount(data.account ?? "");
      setVerifiedId(data.id ?? "");
      setStep(1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verification failed.");
    } finally {
      setBusy(false);
    }
  }

  if (loadingSession) {
    return (
      <div className="giveaway-page flex min-h-[50vh] items-center justify-center px-4 py-16">
        <Loader2 className="h-8 w-8 animate-spin text-red-600" />
      </div>
    );
  }

  return (
    <div className="giveaway-page">
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-700 to-blue-900 px-4 py-8 sm:px-6 sm:py-12 md:px-10">
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-100">
            <Lock className="h-3.5 w-3.5" />
            Secure winner access
          </div>
          <h1 className="text-2xl font-extrabold sm:text-3xl md:text-4xl">Winner prize claim form</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            Confirm the email and account you used when you registered for the giveaway. If you are an official winner,
            you can complete the claim form to receive your {GIVEAWAY_PRIZE_LABEL} prize.
          </p>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 sm:py-8 md:px-10">
        <div className="mx-auto max-w-3xl space-y-6">
          <button
            type="button"
            onClick={onBackToGiveaway}
            className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:underline dark:text-red-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to giveaway page
          </button>

          <StepIndicator currentStep={step} />

          {error ? (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200">
              {error}
            </div>
          ) : null}

          {step === 0 ? (
            <div className="overflow-hidden rounded-xl border border-amber-400/30 bg-white shadow-lg dark:border-amber-400/20 dark:bg-neutral-950 sm:rounded-2xl">
              <div className="border-b border-neutral-200 px-4 py-5 dark:border-neutral-800 sm:px-6">
                <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Step 1 — Verify your details</h2>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Enter the same email and username or user ID you used when you entered the giveaway. We check these
                  against our official winner records on our server.
                </p>
              </div>
              <form onSubmit={handleVerify} className="space-y-4 px-4 py-5 sm:px-6 sm:py-6">
                <div>
                  <label htmlFor="winner-email" className="mb-1.5 block text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    Registration email
                  </label>
                  <input
                    id="winner-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-3 text-sm text-neutral-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="winner-account" className="mb-1.5 block text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    Username or user ID
                  </label>
                  <input
                    id="winner-account"
                    type="text"
                    value={accountOrId}
                    onChange={(e) => setAccountOrId(e.target.value)}
                    required
                    autoComplete="off"
                    placeholder="Username or user ID"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-3 text-sm text-neutral-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={busy || !email.trim() || !accountOrId.trim()}
                  style={{ background: "#dc2626", borderColor: "#dc2626" }}
                  className="h-12 w-full text-white hover:opacity-90"
                >
                  {busy ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <ShieldCheck className="mr-2 h-4 w-4" />}
                  Verify and continue
                </Button>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Only official winners whose email and account details match our records can access the claim form.
                </p>
              </form>
            </div>
          ) : null}

          {step === 1 ? (
            <div className="overflow-hidden rounded-xl border border-emerald-300/50 bg-white shadow-lg dark:border-emerald-800/40 dark:bg-neutral-950 sm:rounded-2xl">
              <div className="border-b border-emerald-200/60 bg-gradient-to-r from-emerald-50 to-white px-4 py-5 dark:border-emerald-900/40 dark:from-emerald-950/30 dark:to-neutral-950 sm:px-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Step 2 — Complete your claim form</h2>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Verified winner: <strong className="text-neutral-900 dark:text-white">@{verifiedAccount}</strong>
                      {verifiedId ? (
                        <>
                          {" "}
                          (ID: <strong className="text-neutral-900 dark:text-white">{verifiedId}</strong>)
                        </>
                      ) : null}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative px-2 py-4 sm:px-4 sm:py-6">
                <div className="giveaway-form-embed relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/40">
                  <iframe
                    src={GIVEAWAY_PRIZE_FORM_URL}
                    width="640"
                    height="1104"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Juwa777 winner prize claim form"
                    className="mx-auto block w-full max-w-full"
                  >
                    Loading…
                  </iframe>
                  <span className="giveaway-form-scroll-fade" aria-hidden="true" />
                </div>
                <p className="mt-4 px-2 text-center text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Submit this form once with accurate payout details. Your verified session expires after 4 hours for
                  security.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
