export type BusinessCircleStatus = "registration_open" | "full" | "completed";

// Flip this when the first session fills up or has already happened.
export const BUSINESS_CIRCLE_STATUS: BusinessCircleStatus = "registration_open";

export const BUSINESS_CIRCLE_CAPACITY = 8;

export const BUSINESS_CIRCLE_EVENT = {
  name: "Navaro Business Circle #001",
  topic: "Cenové ponuky pod kontrolou",
  theme: "Business procesy, ktoré nás spomaľujú",
  dateLabel: "29. júl 2026",
  dateISO: "2026-07-29T08:00:00+02:00",
  timeLabel: "08:00–08:45",
  timezone: "Europe/Bratislava",
  location: "Online cez Google Meet",
  language: "slovenčina",
};

// Configure the Google Form link in the hosting provider's environment
// settings as NEXT_PUBLIC_BUSINESS_CIRCLE_REGISTRATION_URL.
// The same URL is reused for the waiting list once the session is full.
export const BUSINESS_CIRCLE_REGISTRATION_URL =
  process.env.NEXT_PUBLIC_BUSINESS_CIRCLE_REGISTRATION_URL ?? "";

// Optional: where interested people can sign up to hear about the next edition
// once this one is completed. Configure as NEXT_PUBLIC_BUSINESS_CIRCLE_NEXT_INFO_URL.
export const BUSINESS_CIRCLE_NEXT_EDITION_URL =
  process.env.NEXT_PUBLIC_BUSINESS_CIRCLE_NEXT_INFO_URL ?? "";
