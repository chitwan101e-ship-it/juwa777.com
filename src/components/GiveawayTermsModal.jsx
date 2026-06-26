import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

function TermsContent() {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
      <p>
        These Terms and Conditions (&quot;Terms&quot;) govern participation in the Juwa777 America&apos;s 250th
        Anniversary July 4th Giveaway (&quot;Giveaway&quot;) operated by Juwa777. By entering, you agree to these Terms.
      </p>

      <div>
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">1. Eligibility</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>You must be at least 18 years of age.</li>
          <li>Participation is for entertainment purposes only.</li>
          <li>Employees, agents, and immediate family members of Juwa777 and its partners may be excluded.</li>
          <li>Void where prohibited by law.</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">2. How to Enter</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Complete and submit the official giveaway registration form on juwa777.com/giveaway.</li>
          <li>Only fully completed entries will be considered valid.</li>
          <li>Limit one entry per person unless otherwise stated by Juwa777.</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">3. Prizes</h3>
        <p>
          Total advertised prize pool is up to $250,000 in virtual credits and/or promotional rewards as determined
          by Juwa777. Prizes are non-transferable, have no cash value unless expressly stated, and may be awarded
          in installments or tiers at Juwa777&apos;s discretion. Actual prize amounts and winners will be announced
          through official Juwa777 channels.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">4. Winner Selection</h3>
        <p>
          Winners will be selected at random from eligible entries. Juwa777 reserves the right to
          disqualify any entry that is incomplete, fraudulent, duplicated, or does not meet entry
          requirements. Winners may be required to confirm identity and account details before receiving a prize.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">5. General Conditions</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>No purchase is necessary to enter or win.</li>
          <li>Juwa777 may modify, suspend, or cancel the Giveaway at any time.</li>
          <li>By entering, you consent to being contacted regarding the Giveaway via the contact information provided.</li>
          <li>Juwa777 is not responsible for lost, late, incomplete, or misdirected entries.</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">6. Privacy</h3>
        <p>
          Information submitted through the registration form will be used solely to administer the Giveaway and
          contact entrants as needed. Juwa777 will not sell your personal information to third parties.
        </p>
      </div>

      <p className="text-xs text-neutral-500 dark:text-neutral-400 pt-2">
        Last updated: June 25, 2026. Questions? Contact Juwa777 support through our Contact page.
      </p>
    </div>
  );
}

export function GiveawayTermsModal({ open, onClose }) {
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

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => onClose?.(), 200);
  };

  if (!open) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity duration-200 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="giveaway-terms-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
        aria-label="Close terms"
      />

      <div
        className={`relative flex w-full max-w-lg max-h-[92dvh] sm:max-h-[85dvh] flex-col overflow-hidden rounded-t-2xl sm:rounded-2xl border border-neutral-200/60 bg-white shadow-2xl dark:border-neutral-800/60 dark:bg-neutral-950 transition-all duration-200 ${
          closing ? "scale-[0.98] opacity-0" : "scale-100 opacity-100"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-neutral-200/60 px-4 sm:px-5 py-3 sm:py-4 dark:border-neutral-800/60 shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <FileText className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0" />
            <h2 id="giveaway-terms-title" className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white truncate">
              Terms &amp; Conditions
            </h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-white"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-4">
          <TermsContent />
        </div>

        <div className="border-t border-neutral-200/60 px-5 py-4 dark:border-neutral-800/60 shrink-0">
          <Button
            className="w-full text-white hover:opacity-90"
            style={{ background: "#dc2626", borderColor: "#dc2626" }}
            onClick={handleClose}
          >
            I Understand
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export function GiveawayTermsLink({ className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`underline underline-offset-2 transition-colors hover:text-red-600 dark:hover:text-red-400 ${className}`}
      >
        Terms &amp; Conditions
      </button>
      <GiveawayTermsModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
