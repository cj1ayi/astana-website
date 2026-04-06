import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, ChevronRight, Mail, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the team at Astana Cold Chain Inc. — Muntinlupa's premier cold storage facility. Explore current job openings in warehouse operations, maintenance, and more.",
  openGraph: {
    title: "Careers at Astana Cold Chain Inc.",
    description:
      "Explore job openings at Muntinlupa's premier cold storage facility. Warehouse operations, maintenance, and more.",
  },
};

const HR_MAILTO = "mailto:ryanbernabe@astanacoldchain.com,phoebevitales@astanacoldchain.com";

type Job = {
  title: string;
  department: string;
  type: string;
  urgent?: boolean;
  location: string;
  requirements: string[];
};

const openings: Job[] = [
  {
    title: "Forklift Operator",
    department: "Warehouse Operations",
    type: "Full-Time",
    urgent: true,
    location: "Muntinlupa City",
    requirements: [
      "NCII Certificate in Forklift Operation",
      "Experience operating a reach truck preferred",
      "Able to work in a cold storage environment (-22°C)",
      "Willing to work on shifting schedules",
    ],
  },
  {
    title: "Warehouse Staff",
    department: "Warehouse Operations",
    type: "Full-Time",
    location: "Muntinlupa City",
    requirements: [
      "Physically fit and able to perform manual handling",
      "Willing to work in cold storage conditions (-22°C)",
      "Previous warehouse or logistics experience preferred",
      "Can work on shifting schedules including weekends",
    ],
  },
  {
    title: "Cold Storage Technician",
    department: "Maintenance",
    type: "Full-Time",
    location: "Muntinlupa City",
    requirements: [
      "Knowledge of ammonia refrigeration systems",
      "Experience in cold storage, HVAC, or industrial maintenance",
      "NCII or relevant technical certification required",
      "Willing to be on-call for emergency repairs",
    ],
  },
];

const departmentColors: Record<string, string> = {
  "Warehouse Operations": "bg-orange-50 text-primary border-orange-100",
  Maintenance: "bg-blue-50 text-blue-700 border-blue-100",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-ice-blue border-b border-ice-blue py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-gray mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-dark-navy">Careers</span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Join Our Team
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-dark-navy mb-6 leading-tight">
              Be Part of Something
              <br />
              <span className="text-primary">Built to Last</span>
            </h1>
            <p className="text-slate-gray max-w-xl leading-relaxed">
              Be part of Muntinlupa&apos;s premier cold storage facility. We&apos;re looking
              for dedicated professionals to help us deliver world-class cold chain
              solutions to the Philippines&apos; top food brands.
            </p>
          </div>
        </section>

        {/* How to Apply */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-frost-blue rounded-3xl p-8 md:p-10 border border-ice-blue flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" strokeWidth={1.75} />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-black text-dark-navy mb-1">How to Apply</h2>
                <p className="text-slate-gray text-sm leading-relaxed">
                  Interested in joining Astana Cold Chain? Send your resume/CV and a brief
                  cover letter to{" "}
                  <a
                    href={HR_MAILTO}
                    className="text-primary font-bold hover:underline"
                  >
                    ryanbernabe@astanacoldchain.com
                  </a>
                  {" "}or{" "}
                  <a
                    href="mailto:phoebevitales@astanacoldchain.com"
                    className="text-primary font-bold hover:underline"
                  >
                    phoebevitales@astanacoldchain.com
                  </a>
                  . Please include the <strong className="text-dark-navy">job title</strong> you&apos;re
                  applying for in the subject line.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-black text-dark-navy mb-2">Open Positions</h2>
              <p className="text-slate-gray">
                {openings.length} position{openings.length !== 1 ? "s" : ""} available &mdash; Muntinlupa City
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {openings.map((job) => (
                <div
                  key={job.title}
                  className="group flex flex-col p-7 rounded-3xl border border-slate-100 bg-white hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  {/* Title row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-black text-dark-navy group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    {job.urgent && (
                      <span className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold">
                        <AlertCircle className="w-3 h-3" />
                        Urgent
                      </span>
                    )}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${
                        departmentColors[job.department] ?? "bg-slate-100 text-slate-600 border-slate-200"
                      }`}
                    >
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      <Clock className="w-3 h-3" strokeWidth={1.75} />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      <MapPin className="w-3 h-3" strokeWidth={1.75} />
                      {job.location}
                    </span>
                  </div>

                  {/* Requirements */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {job.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2.5 text-sm text-slate-gray">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        {req}
                      </li>
                    ))}
                  </ul>

                  {/* Apply button */}
                  <a
                    href={`${HR_MAILTO}?subject=Job Application — ${job.title}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors"
                  >
                    Apply via Email
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>

            {/* Open application note */}
            <p className="mt-10 text-center text-sm text-slate-gray">
              Don&apos;t see a position that fits? We&apos;re always looking for talented people.{" "}
              <a
                href={`${HR_MAILTO}?subject=Open Application — Astana Cold Chain`}
                className="text-primary font-bold hover:underline"
              >
                Send your resume
              </a>{" "}
              and we&apos;ll keep it on file.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
