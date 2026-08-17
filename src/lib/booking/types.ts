export interface BookingService {
  id: string;
  name: string;
  category: string;
  priceFrom: number;
  duration: string;
}

export interface BookingStylist {
  id: string;
  name: string;
  position: string;
  image: string;
}

export interface AvailabilityQuery {
  serviceId: string;
  stylistId: string | "any";
  date: string; // ISO date, e.g. 2026-08-21
}

export interface AppointmentRequest {
  serviceId: string;
  stylistId: string | "any";
  date: string;
  time: string;
  client: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    notes?: string;
  };
}

export interface AppointmentConfirmation {
  confirmationId: string;
  status: "confirmed" | "pending";
  service: BookingService;
  stylist: BookingStylist | null;
  date: string;
  time: string;
}

/**
 * Abstraction the UI books through. Swap `localBookingProvider` for an
 * adapter backed by Fresha, Mindbody, Vagaro, Booksy, or a custom booking
 * API without changing any component code — every component that books
 * an appointment talks only to this interface.
 */
export interface BookingProvider {
  getServices(): Promise<BookingService[]>;
  getStylists(): Promise<BookingStylist[]>;
  getAvailability(query: AvailabilityQuery): Promise<string[]>;
  createAppointment(request: AppointmentRequest): Promise<AppointmentConfirmation>;
}
