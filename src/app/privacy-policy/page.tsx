import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Astana Cold Chain Inc.",
  description:
    "Privacy Policy for Astana Cold Chain Inc. We are committed to protecting your personal information in accordance with the Philippine Data Privacy Act of 2012 (RA 10173).",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <main>
        {/* Header */}
        <section className="bg-frost-blue border-b border-ice-blue py-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-gray mb-6">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <ChevronRight className="w-3 h-3" />
              <span className="text-dark-navy">Privacy Policy</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-dark-navy mb-3">
              Privacy Policy
            </h1>
            <p className="text-slate-gray text-sm">Last updated: March 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 space-y-12">

            <p className="text-slate-gray leading-relaxed">
              Astana Cold Chain Inc. respects
              your privacy and is committed to protecting your personal information. This
              policy explains how we handle data you submit through our website contact
              form, in line with the{" "}
              <strong className="text-dark-navy">
                Philippine Data Privacy Act of 2012 (Republic Act No. 10173)
              </strong>
              .
            </p>

            <div>
              <h2 className="text-xl font-black text-dark-navy mb-4">
                1. What Information We Collect
              </h2>
              <p className="text-slate-gray leading-relaxed mb-4">
                When you fill out the contact form on our website, we may collect:
              </p>
              <ul className="space-y-2 text-slate-gray">
                {[
                  "Your full name",
                  "Your email address",
                  "Your phone number",
                  "Your company or organization name",
                  "The message or inquiry you submit",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-gray leading-relaxed mt-4">
                We do not collect sensitive personal information through this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-dark-navy mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-slate-gray leading-relaxed">
                We use the information you provide <strong className="text-dark-navy">only to respond to your inquiry</strong>.
                We will not use your contact details for marketing, newsletters, or
                any other purpose without your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-dark-navy mb-4">
                3. We Do Not Share Your Data
              </h2>
              <p className="text-slate-gray leading-relaxed">
                We do not sell, rent, or share your personal information with any
                third party for commercial purposes. Your data is only accessible to
                the Astana Cold Chain staff responsible for responding to your inquiry.
                Contact form submissions are processed via{" "}
                <a
                  href="https://formspree.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Formspree
                </a>
                , which acts as a secure data processor.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-dark-navy mb-4">
                4. Cookies &amp; Tracking
              </h2>
              <p className="text-slate-gray leading-relaxed">
                We do not use cookies, analytics trackers, or any third-party
                tracking scripts on this website. The Google Maps embed on our Contact
                page is served by Google and may be subject to Google&apos;s own privacy
                practices.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-dark-navy mb-4">
                5. Data Retention
              </h2>
              <p className="text-slate-gray leading-relaxed">
                We only keep contact form submissions for as long as necessary to
                respond to your inquiry. Once a conversation is concluded and no
                further action is required, records are deleted within a reasonable
                time frame.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-dark-navy mb-4">
                6. Your Rights
              </h2>
              <p className="text-slate-gray leading-relaxed">
                Under RA 10173, you have the right to access, correct, or request
                the deletion of any personal data we hold about you. To exercise these
                rights, simply contact us at the details below.
              </p>
            </div>

            {/* Contact Box */}
            <div className="p-8 rounded-3xl bg-frost-blue border border-ice-blue">
              <h2 className="text-xl font-black text-dark-navy mb-4">
                7. Privacy Concerns
              </h2>
              <p className="text-slate-gray leading-relaxed mb-4">
                If you have any questions about this policy or how your data is
                handled, please reach out to us:
              </p>
              <div className="space-y-1 text-sm">
                <p className="font-black text-dark-navy">Astana Cold Chain Inc.</p>
                <p className="text-slate-gray">
                  Km. 23, West Service Road, Brgy. Cupang, Muntinlupa City
                </p>
                <p>
                  <span className="text-slate-gray">Email: </span>
                  <a
                    href="mailto:raqueltan@astanacoldchain.com"
                    className="text-primary hover:underline"
                  >
                    raqueltan@astanacoldchain.com
                  </a>
                </p>
                <p>
                  <span className="text-slate-gray">Phone: </span>
                  <a href="tel:+639128888821" className="text-primary hover:underline">
                    0912 888 8821
                  </a>
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
