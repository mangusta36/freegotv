export type BillingPeriod = "trial" | "monthly" | "quarterly" | "semiannual" | "annual";

export const billingPeriods: { id: BillingPeriod; label: string; detail: string }[] = [
  { id: "trial", label: "Free Trial", detail: "try first" },
  { id: "monthly", label: "Monthly", detail: "billed monthly" },
  { id: "quarterly", label: "Quarterly", detail: "every 3 months" },
  { id: "semiannual", label: "Semi-Annually", detail: "every 6 months" },
  { id: "annual", label: "Annually", detail: "best value" },
];

export const connectionOptions = [1, 2, 3, 4, 5, 6] as const;

export const basePrices: Record<BillingPeriod, number> = {
  trial: 0,
  monthly: 23,
  quarterly: 37,
  semiannual: 47,
  annual: 67,
};

export const additionalDeviceMultiplier = 1.7;

export const calculatePlanPrice = (period: BillingPeriod, connections: number) => {
  const basePrice = basePrices[period];
  if (connections === 1) return basePrice;
  return Math.round(basePrice * additionalDeviceMultiplier * (connections - 1));
};

export const getPlan = (period: BillingPeriod, connections: number) => {
  const price = calculatePlanPrice(period, connections);
  const periodText: Record<BillingPeriod, string> = {
    trial: "free trial",
    monthly: "per month",
    quarterly: "every 3 months",
    semiannual: "every 6 months",
    annual: "per year",
  };
  return {
    price,
    currencySymbol: "$",
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
