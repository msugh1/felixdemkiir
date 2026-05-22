import { X, Award, ExternalLink } from "lucide-react";

import cert3MTT from "../../imports/3MTT_Cybersecurity_certification.pdf?url";
import certSC900 from "../../imports/Msugh_SC900_Certificate.pdf?url";
import certPhishing from "../../imports/PDF.js_viewer.pdf?url";
import certCourse2 from "../../imports/course2.pdf?url";
import certCourse3 from "../../imports/course3.pdf?url";
import certCourse4 from "../../imports/course4.pdf?url";

const display = { fontFamily: '"Space Grotesk", Inter, ui-sans-serif, system-ui' };
const mono = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' };
const body = { fontFamily: 'Inter, ui-sans-serif, system-ui' };

const certs = [
  {
    id: 1,
    name: "NITDA 3MTT Cybersecurity Certification",
    issuer: "NITDA / 3MTT Nigeria",
    year: "2025",
    category: "Government Program",
    url: cert3MTT,
  },
  {
    id: 2,
    name: "Microsoft SC-900: Security, Compliance & Identity Fundamentals",
    issuer: "Microsoft",
    year: "2025",
    category: "Vendor Certification",
    url: certSC900,
  },
  {
    id: 3,
    name: "Hack & Fix Certified Phishing Prevention Specialist",
    issuer: "Hack & Fix",
    year: "2025",
    category: "Specialist Credential",
    url: certPhishing,
  },
  {
    id: 4,
    name: "Google Cybersecurity Certificate — Course 2",
    issuer: "Google / Coursera",
    year: "2025",
    category: "Professional Certificate",
    url: certCourse2,
  },
  {
    id: 5,
    name: "Google Cybersecurity Certificate — Course 3",
    issuer: "Google / Coursera",
    year: "2025",
    category: "Professional Certificate",
    url: certCourse3,
  },
  {
    id: 6,
    name: "Google Cybersecurity Certificate — Course 4",
    issuer: "Google / Coursera",
    year: "2025",
    category: "Professional Certificate",
    url: certCourse4,
  },
];

interface Props { onClose: () => void; }

export function CertificationsModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        className="relative z-10 w-full max-w-3xl bg-[#0a1124] border border-white/10 flex flex-col"
        style={{ maxHeight: "88vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <Award size={15} className="text-emerald-400" />
            <span className="text-white text-sm font-medium" style={display}>Certifications</span>
            <span className="text-white/30 text-[11px]" style={mono}>{certs.length} credentials</span>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors p-1">
            <X size={18} />
          </button>
        </div>

        {/* cert list */}
        <div className="overflow-y-auto flex-1">
          {certs.map((c, i) => (
            <div
              key={c.id}
              className={`flex items-center justify-between gap-6 px-6 py-5 hover:bg-white/[0.03] transition-colors ${
                i < certs.length - 1 ? "border-b border-white/[0.07]" : ""
              }`}
            >
              {/* number */}
              <span className="text-white/20 text-[11px] shrink-0 w-5 text-right" style={mono}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* info */}
              <div className="flex-1 min-w-0">
                <p className="text-white text-[15px] font-medium leading-snug" style={display}>
                  {c.name}
                </p>
                <div className="mt-1 flex items-center gap-3 flex-wrap" style={mono}>
                  <span className="text-white/45 text-[11px]">{c.issuer}</span>
                  <span className="text-white/20 text-[11px]">·</span>
                  <span className="text-white/45 text-[11px]">{c.year}</span>
                  <span className="text-white/20 text-[11px]">·</span>
                  <span className="text-emerald-400/70 text-[11px] tracking-wide uppercase">{c.category}</span>
                </div>
              </div>

              {/* action */}
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 border border-white/15 hover:border-emerald-400 text-white/50 hover:text-emerald-400 px-4 py-2 text-[12px] tracking-wide transition-colors"
                style={body}
                onClick={(e) => e.stopPropagation()}
              >
                View <ExternalLink size={11} />
              </a>
            </div>
          ))}
        </div>

        {/* footer */}
        <div className="border-t border-white/10 px-6 py-3 shrink-0">
          <p className="text-white/25 text-[11px]" style={mono}>
            Click View to open each certificate in your browser
          </p>
        </div>
      </div>
    </div>
  );
}
