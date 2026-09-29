export const REQUIRED_HEADING_PHRASE = "FreeGoTV IPTV";

export function brandedHeading(text: string) {
  return text.includes(REQUIRED_HEADING_PHRASE) ? text : `${REQUIRED_HEADING_PHRASE} ${text}`;
}
