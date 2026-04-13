import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://astanacoldchain.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Astana Cold Chain Inc. | Cold Storage Facility in Muntinlupa",
    template: "%s | Astana Cold Chain Inc.",
  },
  description:
    "Muntinlupa's first multi-temperature cold storage and blast freezing facility. AAA NMIS rated, HACCP certified. Trusted by Starbucks, Shake Shack, S&R, and more. Located along West Service Road, Alabang, Cupang, Muntinlupa City.",
  keywords: [
    "cold storage Muntinlupa",
    "cold chain Philippines",
    "cold storage warehouse Manila",
    "blast freezing facility",
    "temperature controlled storage",
    "frozen storage Philippines",
    "cold storage near SLEX",
    "NMIS AAA cold storage",
    "HACCP certified warehouse",
    "Astana Cold Chain",
    "cold storage Alabang",
    "warehouse for rent Muntinlupa",
    "frozen warehouse Philippines",
    "cold storage facility near me",
    "RBI accredited cold storage",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Astana Cold Chain Inc.",
    description:
      "Muntinlupa's premier cold storage facility with 6,809+ pallet positions, 13 cold chambers, and temperatures down to -22°C. Trusted by the Philippines' top food brands.",
    url: BASE_URL,
    siteName: "Astana Cold Chain Inc.",
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "/images/astana-aerial.jpg",
        width: 1200,
        height: 630,
        alt: "Aerial view of Astana Cold Chain Inc. cold storage facility in Muntinlupa City",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astana Cold Chain Inc. | Cold Storage Facility in Muntinlupa",
    description:
      "Muntinlupa's premier cold storage facility — 6,809+ pallet positions, AAA NMIS rated, HACCP certified. Trusted by the Philippines' top food brands.",
    images: ["/images/astana-aerial.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "PUQS0qCtAWkfkMxmX1q2N39cOTl5_JzMHr90BfNKo8I",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-ice-blue text-dark-navy font-display antialiased">
        {children}
      </body>
    </html>
  );
}
