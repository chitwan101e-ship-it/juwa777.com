export const GIVEAWAY_WINNER_COUNT = 500;
export const GIVEAWAY_PRIZE_LABEL = "$500 worth of Bitcoin";
export const GIVEAWAY_PRIZE_SHORT = "$500 BTC";
export const GIVEAWAY_WINNERS_JSON = "/giveaway-winners.json";
export const GIVEAWAY_PRIZE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfiW9GwRtnkNTu0mxhzJttENq9nBq5ScwVzPLrNUQfJJyN28w/viewform?embedded=true";
export const GIVEAWAY_CLAIM_PATH = "/giveaway-claim";
export const JUWA2_DASHBOARD_URL = "https://www.juwa2.com/dashboard";

export const GIVEAWAY_STATUS_ITEMS = [
  {
    key: "winners",
    label: "Winner selection",
    value: "Published",
    detail: `500 winners announced on Monday, July 6. Each receives ${GIVEAWAY_PRIZE_LABEL}.`,
  },
  {
    key: "prizes",
    label: "Prize distribution",
    value: "Claim open",
    detail: "Winners verify their registration email and account to access the secure prize claim form.",
  },
  {
    key: "registration",
    label: "Registration",
    value: "Closed",
    detail: "The entry period has ended. No further registrations are accepted.",
  },
];
