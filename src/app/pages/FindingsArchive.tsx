import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowUpRight, Menu, X } from "lucide-react";

const display = { fontFamily: '"Space Grotesk", Inter, ui-sans-serif, system-ui' };
const body = { fontFamily: 'Inter, ui-sans-serif, system-ui' };
const mono = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' };

const allFindings = [
  {
    kind: "Lab Report",
    date: "Apr 2026",
    title: "Vulnerability Assessment & Exploitation: Metasploitable 2",
    excerpt:
      "Authorized exploitation simulation against a local Metasploitable 2 target. Identified a critical vsftpd 2.3.4 backdoor using Nmap NSE, exploited it with Metasploit, and achieved verified root access.",
    read: "12 min read",
    docsPath: "/projects/vulnerability-exploitation",
    tools: ["Metasploit", "Nmap", "Kali Linux"],
  },
  {
    kind: "Lab Report",
    date: "Apr 2026",
    title: "Web App Security Scan: DVWA with OWASP ZAP",
    excerpt:
      "Full vulnerability assessment of DVWA combining automated ZAP scanning with manual payload injection surfacing SQL Injection, Command Injection, Reflected XSS, and multiple misconfigurations.",
    read: "10 min read",
    docsPath: "/projects/dvwa-web-scan",
    tools: ["OWASP ZAP", "DVWA", "XAMPP"],
  },
  {
    kind: "Lab Report",
    date: "Mar 2026",
    title: "Network Vulnerability Scan: OpenVAS on Office LAN",
    excerpt:
      "Comprehensive OpenVAS GVM scan of a simulated office network (192.168.10.0/24) identified 12 critical vulnerabilities including Apache RCE, SMBv1 EternalBlue, and weak SSH credentials.",
    read: "11 min read",
    docsPath: "/projects/openvas-scan",
    tools: ["OpenVAS", "GVM", "Kali Linux"],
  },
  {
    kind: "Lab Report",
    date: "Mar 2026",
    title: "Wireshark Network Traffic Analysis",
    excerpt:
      "Hands-on traffic capture and packet analysis using Wireshark applying display filters across HTTP, DNS, and TCP to identify unencrypted data exposure and anomalous traffic patterns.",
    read: "9 min read",
    docsPath: "/projects/wireshark-analysis",
    tools: ["Wireshark", "HTTP", "DNS", "TCP/IP"],
  },
  {
    kind: "Capstone",
    date: "May 2026",
    title: "Cybersecurity Network Design: KafiTech Solutions (Packet Tracer)",
    excerpt:
      "Capstone project designing and simulating a secure enterprise network for KafiTech Solutions implementing VLANs, inter-VLAN routing, ACLs, a DMZ, and NAT/PAT using Cisco Packet Tracer.",
    read: "14 min read",
    docsPath: "/projects/kafitech-network-design",
    tools: ["Cisco Packet Tracer", "VLANs", "ACLs", "DMZ"],
  },
  {
    kind: "Investigation",
    date: "May 2026",
    title: "Malware-Infected System Log Investigation",
    excerpt:
      "Forensic analysis of system logs from a compromised host reconstructing the attack timeline, identifying persistence mechanisms (registry Run key, scheduled task), and tracing C2 beaconing activity.",
    read: "13 min read",
    docsPath: "/projects/malware-log-investigation",
    tools: ["Log Forensics", "Windows Event Logs", "PowerShell", "IOC Analysis"],
  },
];

const kinds = ["All", ...Array.from(new Set(allFindings.map((f) => f.kind)))];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#0a1124]/80 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" style={display}>
          <span className="inline-flex h-7 w-7 items-center justify-center border border-white/30 text-white text-[11px] tracking-widest" style={mono}>
            FD
          </span>
          <span className="text-white tracking-tight text-[15px] font-medium">
            Felix Demkiir
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-4" style={body}>
          <Link to="/#work" className="text-[13px] text-white/70 hover:text-white transition-colors">Work</Link>
          <Link to="/findings" className="text-[13px] text-white transition-colors">Findings</Link>
          <Link to="/#about" className="text-[13px] text-white/70 hover:text-white transition-colors">About</Link>
          <Link to="/#contact" className="ml-2 inline-flex items-center gap-2 border border-white/20 hover:border-white px-4 py-2 text-[13px] text-white transition-colors">
            Get in touch <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </nav>

        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0a1124]/90 backdrop-blur-xl" style={body}>
          <div className="px-6 py-4 flex flex-col gap-1">
            {[
              { label: "Work", to: "/#work" },
              { label: "Findings", to: "/findings" },
              { label: "About", to: "/#about" },
              { label: "Contact", to: "/#contact" },
            ].map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-white/80 hover:text-white border-b border-white/5"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default function FindingsArchive() {
  const [activeKind, setActiveKind] = useState("All");

  const filtered = activeKind === "All"
    ? allFindings
    : allFindings.filter((f) => f.kind === activeKind);

  return (
    <div className="min-h-screen bg-[#0a1124] text-white antialiased selection:bg-emerald-500 selection:text-[#04130d]" style={body}>
      <Nav />

      {/* Header */}
      <section className="pt-32 pb-16 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-[13px] transition-colors mb-10"
            style={mono}
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to portfolio
          </Link>

          <div className="grid md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 text-white/50 text-[11px] tracking-[0.25em] uppercase" style={mono}>
                <span className="h-px w-8 bg-white/30" />
                Findings & Labs
              </div>
            </div>
            <div className="md:col-span-8">
              <h1
                className="text-white text-3xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-[-0.02em] font-medium"
                style={display}
              >
                Security lab reports & investigations.
              </h1>
              <p className="mt-6 max-w-2xl text-white/60 leading-relaxed" style={body}>
                Documented hands-on lab work across penetration testing, network analysis, vulnerability scanning, and forensic investigation. Each entry links to a full write-up with methodology, findings, and remediation.
              </p>
            </div>
          </div>

          {/* Filter bar */}
          <div className="mt-12 flex flex-wrap gap-2" style={mono}>
            {kinds.map((k) => (
              <button
                key={k}
                onClick={() => setActiveKind(k)}
                className={`text-[11px] tracking-[0.15em] uppercase px-3.5 py-2 border transition-colors ${
                  activeKind === k
                    ? "border-emerald-400 bg-emerald-500 text-[#04130d]"
                    : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {filtered.map((f) => (
              <article
                key={f.title}
                className="group bg-[#0a1124] p-8 md:p-10 hover:bg-white/[0.03] transition-colors flex flex-col"
              >
                <div className="flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-white/50" style={mono}>
                  <span className="border border-white/20 px-2.5 py-1">{f.kind}</span>
                  <span>{f.date}</span>
                </div>
                <h2 className="mt-6 text-white text-lg md:text-xl leading-snug tracking-[-0.01em] font-medium flex-1" style={display}>
                  {f.title}
                </h2>
                <p className="mt-4 text-white/60 leading-relaxed text-[14px]" style={body}>
                  {f.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5" style={mono}>
                  {f.tools.map((t) => (
                    <span key={t} className="text-[10px] tracking-wider uppercase text-white/40 border border-white/10 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between text-[12px] text-white/50" style={mono}>
                  <span>{f.read}</span>
                  <Link
                    to={f.docsPath}
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Read Documentation <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center text-white/40 text-[14px]" style={mono}>
              No entries for this category yet.
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 flex flex-wrap items-center justify-between gap-4 text-[12px] text-white/40" style={mono}>
          <span>© 2026 Felix Demkiir. All rights reserved.</span>
          <Link to="/" className="hover:text-white transition-colors tracking-[0.2em] uppercase">
            ← Back to portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
