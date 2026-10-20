import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Mail, Github, Linkedin, Shield, Cloud, Code2, Menu, X } from "lucide-react";
import heroImage from "../../imports/WhatsApp_Image_2026-05-21_at_6.09.28_PM-Photoroom-2.png";
import CareerHighlights from "../components/CareerHighlights";

const display = { fontFamily: '"Space Grotesk", Inter, ui-sans-serif, system-ui' };
const body = { fontFamily: 'Inter, ui-sans-serif, system-ui' };
const mono = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' };

const HERO_IMAGE = heroImage;

const projects = [
  {
    no: "01",
    name: "KafiTech: Secure Enterprise Network Design",
    tag: "Network Security · Architecture",
    year: "2026",
    blurb:
      "Designed a segmented enterprise network in Cisco Packet Tracer with departmental VLANs, controlled inter-VLAN access, a restricted DMZ, guest-network isolation, and documented switch-hardening and validation procedures.",
    stack: ["Cisco Packet Tracer", "VLANs", "ACLs", "DMZ", "Network Hardening"],
    href: "https://github.com/msugh1/kafitech-cyber-network-design",
    liveLabel: "View Network Repository",
    docsPath: "/projects/kafitech-network-design",
    image: "https://raw.githubusercontent.com/msugh1/kafitech-cyber-network-design/main/docs/topology/network-topology.jpg",
    imageAlt: "KafiTech enterprise network topology diagram",
  },
  {
    no: "02",
    name: "FraudGuard: Merchant Risk Monitoring",
    tag: "Fraud Analysis · Security Prototype",
    year: "2026",
    blurb:
      "Built a Java Swing desktop prototype for analyst-led merchant fraud investigations. It combines SQLite-backed records, account flagging, searchable watchlists and a transparent rule-based risk score informed by report frequency and fraud category.",
    stack: ["Java", "Swing", "SQLite", "Risk Scoring", "Fraud Monitoring"],
    href: "https://github.com/msugh1/fraud_guard",
    liveLabel: "View Project & Source",
    image: "https://raw.githubusercontent.com/msugh1/fraud_guard/main/screenshots/dashboard.png",
    imageAlt: "FraudGuard merchant status dashboard screenshot",
  },
  {
    no: "03",
    name: "Secure Cloud Deployment: PrestaShop on AWS",
    tag: "Cloud Infrastructure · Security",
    year: "2026",
    blurb:
      "Deployed an e-commerce application across AWS EC2 and RDS, separating the public-facing web layer from its database. Documented security-group restrictions, limited SSH administration, deployment steps and security considerations.",
    stack: ["AWS EC2", "AWS RDS", "MySQL", "Security Groups", "Ubuntu"],
    href: "https://github.com/msugh1/nexus-gadgets-aws-deployment.",
    liveLabel: "View Deployment Repository",
    docsPath: "/projects/prestashop-aws",
    image: "https://raw.githubusercontent.com/msugh1/nexus-gadgets-aws-deployment./main/assets/banner.png",
    imageAlt: "Nexus Gadgets AWS PrestaShop deployment project banner",
  },
];

const otherProjects = [
  {
    name: "BloodLink",
    category: "Healthtech · Web Application",
    summary: "Blood-bank inventory management and demand-forecasting application with availability alerts and inter-hospital collaboration features.",
    tools: ["React", "Vite", "Recharts"],
    href: "https://blood-link-chi.vercel.app/",
  },
  {
    name: "What's Next",
    category: "AI · Education Technology",
    summary: "A career-roadmap platform bringing together guided learning pathways, AI-powered recommendations and career-development resources.",
    tools: ["Django", "React", "Gemini API"],
    href: "https://whats-next-1.onrender.com",
  },
];

