import { salon } from "@/lib/salon";

export function LocationMap() {
  const query = encodeURIComponent(salon.mapsQuery);
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden border border-charcoal/10 sm:aspect-[16/12] lg:aspect-[4/5]">
      <iframe
        title={`Map showing the location of ${salon.name}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        className="h-full w-full grayscale-[15%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
