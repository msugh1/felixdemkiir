import { ExternalLink } from "lucide-react";
import { DocNav, DocFooter, body, display, mono } from "../../components/DocShared";

const REPORT_URL = "https://docs.google.com/document/d/1h0qGMVfx-gmlbhE5VYarOIvHH5LvrmAVXBftKYVn59c/edit?usp=drive_link";

export default function KafitechDocs() {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={body}>
      <DocNav />

      {/* Hero */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["Network Design", "Cisco Packet Tracer", "Capstone", "Network Security"].map((t) => (
              <span
                key={t}
                className="text-[11px] tracking-[0.15em] uppercase text-gray-500 border border-gray-300 px-2.5 py-1 rounded-sm"
                style={mono}
              >
                {t}
              </span>
            ))}
          </div>
          <h1
            className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tight mb-6"
            style={display}
          >
            Cybersecurity Network Design: KafiTech Solutions
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Capstone project designing and simulating a secure, segmented enterprise network for KafiTech Solutions
            using Cisco Packet Tracer, implementing VLANs, inter-VLAN routing, ACLs, a DMZ, and a layered
            defense-in-depth architecture.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-[13px] text-gray-500" style={mono}>
            <span>Tool: Cisco Packet Tracer</span>
            <span>Scope: Full Enterprise LAN/WAN</span>
            <span>Focus: Defense-in-depth</span>
          </div>
        </div>
      </div>

      {/* Full Report CTA */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4" style={display}>
          Full Capstone Report
        </h2>
        <div className="border border-gray-200 rounded-md bg-gray-50 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-gray-700 font-medium" style={display}>
              Cybersecurity Network Design for KafiTech Solutions
            </p>
            <p className="text-gray-500 text-sm mt-1" style={body}>
              Full report including topology diagrams, VLAN config, ACL rules, and defense-in-depth analysis.
            </p>
          </div>
          <a
            href={REPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white px-5 py-2.5 text-[13px] tracking-wide transition-colors"
            style={body}
          >
            Open Full Report <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <DocFooter pdfSrc={REPORT_URL} label="View Full Capstone Report" />
    </div>
  );
}
