"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://formspree.io/f/xvzvdqrg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormState("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-ice-blue bg-white focus:outline-none focus:border-primary transition-colors text-dark-navy placeholder:text-slate-gray/50 text-sm";

  return (
    <section id="contact" className="py-24 bg-ice-blue">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl font-black">Location &amp; Contact</h2>
        </div>

        {/* Top row: Form + Contact Info */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-primary/5">
            <h3 className="text-2xl font-black text-dark-navy mb-2">
              Send a Message
            </h3>
            <p className="text-slate-gray text-sm mb-8">
              Fill out the form below and our team will get back to you shortly.
            </p>

            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-black text-dark-navy mb-2">
                  Message Sent!
                </h4>
                <p className="text-slate-gray text-sm mb-6">
                  Thank you for reaching out. We&apos;ll be in touch with you
                  shortly.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 2×2 grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-dark-navy uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Juan dela Cruz"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-dark-navy uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="juan@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-dark-navy uppercase tracking-wider mb-1.5">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="0917 000 0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-dark-navy uppercase tracking-wider mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your Company Inc."
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Inquiry type */}
                <div>
                  <label className="block text-xs font-bold text-dark-navy uppercase tracking-wider mb-1.5">
                    I would like information regarding
                  </label>
                  <select name="inquiry" className={inputClass}>
                    <option value="">Select a topic…</option>
                    <option value="Cold Storage Services">
                      Cold Storage Services
                    </option>
                    <option value="Blast Freezing">Blast Freezing</option>
                    <option value="Warehouse & Logistics">
                      Warehouse &amp; Logistics
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-dark-navy uppercase tracking-wider mb-1.5">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your cold storage requirements…"
                    className={`${inputClass} min-h-[150px] resize-y`}
                  />
                </div>

                {formState === "error" && (
                  <p className="text-sm text-red-500 font-medium">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                  >
                    {formState === "submitting" ? "Sending…" : "Send Message"}
                  </button>
                  <p className="text-xs text-slate-gray mt-3">
                    By submitting this form, you agree to our{" "}
                    <a
                      href="/privacy-policy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-primary/5">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black text-dark-navy mb-1">
                  Get in Touch
                </h3>
                <p className="text-slate-gray text-sm">
                  Reach out directly or visit us at our facility in Muntinlupa
                  City.
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
                  Address
                </p>
                <p className="text-dark-navy font-medium leading-relaxed">
                  Km. 23, West Service Road,
                  <br />
                  Brgy. Cupang, Muntinlupa City
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
                  Accessibility
                </p>
                <ul className="text-slate-gray text-sm space-y-1.5">
                  <li className="flex items-start gap-2">
                    <MapPin
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                      strokeWidth={1.75}
                    />
                    ~16.2 km to NAIA (30–45 min)
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                      strokeWidth={1.75}
                    />
                    ~23 km to Port Area Manila
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                      strokeWidth={1.75}
                    />
                    Direct SLEX &amp; Skyway access
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
                  Business Development
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+639128888821"
                    className="flex items-center gap-3 text-slate-gray hover:text-primary transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                    0912 888 8821
                  </a>
                  <a
                    href="tel:+639175217108"
                    className="flex items-center gap-3 text-slate-gray hover:text-primary transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                    0917 521 7108
                  </a>
                  <a
                    href="mailto:ryanbernabe@astanacoldchain.com,phoebevitales@astanacoldchain.com"
                    className="flex items-center gap-3 text-slate-gray hover:text-primary transition-colors text-sm break-all"
                  >
                    <Mail className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                    ryanbernabe@astanacoldchain.com
                  </a>
                  <a
                    href="mailto:phoebevitales@astanacoldchain.com"
                    className="flex items-center gap-3 text-slate-gray hover:text-primary transition-colors text-sm break-all"
                  >
                    <Mail className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                    phoebevitales@astanacoldchain.com
                  </a>
                </div>
              </div>

              <div>
                <a
                  href="https://www.facebook.com/AstanaColdChain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-frost-blue border border-ice-blue text-dark-navy text-sm font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <Facebook className="w-4 h-4" strokeWidth={1.75} />
                  Visit our Facebook Page
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width map */}
        <div className="rounded-3xl overflow-hidden shadow-lg h-[400px]">
          <iframe
            src="https://maps.google.com/maps?q=Km+23+West+Service+Road+Cupang+Muntinlupa+City+Philippines&output=embed&z=15"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Astana Cold Chain location"
          />
        </div>
      </div>
    </section>
  );
}
