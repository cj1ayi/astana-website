import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Certifications from "@/components/Certifications";
import About from "@/components/About";
import Values from "@/components/Values";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Facility from "@/components/Facility";
import Contact from "@/components/Contact";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Astana Cold Chain Inc. | Cold Storage Facility in Muntinlupa",
  description:
    "Muntinlupa's first multi-temperature cold storage and blast freezing facility. AAA NMIS rated, HACCP certified. 6,809+ pallet positions. Trusted by Starbucks, Shake Shack, S&R, and more.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "#astana-cold-chain",
  name: "Astana Cold Chain Inc.",
  description:
    "Property developer specializing in cold storage facilities. AAA NMIS-rated, HACCP-certified multi-temperature cold storage and blast freezing facility in Muntinlupa City.",
  image: "/images/astana-aerial.jpg",
  telephone: ["+639128888821", "+639175217108"],
  email: "raqueltan@astanacoldchain.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Km. 23, West Service Road, Brgy. Cupang",
    addressLocality: "Muntinlupa City",
    addressRegion: "Metro Manila",
    addressCountry: "PH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 14.3894,
    longitude: 121.0389,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: {
    "@type": "Country",
    name: "Philippines",
  },
  priceRange: "$$",
  currenciesAccepted: "PHP",
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "NMIS AAA CSW Accreditation" },
    { "@type": "EducationalOccupationalCredential", name: "HACCP Certification" },
    { "@type": "EducationalOccupationalCredential", name: "BPI License to Operate" },
    { "@type": "EducationalOccupationalCredential", name: "BFAR License to Operate" },
    { "@type": "EducationalOccupationalCredential", name: "RBI Accredited Facility" },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Certifications />
        <About />
        <Values />
        <Stats />
        <Services />
        <Facility />
        <Contact />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
