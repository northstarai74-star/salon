import { localBookingProvider } from "./localProvider";
import type { BookingProvider } from "./types";

/**
 * Single swap point for the studio's real booking backend. Replace
 * `localBookingProvider` with an adapter implementing `BookingProvider`
 * (Fresha, Mindbody, Vagaro, Booksy, or a custom API) — no other file in
 * the app needs to change.
 */
export const bookingProvider: BookingProvider = localBookingProvider;

export type {
  AppointmentConfirmation,
  AppointmentRequest,
  AvailabilityQuery,
  BookingProvider,
  BookingService,
  BookingStylist,
} from "./types";
