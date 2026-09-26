export const siteConfig = {
  name: "FreeGoTV",
  url: "https://freegotv.eu.cc",
  supportEmail: "hello@freegotv.eu.cc",
  whatsappNumber: "212753936672",
  whatsappDisplay: "+212 753 936 672",
  description:
    "Discover FreeGoTV streaming plans, free trials, supported devices, channel information and professional customer support.",
  socialLinks: {
    x: "#",
    instagram: "#",
    facebook: "#",
  },
} as const;

export const whatsappMessages = {
  general: "Hi FreeGoTV, I would like more information about your service.",
  pricing: "Hi FreeGoTV, I would like help choosing a subscription plan.",
  trial: "Hi FreeGoTV, I would like to request a free trial.",
  renewal: "Hello, I would like help renewing my FreeGoTV subscription.",
  reseller: "Hi FreeGoTV, I would like more information about your reseller program.",
  support: "Hi FreeGoTV, I need help with my service.",
} as const;

export const getWhatsAppUrl = (message: string = whatsappMessages.general) => {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
