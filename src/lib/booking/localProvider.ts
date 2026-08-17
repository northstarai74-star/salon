import { services, stylists } from "@/lib/data";
import type {
  AppointmentConfirmation,
  AppointmentRequest,
  AvailabilityQuery,
  BookingProvider,
  BookingService,
  BookingStylist,
} from "./types";

const ALL_SLOTS = [
  "9:00 AM", "9:45 AM", "10:30 AM", "11:15 AM", "12:00 PM",
  "1:00 PM", "1:45 PM", "2:30 PM", "3:15 PM", "4:00 PM",
  "4:45 PM", "5:30 PM", "6:15 PM",
];

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function delay<T>(value: T, ms = 260): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

/**
 * Local, in-memory booking provider used until the studio connects a real
 * scheduling backend. It implements the same BookingProvider contract a
 * Fresha / Mindbody / Vagaro / Booksy / custom-API adapter would, so the
 * booking UI does not need to change when that integration lands — only
 * this file (or its replacement) does.
 */
export const localBookingProvider: BookingProvider = {
  async getServices(): Promise<BookingService[]> {
    return delay(
      services.map((s) => ({
        id: s.id,
        name: s.name,
        category: s.categoryLabel,
        priceFrom: s.priceFrom,
        duration: s.duration,
      }))
    );
  },

  async getStylists(): Promise<BookingStylist[]> {
    return delay(
      stylists.map((s) => ({
        id: s.id,
        name: s.name,
        position: s.position,
        image: s.image,
      }))
    );
  },

  async getAvailability(query: AvailabilityQuery): Promise<string[]> {
    const seed = hashString(`${query.serviceId}|${query.stylistId}|${query.date}`);
    const unavailableCount = seed % 5;
    const slots = ALL_SLOTS.filter((_, index) => (seed + index * 7) % 5 !== 0 || index >= unavailableCount);
    return delay(slots.length ? slots : ALL_SLOTS.slice(0, 6), 420);
  },

  async createAppointment(request: AppointmentRequest): Promise<AppointmentConfirmation> {
    const service = services.find((s) => s.id === request.serviceId);
    const stylist = stylists.find((s) => s.id === request.stylistId) ?? null;
    if (!service) {
      throw new Error("Unknown service selected.");
    }
    const confirmationId = `LUM-${hashString(`${request.client.email}|${request.date}|${request.time}`)
      .toString(36)
      .toUpperCase()
      .slice(0, 6)}`;
    return delay(
      {
        confirmationId,
        status: "confirmed",
        service: {
          id: service.id,
          name: service.name,
          category: service.categoryLabel,
          priceFrom: service.priceFrom,
          duration: service.duration,
        },
        stylist: stylist
          ? { id: stylist.id, name: stylist.name, position: stylist.position, image: stylist.image }
          : null,
        date: request.date,
        time: request.time,
      },
      600
    );
  },
};
