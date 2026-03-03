import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Certifications from "@/components/Certifications";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Facility from "@/components/Facility";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Certifications />
        <Clients />
        <About />
        <Stats />
        <Services />
        <Facility />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
