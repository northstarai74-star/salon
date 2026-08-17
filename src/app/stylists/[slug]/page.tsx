import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BookWithButton } from "@/components/BookWithButton";
import { stylists } from "@/lib/data";
import { salon } from "@/lib/salon";

interface StylistPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return stylists.map((stylist) => ({ slug: stylist.slug }));
}

export async function generateMetadata({ params }: StylistPageProps): Promise<Metadata> {
  const { slug } = await params;
  const stylist = stylists.find((s) => s.slug === slug);
  if (!stylist) return {};
  return {
    title: `${stylist.name} — ${stylist.position} | ${salon.name}`,
    description: stylist.bio,
    alternates: { canonical: `${salon.url}/stylists/${stylist.slug}` },
    openGraph: {
      title: `${stylist.name} — ${stylist.position}`,
      description: stylist.bio,
      url: `${salon.url}/stylists/${stylist.slug}`,
    },
  };
}

export default async function StylistPage({ params }: StylistPageProps) {
  const { slug } = await params;
  const stylist = stylists.find((s) => s.slug === slug);
  if (!stylist) notFound();

  return (
    <main className="bg-ivory pb-24 pt-32 lg:pt-40">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
        <Link href="/#stylists" className="text-xs uppercase tracking-[0.14em] text-charcoal/60 hover:text-charcoal">
          ← Back to All Stylists
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
            <Image
              src={stylist.image}
              alt={`Portrait of ${stylist.name}, ${stylist.position} at ${salon.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 92vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-taupe-dark">{stylist.position}</p>
            <h1 className="mt-3 font-serif-display text-4xl text-charcoal sm:text-5xl">{stylist.name}</h1>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Specialties">
              {stylist.specialties.map((specialty) => (
                <li key={specialty} className="border border-charcoal/15 px-3 py-1.5 text-xs uppercase tracking-[0.08em] text-charcoal/65">
                  {specialty}
                </li>
              ))}
            </ul>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-charcoal/70">{stylist.bio}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <BookWithButton stylistId={stylist.id} stylistName={stylist.name} />
              <Link
                href="/#stylists"
                className="inline-flex items-center px-7 py-4 text-xs uppercase tracking-[0.12em] text-charcoal border border-charcoal/20 hover:border-charcoal transition-colors"
              >
                Meet the Rest of the Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
