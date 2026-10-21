import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Mail, Github, Linkedin, Shield, Cloud, Code2, Menu, X } from "lucide-react";
import CareerHighlights from "../components/CareerHighlights";

const display = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' };
const body = { fontFamily: '"IBM Plex Mono", ui-monospace, monospace' };
const mono = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' };


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
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#findings" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="terminal-nav">
      <div className="terminal-nav-inner">
        <a href="#top" className="terminal-brand" aria-label="Felix Demkiir - homepage">
          <span className="terminal-brand-prompt" aria-hidden="true">~/</span>
          <span>felix<span className="terminal-brand-muted">@</span>security</span>
          <span className="terminal-brand-caret" aria-hidden="true">_</span>
        </a>
        <nav aria-label="Portfolio navigation" className="terminal-desktop-links">
          {navLinks.map((l) => <a key={l.href} href={l.href}><span aria-hidden="true">./</span>{l.label.toLowerCase()}</a>)}
        </nav>
        <div className="terminal-nav-actions">
          <a className="terminal-resume" href="https://drive.google.com/file/d/119fkAt46DgATxfIaGVOlPkx-4DCrxyb-/view?usp=sharing" target="_blank" rel="noopener noreferrer">resume.pdf <ArrowUpRight size={14}/></a>
          <button type="button" className="terminal-menu-button" aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(v => !v)}>{open ? <X size={20}/> : <Menu size={20}/>}</button>
        </div>
      </div>
      {open && <nav className="terminal-mobile-links" aria-label="Mobile navigation">{navLinks.map(l=><a key={l.href} href={l.href} onClick={()=>setOpen(false)}><span>$ cd </span>{l.label.toLowerCase()}</a>)}<a href="https://drive.google.com/file/d/119fkAt46DgATxfIaGVOlPkx-4DCrxyb-/view?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}>$ open resume.pdf</a></nav>}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="terminal-hero" aria-labelledby="hero-title">
      <div className="terminal-hero-inner">
        <div className="terminal-window">
          <div className="terminal-window-bar">
            <div className="terminal-dots" aria-hidden="true"><i/><i/><i/></div>
            <span>msugh@security: ~/portfolio</span>
            <span className="terminal-window-status">● online</span>
          </div>
          <div className="terminal-window-content">
            <div className="terminal-command"><span className="terminal-path">msugh@security</span><span className="terminal-tilde"> ~ </span><span className="terminal-dollar">$</span><span>whoami</span></div>
            <p className="terminal-hero-overline">CYBERSECURITY / CLOUD & NETWORK DEFENCE <span>/ LAGOS, NG</span></p>
            <h1 id="hero-title">Understanding risk.<br/><span>Strengthening systems.</span></h1>
            <div className="terminal-hero-description">
              <div className="terminal-command"><span className="terminal-path">msugh@security</span><span className="terminal-tilde"> ~ </span><span className="terminal-dollar">$</span><span>cat about.txt</span></div>
              <p>I'm <strong>Msugh Felix Demkiir</strong>, a cybersecurity student at the Nigerian University of Technology and Management. My work spans security monitoring, network assessment, cloud infrastructure, and API security. Through hands-on projects, technical investigations, and industry experience, I focus on identifying risks and applying practical security controls.</p>
            </div>
            <div className="terminal-hero-actions"><a href="#work" className="terminal-primary-link">[ Explore my work <ArrowUpRight size={16}/> ]</a><a href="https://drive.google.com/file/d/119fkAt46DgATxfIaGVOlPkx-4DCrxyb-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="terminal-secondary-link">[ View résumé <ArrowRight size={15}/> ]</a></div>
            <div className="terminal-stats" aria-label="Portfolio highlights">
              <div><span>experience</span><strong>2026</strong><small>Industry experience</small></div>
              <div><span>research</span><strong>06</strong><small>Security labs</small></div>
              <div><span>initiatives</span><strong>01</strong><small>Initiative founded</small></div>
            </div>
            <div className="terminal-hero-lastline"><span className="terminal-path">msugh@security</span><span className="terminal-tilde"> ~ </span><span className="terminal-dollar">$</span><span className="terminal-inline-cursor" aria-hidden="true"/></div>
          </div>
        </div>
        <div className="terminal-hero-footer"><span>// SECURITY IS A PRACTICE, NOT A LABEL.</span><a href="#work">scroll_to_work <ArrowRight size={14}/></a></div>
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
    <section id="work" className="relative border-t border-white/10 bg-[#080f20] scroll-mt-20">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
        <div className="mb-12 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4"><span className="font-mono text-[11px] tracking-[.2em] uppercase text-emerald-400">01 — SELECTED WORK</span></div>
          <div className="md:col-span-8"><h2 className="text-4xl font-medium leading-tight tracking-[-.05em] text-white md:text-6xl" style={display}>Proof in the <em className="font-light text-emerald-400">projects.</em></h2><p className="mt-6 max-w-xl leading-7 text-white/60">Security architecture, fraud analysis, and infrastructure engineering. Real implementations, with evidence you can inspect.</p></div>
        </div>
        <div className="border-t border-white/10">
          {projects.map((p) => (
            <article key={p.name} className="group grid gap-7 border-b border-white/10 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
              <span className="font-mono text-xs text-emerald-400 lg:col-span-1">{p.no} / 03</span>
              <div className="lg:col-span-5"><div className="relative overflow-hidden border border-white/10 bg-[#101d2b] p-2"><img src={p.image} alt={p.imageAlt} loading="lazy" decoding="async" className="aspect-[16/10] w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.025]"/></div></div>
              <div className="lg:col-span-6"><div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[.16em] text-emerald-400"><span>{p.tag}</span><span className="text-white/30">/</span><span className="text-white/50">{p.year}</span></div><h3 className="max-w-xl text-3xl leading-tight font-medium tracking-[-.035em] text-white md:text-4xl" style={display}>{p.name}</h3><p className="mt-5 max-w-xl leading-7 text-white/65">{p.blurb}</p><div className="mt-6 flex flex-wrap gap-2">{p.stack.map(t=><span key={t} className="border border-white/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white/60">{t}</span>)}</div>{p.name.startsWith("FraudGuard")&&<p className="mt-5 border-l-2 border-emerald-400/60 pl-4 text-xs leading-6 text-white/50">Prototype: authentication and operational safeguards require further work before production use.</p>}<div className="mt-8 flex flex-wrap items-center gap-3">{"docsPath" in p && p.docsPath && <Link to={p.docsPath} className="inline-flex min-h-11 items-center gap-2 bg-emerald-500 px-5 py-3 text-xs font-semibold text-[#04130d] hover:bg-emerald-400">Read case study <ArrowUpRight size={16}/></Link>}<a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 border border-white/25 px-5 py-3 text-xs text-white hover:border-emerald-400 hover:text-emerald-400">View repository <ArrowUpRight size={16}/></a></div></div>
            </article>
          ))}
        </div>
        <div className="mt-20 flex items-center justify-between gap-5 border-b border-white/10 pb-6"><h3 className="text-2xl font-medium text-white" style={display}>Beyond security</h3><span className="font-mono text-[10px] uppercase tracking-wider text-white/40">SOFTWARE / 02</span></div>
        <div className="grid gap-px border-x border-b border-white/10 bg-white/10 md:grid-cols-2">{otherProjects.map(p=><a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-[#080f20] p-8 transition-colors hover:bg-[#101d2b]"><span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">{p.category}</span><div className="mt-5 flex justify-between gap-3"><h4 className="text-2xl font-medium text-white">{p.name}</h4><ArrowUpRight size={22} className="text-white/50 transition-transform motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1"/></div><p className="mt-4 flex-1 text-sm leading-7 text-white/60">{p.summary}</p><span className="mt-7 font-mono text-[11px] text-white/40">{p.tools.join(" / ")}</span></a>)}</div>
      </div>
    </section>
  );
}

function Findings() {
  return <section id="findings" className="scroll-mt-20 border-t border-white/10 bg-[#0a1124]"><div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36"><div className="grid gap-6 md:grid-cols-12"><span className="font-mono text-[11px] tracking-[.2em] uppercase text-emerald-400 md:col-span-4">04 — SECURITY RESEARCH</span><div className="md:col-span-8"><h2 className="text-4xl font-medium tracking-[-.05em] text-white md:text-6xl" style={display}>Inside the <em className="font-light text-emerald-400">lab.</em></h2><p className="mt-5 max-w-xl leading-7 text-white/60">Hands-on investigations and write-ups: the methods, findings and remediation behind each assessment.</p></div></div><div className="mt-12 border-t border-white/10">{findings.map((f,i)=><Link to={f.docsPath} key={f.title} className="group grid items-center gap-5 border-b border-white/10 py-7 transition-colors hover:bg-white/[.025] md:grid-cols-12 md:gap-8"><span className="font-mono text-xs text-emerald-400 md:col-span-1">0{i+1}</span><div className="md:col-span-7"><h3 className="text-xl font-medium tracking-tight text-white transition-colors group-hover:text-emerald-400 md:text-2xl" style={display}>{f.title}</h3><p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">{f.excerpt}</p></div><div className="font-mono text-[10px] uppercase tracking-wider text-white/40 md:col-span-3">{f.kind} / {f.date}</div><ArrowUpRight className="text-emerald-400 transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1 md:col-span-1" size={21}/></Link>)}</div><Link to="/findings" className="mt-9 inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300">Browse the full findings archive <ArrowUpRight size={17}/></Link></div></section>;
}

function About() {
  const pillars = [
    { icon: Shield, label: "Security operations", text: "Threat investigation, vulnerability assessment, network traffic analysis and defensive security labs." },
    { icon: Cloud, label: "Cloud & identity", text: "Experience with AWS infrastructure, Wazuh monitoring, WSO2 identity and API-security workflows." },
    { icon: Code2, label: "Building products", text: "Developing software and education initiatives that turn ideas into working experiences." },
  ];
  return <section id="about" className="scroll-mt-20 border-t border-white/10 bg-[#0a1124]">
    <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5"><span className="font-mono text-[11px] uppercase tracking-[.2em] text-emerald-400">05 — PROFILE / MISSION</span><h2 className="mt-8 text-4xl font-medium leading-tight tracking-[-.045em] text-white md:text-5xl" style={display}>Curiosity led me to security. <em className="font-light text-emerald-400">Building made it real.</em></h2></div>
        <div className="md:col-span-7"><p className="max-w-2xl text-lg leading-9 text-white/75">I'm a cybersecurity student at the Nigerian University of Technology and Management (BSc, 2024–2028). I learn by building systems, investigating weaknesses and documenting the thinking behind my work.</p><p className="mt-6 max-w-2xl leading-8 text-white/60">After completing a technology internship at VFD Microfinance Bank, I'm deepening my interests in security operations, network architecture and secure cloud environments. I also founded SkillSpark Bootcamp to help young Nigerians access practical technology education.</p><div className="mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">{pillars.map(({icon:Icon,label,text})=><div key={label} className="bg-[#0a1124] p-6 transition-colors hover:bg-[#102032]"><Icon className="text-emerald-400" size={22} strokeWidth={1.5}/><h3 className="mt-5 text-sm font-semibold text-white">{label}</h3><p className="mt-3 text-xs leading-6 text-white/60">{text}</p></div>)}</div></div>
      </div>
    </div>
  </section>;
}

function Skills() {
  const groups = [
    { name: "Security operations", caption: "Detection & investigation", items: ["Wazuh", "SIEM investigations", "Wireshark", "Log analysis"] },
    { name: "Security assessment", caption: "Discover & validate", items: ["Nmap", "OWASP ZAP", "Metasploit", "OpenVAS"] },
    { name: "Cloud & identity", caption: "Secure infrastructure", items: ["AWS", "Security Groups", "WSO2", "Postman"] },
    { name: "Networks & engineering", caption: "Architecture & tooling", items: ["Cisco Packet Tracer", "VLANs & ACLs", "Java", "Python"] },
  ];
  return <section id="skills" className="border-t border-white/10 bg-[#080f20]">
    <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32"><div className="grid gap-8 md:grid-cols-12"><div className="md:col-span-4"><span className="font-mono text-[11px] uppercase tracking-[.2em] text-emerald-400">06 — CAPABILITIES</span><h2 className="mt-7 text-4xl font-medium tracking-[-.05em] text-white md:text-5xl" style={display}>The working <em className="font-light text-emerald-400">toolkit.</em></h2></div><div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 md:col-span-8">{groups.map((g,i)=><div key={g.name} className="bg-[#080f20] p-7 transition-colors hover:bg-[#122131]"><span className="font-mono text-[10px] tracking-widest text-emerald-400">0{i+1} / SPECIALISATION</span><h3 className="mt-6 text-xl font-medium text-white">{g.name}</h3><p className="mt-2 text-xs text-white/45">{g.caption}</p><div className="mt-6 flex flex-wrap gap-2">{g.items.map(t=><span key={t} className="border border-white/15 px-3 py-1.5 text-xs text-white/65">{t}</span>)}</div></div>)}</div></div></div>
  </section>;
}
function Credentials(){
  const list=[
    ["Google Cybersecurity Professional Certificate","Google · 2026"],
    ["Security, Compliance & Identity Fundamentals (SC-900)","Microsoft · 2026"],
    ["3MTT Cybersecurity Certification","NITDA · 2025"],
    ["Certified Phishing Prevention Specialist","Hack & Fix · 2025"],
  ];
  return <section className="border-t border-white/10 bg-[#0a1124]"><div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32"><div className="md:col-span-5"><span className="font-mono text-[11px] uppercase tracking-[.2em] text-emerald-400">07 — EDUCATION & CREDENTIALS</span><h2 className="mt-7 text-4xl font-medium tracking-[-.05em] text-white md:text-5xl" style={display}>Learning with <em className="font-light text-emerald-400">intention.</em></h2><p className="mt-7 leading-8 text-white/60">BSc Cybersecurity · Nigerian University of Technology and Management<br/>2024–2028 (expected)</p><a href="https://drive.google.com/drive/folders/1sYuzPEwZxeGa-XJ492gZE7sRWeKx7cQM?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300">View credentials <ArrowUpRight size={16}/></a></div><div className="border-t border-white/10 md:col-span-7">{list.map((c,i)=><div key={c[0]} className="grid grid-cols-[2rem_1fr] gap-4 border-b border-white/10 py-6"><span className="font-mono text-xs text-emerald-400">0{i+1}</span><div><h3 className="text-base font-medium text-white">{c[0]}</h3><p className="mt-2 text-xs text-white/50">{c[1]}</p></div></div>)}</div></div></section>;
}
function Contact() {
  const links=[
    { icon: Mail, label: "Email", value: "msughdemkiir@gmail.com", href: "mailto:msughdemkiir@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "Let's connect professionally", href: "https://www.linkedin.com/in/msugh-felix-demkiir-cybersecurity-analyst/" },
    { icon: Github, label: "GitHub", value: "Explore my repositories", href: "https://github.com/msugh1" },
  ];
  return <section id="contact" className="scroll-mt-20 border-t border-emerald-400/20 bg-[#07121c]"><div className="mx-auto max-w-[1400px] px-6 pt-24 md:px-10 md:pt-32"><span className="font-mono text-[11px] tracking-[.2em] uppercase text-emerald-400">08 — LET'S CONNECT</span><div className="mt-9 grid gap-12 pb-24 md:grid-cols-12"><div className="md:col-span-8"><p className="font-mono text-[10px] uppercase tracking-[.2em] text-white/45">OPEN TO CYBERSECURITY INTERNSHIPS & COLLABORATIONS</p><h2 className="mt-7 text-5xl font-medium leading-[1.05] tracking-[-.05em] text-white md:text-7xl" style={display}>Let's build<br/><em className="font-light text-emerald-400">something secure.</em></h2><p className="mt-7 max-w-lg leading-7 text-white/60">Interested in security operations, cloud security, engineering or meaningful collaboration? I'd be glad to connect.</p><a href="mailto:msughdemkiir@gmail.com" className="mt-9 inline-flex items-center gap-3 border-b border-emerald-400 pb-3 text-lg font-medium text-emerald-400 hover:text-emerald-300">Get in touch <ArrowUpRight size={22}/></a></div><div className="self-end border-t border-white/15 md:col-span-4">{links.map(l=>{const Icon=l.icon;return <a key={l.label} href={l.href} target={l.label==="Email"?undefined:"_blank"} rel={l.label==="Email"?undefined:"noopener noreferrer"} className="group flex items-center gap-4 border-b border-white/15 py-5 text-white/65 transition-colors hover:text-emerald-400"><Icon size={19}/><span className="flex-1"><strong className="block text-sm font-medium">{l.label}</strong><small className="mt-1 block text-xs text-white/40">{l.value}</small></span><ArrowUpRight size={19}/></a>})}</div></div><footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-8 font-mono text-[10px] uppercase tracking-wider text-white/40"><span>© 2026 MSUGH FELIX DEMKIIR</span><span>SECURITY / ENGINEERING / COMMUNITY</span><a href="#top" className="text-emerald-400 hover:text-emerald-300">BACK TO TOP ↑</a></footer></div></section>;
}

export default function Home() {
  return (
    <div className="terminal-site min-h-screen text-white antialiased" style={body}>
      <Nav />
      <Hero />
      <CareerHighlights />
      <Projects />
      <Findings />
      <About />
      <Skills />
      <Credentials />
      <Contact />
    </div>
  );
}
