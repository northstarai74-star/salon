"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { bookingProvider } from "@/lib/booking";
import type { AppointmentConfirmation, BookingService, BookingStylist } from "@/lib/booking";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";
import {
  IconCalendar,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
} from "@/components/icons";

const STEPS = ["Service", "Stylist", "Date", "Time", "Details", "Confirm"] as const;

interface BookingWidgetProps {
  initialServiceId?: string;
  initialStylistId?: string;
  onBooked?: (confirmation: AppointmentConfirmation) => void;
  className?: string;
}

interface ClientDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
}

const emptyClient: ClientDetails = { firstName: "", lastName: "", email: "", phone: "", notes: "" };

function buildDateOptions() {
  const options: { iso: string; label: string; weekday: string }[] = [];
  const today = new Date();
  let cursor = 1;
  while (options.length < 10) {
    const date = new Date(today);
    date.setDate(today.getDate() + cursor);
    cursor += 1;
    if (date.getDay() === 1) continue; // studio closed Mondays
    options.push({
      iso: date.toISOString().slice(0, 10),
      label: date.toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      weekday: date.toLocaleDateString(undefined, { weekday: "short" }),
    });
  }
  return options;
}

export function BookingWidget({ initialServiceId, initialStylistId, onBooked, className }: BookingWidgetProps) {
  const [step, setStep] = useState(0);
  const [services, setServices] = useState<BookingService[]>([]);
  const [stylists, setStylists] = useState<BookingStylist[]>([]);
  const [loadingCatalog, setLoadingCatalog] = useState(true);

  const [serviceId, setServiceId] = useState<string | null>(initialServiceId ?? null);
  const [stylistId, setStylistId] = useState<string | "any" | null>(initialStylistId ?? null);
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [client, setClient] = useState<ClientDetails>(emptyClient);
  const [errors, setErrors] = useState<Partial<Record<keyof ClientDetails, string>>>({});

  const [slotsResult, setSlotsResult] = useState<{ key: string; slots: string[] } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<AppointmentConfirmation | null>(null);

  const dateOptions = useMemo(() => buildDateOptions(), []);

  useEffect(() => {
    let active = true;
    Promise.all([bookingProvider.getServices(), bookingProvider.getStylists()]).then(([s, st]) => {
      if (!active) return;
      setServices(s);
      setStylists(st);
      setLoadingCatalog(false);
    });
    return () => {
      active = false;
    };
  }, []);

  const availabilityKey = serviceId && stylistId && date ? `${serviceId}|${stylistId}|${date}` : null;

  useEffect(() => {
    if (!serviceId || !stylistId || !date) return;
    const key = `${serviceId}|${stylistId}|${date}`;
    let active = true;
    bookingProvider.getAvailability({ serviceId, stylistId, date }).then((result) => {
      if (!active) return;
      setSlotsResult({ key, slots: result });
    });
    return () => {
      active = false;
    };
  }, [serviceId, stylistId, date]);

  const loadingSlots = Boolean(availabilityKey) && slotsResult?.key !== availabilityKey;
  const slots = slotsResult && slotsResult.key === availabilityKey ? slotsResult.slots : [];
  const timeValid = time !== null && slots.includes(time);

  const selectedService = services.find((s) => s.id === serviceId) ?? null;
  const selectedStylist = stylists.find((s) => s.id === stylistId) ?? null;

  function canAdvance(currentStep: number) {
    switch (currentStep) {
      case 0:
        return Boolean(serviceId);
      case 1:
        return Boolean(stylistId);
      case 2:
        return Boolean(date);
      case 3:
        return timeValid;
      default:
        return true;
    }
  }

  function validateClient(): boolean {
    const next: Partial<Record<keyof ClientDetails, string>> = {};
    if (!client.firstName.trim()) next.firstName = "First name is required.";
    if (!client.lastName.trim()) next.lastName = "Last name is required.";
    if (!/^\S+@\S+\.\S+$/.test(client.email)) next.email = "Enter a valid email address.";
    if (!/^[\d()+\-.\s]{7,}$/.test(client.phone)) next.phone = "Enter a valid phone number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleConfirm() {
    if (!serviceId || !stylistId || !date || !time || !timeValid) return;
    setSubmitting(true);
    try {
      const result = await bookingProvider.createAppointment({
        serviceId,
        stylistId,
        date,
        time,
        client: {
          firstName: client.firstName.trim(),
          lastName: client.lastName.trim(),
          email: client.email.trim(),
          phone: client.phone.trim(),
          notes: client.notes.trim() || undefined,
        },
      });
      setConfirmation(result);
      onBooked?.(result);
    } finally {
      setSubmitting(false);
    }
  }

  function goNext() {
    if (step === 4) {
      if (!validateClient()) return;
      setStep(5);
      return;
    }
    if (!canAdvance(step)) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  if (confirmation) {
    return (
      <div className={cn("bg-ivory p-8 sm:p-12 text-center", className)}>
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-champagne/20 text-champagne-soft">
          <IconCheck className="h-8 w-8 text-taupe-dark" />
        </div>
        <h3 className="font-serif-display text-3xl text-charcoal">Appointment Requested</h3>
        <p className="mx-auto mt-4 max-w-md text-charcoal/70">
          Thank you, {client.firstName}. Your request for{" "}
          <span className="text-charcoal font-medium">{confirmation.service.name}</span> on{" "}
          {new Date(confirmation.date).toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })} at{" "}
          {confirmation.time} has been received. Our front desk will confirm by phone or email within two business hours.
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-taupe-dark">
          Confirmation Reference — {confirmation.confirmationId}
        </p>
      </div>
    );
  }

  return (
    <div className={cn("bg-ivory", className)}>
      <ol className="flex items-center justify-between gap-1 border-b border-charcoal/10 px-6 py-5 sm:px-10">
        {STEPS.map((label, index) => (
          <li key={label} className="flex flex-1 flex-col items-center gap-2 text-center">
            <span
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full border text-[11px] transition-colors",
                index < step && "border-champagne bg-champagne text-charcoal",
                index === step && "border-charcoal bg-charcoal text-ivory",
                index > step && "border-charcoal/20 text-charcoal/40"
              )}
            >
              {index < step ? <IconCheck className="h-3.5 w-3.5" /> : index + 1}
            </span>
            <span
              className={cn(
                "hidden text-[10px] uppercase tracking-[0.14em] sm:block",
                index === step ? "text-charcoal" : "text-charcoal/40"
              )}
            >
              {label}
            </span>
          </li>
        ))}
      </ol>

      <div className="min-h-[320px] px-6 py-8 sm:px-10 sm:py-10">
        {step === 0 && (
          <fieldset>
            <legend className="mb-6 font-serif-display text-2xl text-charcoal">Choose a service</legend>
            {loadingCatalog ? (
              <SkeletonList />
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setServiceId(service.id)}
                    aria-pressed={serviceId === service.id}
                    className={cn(
                      "flex flex-col gap-1 border px-5 py-4 text-left transition-colors",
                      serviceId === service.id
                        ? "border-charcoal bg-charcoal text-ivory"
                        : "border-charcoal/15 hover:border-champagne"
                    )}
                  >
                    <span className="text-sm font-medium">{service.name}</span>
                    <span className={cn("text-xs", serviceId === service.id ? "text-ivory/70" : "text-charcoal/55")}>
                      {service.category} · From ${service.priceFrom} · {service.duration}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </fieldset>
        )}

        {step === 1 && (
          <fieldset>
            <legend className="mb-6 font-serif-display text-2xl text-charcoal">Choose a stylist</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setStylistId("any")}
                aria-pressed={stylistId === "any"}
                className={cn(
                  "flex items-center gap-3 border px-4 py-3 text-left transition-colors",
                  stylistId === "any" ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/15 hover:border-champagne"
                )}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-current text-xs">Any</span>
                <span>
                  <span className="block text-sm font-medium">No preference</span>
                  <span className={cn("text-xs", stylistId === "any" ? "text-ivory/70" : "text-charcoal/55")}>
                    First available stylist
                  </span>
                </span>
              </button>
              {stylists.map((stylist) => (
                <button
                  key={stylist.id}
                  type="button"
                  onClick={() => setStylistId(stylist.id)}
                  aria-pressed={stylistId === stylist.id}
                  className={cn(
                    "flex items-center gap-3 border px-4 py-3 text-left transition-colors",
                    stylistId === stylist.id
                      ? "border-charcoal bg-charcoal text-ivory"
                      : "border-charcoal/15 hover:border-champagne"
                  )}
                >
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                    <Image src={stylist.image} alt="" fill sizes="44px" className="object-cover" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{stylist.name}</span>
                    <span className={cn("text-xs", stylistId === stylist.id ? "text-ivory/70" : "text-charcoal/55")}>
                      {stylist.position}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="mb-6 font-serif-display text-2xl text-charcoal">Choose a date</legend>
            <div className="flex flex-wrap gap-2.5">
              {dateOptions.map((option) => (
                <button
                  key={option.iso}
                  type="button"
                  onClick={() => setDate(option.iso)}
                  aria-pressed={date === option.iso}
                  className={cn(
                    "flex w-[76px] flex-col items-center gap-1 border py-3 text-center transition-colors",
                    date === option.iso ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/15 hover:border-champagne"
                  )}
                >
                  <span className="text-[10px] uppercase tracking-[0.12em] opacity-70">{option.weekday}</span>
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset>
            <legend className="mb-6 font-serif-display text-2xl text-charcoal">Choose a time</legend>
            {loadingSlots ? (
              <SkeletonList />
            ) : slots.length === 0 ? (
              <p className="text-sm text-charcoal/60">No openings that day — please choose another date.</p>
            ) : (
              <div className="flex flex-wrap gap-2.5">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    aria-pressed={time === slot}
                    className={cn(
                      "border px-4 py-2.5 text-sm transition-colors",
                      time === slot ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/15 hover:border-champagne"
                    )}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            )}
          </fieldset>
        )}

        {step === 4 && (
          <fieldset className="grid gap-4 sm:grid-cols-2">
            <legend className="mb-2 font-serif-display text-2xl text-charcoal sm:col-span-2">Your details</legend>
            <Field
              label="First name"
              value={client.firstName}
              error={errors.firstName}
              onChange={(v) => setClient((c) => ({ ...c, firstName: v }))}
              autoComplete="given-name"
            />
            <Field
              label="Last name"
              value={client.lastName}
              error={errors.lastName}
              onChange={(v) => setClient((c) => ({ ...c, lastName: v }))}
              autoComplete="family-name"
            />
            <Field
              label="Email"
              type="email"
              value={client.email}
              error={errors.email}
              onChange={(v) => setClient((c) => ({ ...c, email: v }))}
              autoComplete="email"
            />
            <Field
              label="Phone"
              type="tel"
              value={client.phone}
              error={errors.phone}
              onChange={(v) => setClient((c) => ({ ...c, phone: v }))}
              autoComplete="tel"
            />
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs uppercase tracking-[0.12em] text-charcoal/60" htmlFor="booking-notes">
                Notes for your stylist (optional)
              </label>
              <textarea
                id="booking-notes"
                rows={3}
                value={client.notes}
                onChange={(e) => setClient((c) => ({ ...c, notes: e.target.value }))}
                className="w-full resize-none border border-charcoal/20 bg-transparent px-4 py-3 text-sm text-charcoal outline-none focus:border-champagne"
              />
            </div>
          </fieldset>
        )}

        {step === 5 && selectedService && (
          <div>
            <h3 className="mb-6 font-serif-display text-2xl text-charcoal">Confirm your appointment</h3>
            <dl className="grid gap-4 border border-charcoal/10 p-6 sm:grid-cols-2">
              <SummaryRow label="Service" value={`${selectedService.name} · $${selectedService.priceFrom}+`} icon={<IconCalendar className="h-4 w-4" />} />
              <SummaryRow label="Stylist" value={selectedStylist ? selectedStylist.name : "No preference"} />
              <SummaryRow
                label="Date"
                value={date ? new Date(date).toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" }) : ""}
              />
              <SummaryRow label="Time" value={time ?? ""} />
              <SummaryRow label="Name" value={`${client.firstName} ${client.lastName}`} />
              <SummaryRow label="Contact" value={`${client.email} · ${client.phone}`} />
            </dl>
            <p className="mt-5 text-xs leading-relaxed text-charcoal/50">
              This request is sent directly to our front desk — appointments are confirmed by our team ahead of your visit.
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-charcoal/10 px-6 py-5 sm:px-10">
        <Button variant="text" onClick={goBack} disabled={step === 0} className={step === 0 ? "invisible" : ""}>
          <IconChevronLeft className="h-4 w-4" /> Back
        </Button>
        {step < 5 ? (
          <Button variant="solid" onClick={goNext} disabled={!canAdvance(step)}>
            Continue <IconChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button variant="champagne" onClick={handleConfirm} disabled={submitting}>
            {submitting ? "Confirming…" : "Confirm Appointment"}
          </Button>
        )}
      </div>
    </div>
  );
}

function SkeletonList() {
  return (
    <div className="grid gap-3 sm:grid-cols-2" aria-hidden="true">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-16 animate-pulse border border-charcoal/10 bg-charcoal/5" />
      ))}
    </div>
  );
}

function SummaryRow({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div>
      <dt className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-charcoal/45">
        {icon}
        {label}
      </dt>
      <dd className="mt-1 text-sm text-charcoal">{value}</dd>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  const id = `field-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs uppercase tracking-[0.12em] text-charcoal/60">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full border bg-transparent px-4 py-3 text-sm text-charcoal outline-none focus:border-champagne",
          error ? "border-red-400" : "border-charcoal/20"
        )}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
