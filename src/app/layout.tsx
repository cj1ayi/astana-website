import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astana Cold Chain Inc. | Cold Storage Facility in Muntinlupa",
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
  ],
  openGraph: {
    title: "Astana Cold Chain Inc.",
    description:
      "Muntinlupa's premier cold storage facility with 6,189+ pallet positions, 13 cold chambers, and temperatures down to -22°C. Trusted by the Philippines' top food brands.",
    type: "website",
    locale: "en_PH",
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