const findings = [
  {
    kind: "Capstone",
    date: "May 2026",
    title: "Cybersecurity Network Design: KafiTech Solutions",
    excerpt:
      "Designed and simulated a secure, segmented enterprise network for KafiTech Solutions using Cisco Packet Tracer implementing VLANs, inter-VLAN routing, ACLs, a DMZ, and a full defense-in-depth architecture.",
    read: "15 min read",
    docsPath: "/projects/kafitech-network-design",
  },
  {
    kind: "Lab Report",
    date: "Apr 2026",
    title: "Vulnerability Assessment & Exploitation: Metasploitable 2",
    excerpt:
      "Authorized exploitation simulation against a local Metasploitable 2 target. Identified a critical vsftpd 2.3.4 backdoor using Nmap NSE, exploited it with Metasploit, and achieved verified root access.",
    read: "12 min read",
    docsPath: "/projects/vulnerability-exploitation",
  },
  {
    kind: "Lab Report",
    date: "Apr 2026",
    title: "Web App Security Scan: DVWA with OWASP ZAP",
    excerpt:
      "Full vulnerability assessment of DVWA combining automated ZAP scanning with manual payload testing surfacing SQL Injection, Command Injection, Reflected XSS, and multiple misconfigurations.",
    read: "10 min read",
    docsPath: "/projects/dvwa-web-scan",
  },
  {
    kind: "Lab Report",
    date: "Mar 2026",
    title: "Wireshark Network Traffic Analysis",
    excerpt:
      "Hands-on traffic capture and packet analysis using Wireshark applying display filters across HTTP, DNS, and TCP to identify unencrypted data exposure and anomalous traffic patterns.",
    read: "9 min read",
    docsPath: "/projects/wireshark-analysis",
  },
];

