import { Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-slate-300 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.png"
                alt="Astana Cold Chain Logo"
                width={40}
                height={48}
                className="w-10 h-12 object-contain rounded-lg"
              />
              <span className="text-xl font-extrabold tracking-tight uppercase text-white">
                Astana Cold Chain
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed mb-8">
              The premier multi-temperature cold storage facility in Muntinlupa
              City, providing safe and secure storage for the nation&apos;s
              leading food brands since 2018.
            </p>
            <a
              href="https://www.facebook.com/AstanaColdChain/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors"
            >
              <Facebook className="w-4 h-4" strokeWidth={1.75} />
              Facebook
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/#home"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/facilities"
                  className="hover:text-primary transition-colors"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <h4 className="text-white font-bold mb-6">Accreditations</h4>
            <ul className="space-y-3 text-sm">
              <li>NMIS AAA Rated</li>
              <li>HACCP Certified</li>
              <li>BPI &amp; BFAR Licensed</li>
              <li>SEC Registered</li>
              <li>RBI Accredited</li>
              <li>GMP Certified</li>
              <li>GOP Compliant</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs uppercase tracking-widest font-bold text-slate-500">
          <p>© 2026 Astana Cold Chain Inc. All Rights Reserved.</p>
          <a
            href="/privacy-policy"
            className="hover:text-slate-300 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
