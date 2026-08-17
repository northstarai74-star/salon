import type { Metadata } from "next";
import { Jost, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { MobileBookBar } from "@/components/MobileBookBar";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { BookingModalProvider } from "@/components/booking/BookingModalProvider";
import { salon } from "@/lib/salon";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(salon.url),
  title: {
    default: `${salon.name} | Luxury Hair & Beauty in ${salon.address.locality}`,
    template: `%s | ${salon.name}`,
  },
  description: salon.description,
  keywords: [
    "luxury hair salon",
    "balayage",
    "hair colourist",
    "bridal hair styling",
    "hair salon " + salon.address.locality,
    "beauty salon",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: salon.url,
    title: salon.name,
    description: salon.description,
    siteName: salon.name,
  },
  twitter: {
    card: "summary_large_image",
    title: salon.name,
    description: salon.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${jost.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ivory text-charcoal">
        <StructuredData />
        <BookingModalProvider>
          <Navbar />
          <div className="flex-1 pb-20 lg:pb-0">{children}</div>
          <Footer />
          <MobileBookBar />
        </BookingModalProvider>
      </body>
    </html>
  );
}
