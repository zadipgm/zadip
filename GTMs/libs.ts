export function isBrowser(): boolean {
  return typeof window !== "undefined";
}
export const trackEvent = (
  screenName: string,
  event: string,
  eventAction: string,
  eventLabel: string,
  Language: string = "ar",
  device: string = "mobile"
) => {
  if (!isBrowser()) return;
  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  // @ts-ignore
  window.dataLayer.push({
    Screen: screenName,
    event: event,
    eventAction: eventAction,
    eventLabel: eventLabel,
    Language: Language,
    device: device
  });
};
