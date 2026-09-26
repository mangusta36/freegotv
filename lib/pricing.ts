export type BillingPeriod = "trial" | "monthly" | "quarterly" | "semiannual" | "annual";

export const billingPeriods: { id: BillingPeriod; label: string; detail: string }[] = [
  { id: "trial", label: "Free Trial", detail: "try first" },
  { id: "monthly", label: "Monthly", detail: "billed monthly" },
  { id: "quarterly", label: "Quarterly", detail: "every 3 months" },
  { id: "semiannual", label: "Semi-Annually", detail: "every 6 months" },
  { id: "annual", label: "Annually", detail: "best value" },
];

export const connectionOptions = [1, 2, 3, 4, 5, 6] as const;

const prices: Record<BillingPeriod, number[]> = {
  trial: [0, 0, 0, 0, 0, 0],
  monthly: [23, 18, 24, 30, 36, 42],
  quarterly: [37, 48, 64, 80, 96, 112],
  semiannual: [47, 87, 116, 145, 174, 203],
  annual: [67, 156, 208, 260, 312, 364],
};

export const getPlan = (period: BillingPeriod, connections: number) => {
  const price = prices[period][connections - 1];
  const periodText: Record<BillingPeriod, string> = {
    trial: "free trial",
    monthly: "per month",
    quarterly: "every 3 months",
    semiannual: "every 6 months",
    annual: "per year",
  };
  return {
    price,
    currencySymbol: period !== "trial" && connections === 1 ? "$" : "€",
    periodText: periodText[period],
    name: connections === 1 ? "Solo Stream" : `${connections} Connections`,
    recommended: period === "annual" && connections === 1,
  };
};

export const planFeatures = [
  "Authorized live & on-demand catalogue",
  "HD and 4K where available",
  "Electronic program guide",
  "Setup help from our support team",
];
