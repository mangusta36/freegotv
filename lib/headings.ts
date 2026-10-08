export const REQUIRED_HEADING_PHRASE = "FreeGoTV IPTV";

export function brandedHeading(text: string) {
  return text.replace(/\bFreeGoTV IPTV\s+IPTV\b/g, "FreeGoTV IPTV").trim();
}