const skills = [
  "SIEM Platforms",
  "Wireshark",
  "Nmap",
  "Phishing Detection",
  "Threat Analysis",
  "Incident Response",
  "Network Traffic Analysis",
  "Vulnerability Identification",
  "Web App Pen Testing",
  "Identity & Access Management",
  "System Hardening",
  "Security Audits",
  "Firewalls",
  "Endpoint Protection",
  "AWS",
  "Wazuh",
  "WSO2",
  "Postman",
  "Google Cloud",
  "Vercel",
  "C++",
  "R",
];

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "SkillSpark", href: "#skillspark" },
  { label: "Work", href: "#work" },
  { label: "Findings", href: "#findings" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0a1124]/60 border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group" style={display}>
          <span className="inline-flex h-7 w-7 items-center justify-center border border-white/30 text-white text-[11px] tracking-widest" style={mono}>
            FD
          </span>
          <span className="text-white tracking-tight text-[15px] font-medium">
            Felix Demkiir
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1" style={body}>
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-[13px] text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/119fkAt46DgATxfIaGVOlPkx-4DCrxyb-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 border border-white/20 hover:border-white px-4 py-2 text-[13px] text-white transition-colors"
          >
            View CV <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
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
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-white/80 hover:text-white border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen bg-[#0a1124] overflow-hidden flex flex-col">
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-32 pb-20 md:py-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 lg:col-span-6">
            <div className="flex items-center gap-3 mb-10 text-white/60 text-[11px] tracking-[0.25em] uppercase" style={mono}>
              <span className="h-px w-10 bg-white/40" />
              Portfolio · 2026
            </div>

            <h1
              className="text-white text-[42px] leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] tracking-[-0.02em] font-medium"
              style={display}
            >
              I build, investigate, and write about{" "}
              <span className="italic font-light text-white/70">secure</span> digital systems.
            </h1>

            <p
              className="mt-8 max-w-xl text-white/70 text-[15px] md:text-base leading-relaxed"
              style={body}
            >I'm Felix Demkiir, a cybersecurity student with practical exposure to enterprise security monitoring, API and identity security, and cloud infrastructure. I document what I build, investigate, and learn.</p>

            <div className="mt-10 flex flex-wrap items-center gap-3" style={body}>
              <a
                href="#work"
                className="group inline-flex items-center gap-3 bg-emerald-500 text-[#04130d] px-6 py-3.5 text-[13px] tracking-wide hover:bg-emerald-400 transition-colors"
              >
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#findings"
                className="group inline-flex items-center gap-3 border border-white/25 hover:border-white text-white px-6 py-3.5 text-[13px] tracking-wide backdrop-blur-sm bg-white/5 transition-colors"
              >
                Read Findings
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="hidden md:flex md:col-span-6 lg:col-span-6 items-end justify-center h-full relative">
            <img
              src={HERO_IMAGE}
              alt="Portrait of Felix Demkiir"
              className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl object-contain object-bottom"
              style={{ maxHeight: "90vh" }}
            />
            {/* left edge */}
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0a1124] to-transparent pointer-events-none" />
            {/* right edge */}
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0a1124] to-transparent pointer-events-none" />
            {/* bottom edge */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0a1124] to-transparent pointer-events-none" />
            {/* top edge */}
            <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#0a1124] to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 backdrop-blur-md bg-[#0a1124]/40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex flex-wrap items-center justify-between gap-4 text-[11px] tracking-[0.2em] uppercase text-white/50" style={mono}>
          <span>Based in Lagos · Available for collab</span>
          <span className="hidden md:inline">Cybersecurity / Cloud / Product</span>
          <span>Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, kicker }: { eyebrow: string; title: string; kicker?: string }) {
  return (
    <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
      <div className="md:col-span-4">
        <div className="flex items-center gap-3 text-white/50 text-[11px] tracking-[0.25em] uppercase" style={mono}>
          <span className="h-px w-8 bg-white/30" />
          {eyebrow}
        </div>
      </div>
      <div className="md:col-span-8">
        <h2 className="text-white text-3xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-[-0.02em] font-medium" style={display}>
          {title}
        </h2>
        {kicker && (
          <p className="mt-6 max-w-2xl text-white/60 leading-relaxed" style={body}>
            {kicker}
          </p>
        )}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="work" className="relative scroll-mt-20 border-t border-white/10 bg-[#0a1124]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <SectionHeader
          eyebrow="Selected Security Work"
          title="Practical security, documented."
          kicker="Network architecture, fraud analysis and cloud infrastructure—projects where I could investigate real technical problems, build working solutions and document the decisions behind them."
        />

        <div className="border-t border-white/10">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group border-b border-white/10 py-10 transition-colors duration-300 hover:bg-white/[0.015] md:py-14"
            >
              <div className="grid items-start gap-6 md:grid-cols-12 md:gap-10">
                <span className="text-xs text-emerald-400" style={mono}>{p.no} / 03</span>
                <div className="md:col-span-5">
                  <h3 className="text-2xl font-medium leading-tight tracking-tight text-white md:text-4xl" style={display}>
                    {p.name}
                  </h3>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-wider text-white/50" style={mono}>
                    <span>{p.tag}</span>
                    <span className="h-px w-5 bg-white/20" aria-hidden="true" />
                    <span>{p.year}</span>
                  </div>
                  <div className="mt-7 overflow-hidden border border-white/10 bg-[#101c2b] p-2">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/9] w-full object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5 md:col-span-5">
                  <p className="text-[15px] leading-7 text-white/75" style={body}>{p.blurb}</p>
                  <ul className="flex flex-wrap gap-2">
                    {p.stack.map((tool) => (
                      <li key={tool} className="border border-white/15 px-2.5 py-1.5 text-[10.5px] uppercase tracking-wider text-white/60" style={mono}>
                        {tool}
                      </li>
                    ))}
                  </ul>
                  {p.name.startsWith("FraudGuard") && (
                    <p className="border-l-2 border-emerald-400/70 pl-4 text-xs leading-6 text-white/55">
                      Demonstration prototype; authentication and operational safeguards require further work before production use.
                    </p>
                  )}
                  <div className="flex flex-wrap gap-3 pt-1">
                    {"docsPath" in p && p.docsPath && (
                      <Link
                        to={p.docsPath}
                        className="inline-flex min-h-11 items-center gap-2 bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-[#04130d] transition-colors hover:bg-emerald-400"
                      >
                        Read case study <ArrowRight size={15} aria-hidden="true" />
                      </Link>
                    )}
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 border border-white/25 px-4 py-2.5 text-xs text-white/80 transition-colors hover:border-emerald-400 hover:text-emerald-400"
                    >
                      {p.liveLabel} <ArrowUpRight size={15} aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </div>
                </div>
                <div className="hidden justify-end md:col-span-1 md:flex">
                  <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name} repository in a new tab`}
                     className="grid size-10 place-items-center border border-white/20 text-white/60 transition-colors hover:border-emerald-400 hover:bg-emerald-500 hover:text-[#04130d]">
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-9">
          <div className="mb-7 flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-xl font-medium text-white md:text-2xl" style={display}>Selected software projects</h3>
            <span className="text-[11px] uppercase tracking-[0.16em] text-white/45" style={mono}>Beyond security</span>
          </div>
          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {otherProjects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col bg-[#0a1124] p-6 transition-colors duration-200 hover:bg-[#101c2b] sm:p-8"
              >
                <span className="text-[11px] uppercase tracking-wider text-emerald-400" style={mono}>{project.category}</span>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h4 className="text-2xl font-medium text-white" style={display}>{project.name}</h4>
                  <ArrowUpRight className="shrink-0 text-white/50 transition-transform duration-200 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1" size={20} aria-hidden="true" />
                </div>
                <p className="mt-3 flex-1 text-sm leading-7 text-white/65">{project.summary}</p>
                <span className="mt-6 text-xs text-white/45">{project.tools.join(" · ")}</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Findings() {
  return (
    <section id="findings" className="relative bg-[#0a1124] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionHeader
          eyebrow="Findings & Notes"
          title="Writing as I learn, not after."
          kicker="Field notes from cybersecurity coursework, lab work, and the projects above. Half blog, half lab notebook."
        />

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {findings.map((f) => (
            <article
              key={f.title}
              className="group bg-[#0a1124] p-8 md:p-10 hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-white/50" style={mono}>
                <span className="border border-white/20 px-2.5 py-1">{f.kind}</span>
                <span>{f.date}</span>
              </div>
              <h3 className="mt-7 text-white text-xl md:text-2xl leading-snug tracking-[-0.01em] font-medium" style={display}>
                {f.title}
              </h3>
              <p className="mt-4 text-white/65 leading-relaxed text-[14.5px]" style={body}>
                {f.excerpt}
              </p>
              <div className="mt-8 flex items-center justify-between text-[12px] text-white/60" style={mono}>
                <span>{f.read}</span>
                {"docsPath" in f && f.docsPath ? (
                  <Link
                    to={f.docsPath}
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Read Documentation <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 text-white/80 group-hover:text-white">
                    Read <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/findings"
            className="inline-flex items-center gap-3 border border-white/20 hover:border-emerald-400 hover:text-emerald-400 text-white px-6 py-3.5 text-[13px] tracking-wide transition-colors"
            style={body}
          >
            Browse the full archive <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function About() {
  const pillars = [
    { icon: Shield, label: "Cybersecurity", text: "Phishing detection, SIEM investigations, Wireshark traffic analysis, and Nmap enumeration applied in real labs and CTF challenges." },
    { icon: Cloud, label: "Cloud & Deployment", text: "Deploying on AWS and Google Cloud with IAM controls, system hardening, and least-privilege by default. Vercel for front-end delivery." },
    { icon: Code2, label: "Product Build", text: "Designing and shipping security-minded tools end to end from a notebook idea to something people actually use." },
  ];

  return (
    <>
    <section id="about" className="relative bg-[#0a1124] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 text-white/50 text-[11px] tracking-[0.25em] uppercase mb-8" style={mono}>
              <span className="h-px w-8 bg-white/30" />
              About
            </div>
            <h2 className="text-white text-3xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-[-0.02em] font-medium" style={display}>
              Curious, careful, and a little bit obsessed with how systems fail.
            </h2>
          </div>
          <div className="md:col-span-7" style={body}>
            <p className="text-white/75 text-lg leading-relaxed">
              I&apos;m a cybersecurity student at NUTM (BSc, 2024–2028). I completed
              a technology internship at VFD Microfinance Bank, gaining exposure to
              security monitoring, identity and API security, and cloud infrastructure.
              Skilled in phishing detection, network traffic analysis, and
              vulnerability identification using SIEM platforms, Wireshark,
              and Nmap. I also founded SkillSpark Bootcamp to expand access to practical
              cybersecurity education for young people in Nigeria.
            </p>
            <p className="mt-6 text-white/60 leading-relaxed">
              I&apos;ve completed the Google Cybersecurity Professional Certificate,
              alongside training and credentials in security fundamentals and
              phishing prevention. I treat this portfolio as a working notebook:
              documenting the systems I build, the incidents I investigate,
              and what I learn from each project.
            </p>

            <div className="mt-10">
              <div className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-4" style={mono}>
                Certifications
              </div>
              <ul className="space-y-2.5" style={body}>
                {[
                  "Google Cybersecurity Professional Certificate — Completed 2026",
                  "Microsoft SC-900: Security, Compliance & Identity Fundamentals",
                  "NITDA 3MTT Cybersecurity Certification",
                  "Hack & Fix Certified Phishing Prevention Specialist",
                ].map((cert) => (
                  <li key={cert} className="flex items-start gap-2.5 text-white/65 text-[14px] leading-snug">
                    <span className="mt-[6px] w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
              <a
                href="https://drive.google.com/drive/folders/1sYuzPEwZxeGa-XJ492gZE7sRWeKx7cQM?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-colors text-sm tracking-wide"
                style={mono}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                View Certifications
              </a>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.label} className="bg-[#0a1124] p-6">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    <div className="mt-5 text-white text-[13px] tracking-[0.2em] uppercase" style={mono}>
                      {p.label}
                    </div>
                    <p className="mt-3 text-white/60 text-[13.5px] leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

function Skills() {
  return (
    <section className="relative bg-[#0a1124] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 text-white/50 text-[11px] tracking-[0.25em] uppercase" style={mono}>
              <span className="h-px w-8 bg-white/30" />
              Skills
            </div>
            <h2 className="mt-6 text-white text-3xl md:text-4xl tracking-[-0.02em] font-medium" style={display}>
              The toolkit, today.
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-2.5" style={body}>
            {skills.map((s) => (
              <span
                key={s}
                className="text-[13px] text-white/85 border border-white/15 hover:border-emerald-400 hover:bg-emerald-500 hover:text-[#04130d] transition-colors px-4 py-2.5 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { icon: Mail, label: "Email", value: "msughdemkiir@gmail.com", href: "mailto:msughdemkiir@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "msugh-felix-demkiir", href: "https://www.linkedin.com/in/msugh-felix-demkiir-cybersecurity-analyst/" },
    { icon: Github, label: "GitHub", value: "@msugh1", href: "https://github.com/msugh1" },
  ];

  return (
    <section id="contact" className="relative bg-[#0a1124] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="flex items-center gap-3 text-white/50 text-[11px] tracking-[0.25em] uppercase mb-10" style={mono}>
          <span className="h-px w-8 bg-white/30" />
          Contact
        </div>

        <h2
          className="text-white max-w-4xl text-4xl md:text-6xl lg:text-[80px] leading-[1.02] tracking-[-0.02em] font-medium"
          style={display}
        >
          Have a system worth securing or a project worth shipping?
        </h2>
        <p className="mt-8 max-w-xl text-white/65 leading-relaxed" style={body}>
          I&apos;m always open to collaborating on cybersecurity research,
          security-minded product work, and writing projects. The fastest way
          to reach me is email.
        </p>

        <div className="mt-14 grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.label}
                href={l.href}
                target={l.label !== "Email" ? "_blank" : undefined}
                rel={l.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group bg-[#0a1124] p-8 hover:bg-emerald-500 hover:text-[#04130d] transition-colors"
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
                <div className="mt-8 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[11px] tracking-[0.25em] uppercase text-white/50 group-hover:text-[#04130d]/70" style={mono}>
                      {l.label}
                    </div>
                    <div className="mt-2 text-[15px] text-white group-hover:text-[#04130d]" style={body}>
                      {l.value}
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-[#04130d] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <footer className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 flex flex-wrap items-center justify-between gap-4 text-[12px] text-white/40" style={mono}>
          <span>© 2026 Felix Demkiir. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">Designed & built in Lagos</span>
        </div>
      </footer>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1124] text-white antialiased selection:bg-emerald-500 selection:text-[#04130d]" style={body}>
      <Nav />
      <Hero />
      <CareerHighlights />
      <Projects />
      <Findings />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
