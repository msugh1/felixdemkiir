export const cvUrl = "https://drive.google.com/file/d/119fkAt46DgATxfIaGVOlPkx-4DCrxyb-/view?usp=sharing";

export type PortfolioProject = {
  index: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  tools: string[];
  link: string;
  report?: string;
  note?: string;
};

export const featuredProjects: PortfolioProject[] = [
  {
    index: "01",
    title: "KafiTech — Secure Enterprise Network",
    category: "NETWORK ARCHITECTURE / DEFENSIVE SECURITY",
    description:
      "Designed and simulated a segmented enterprise network in Cisco Packet Tracer. Defined departmental VLANs, ACL-based access, a restricted DMZ, guest isolation, and switch-hardening controls, with documented validation.",
    image: "https://raw.githubusercontent.com/msugh1/kafitech-cyber-network-design/main/docs/topology/network-topology.jpg",
    imageAlt: "KafiTech network topology showing segmented enterprise network architecture",
    tools: ["Cisco Packet Tracer", "VLANs", "ACLs", "DMZ"],
    link: "https://github.com/msugh1/kafitech-cyber-network-design",
    report: "/projects/kafitech-network-design",
  },
  {
    index: "02",
    title: "FraudGuard — Merchant Risk Monitoring",
    category: "SECURITY TOOLING / SOFTWARE",
    description:
      "A Java desktop prototype for analyst-led fraud investigations. Includes searchable merchant records, a flagging workflow, SQLite persistence, and transparent rule-based risk classification.",
    image: "https://raw.githubusercontent.com/msugh1/fraud_guard/main/screenshots/dashboard.png",
    imageAlt: "FraudGuard Java desktop application merchant risk dashboard",
    tools: ["Java", "Swing", "SQLite", "Rule-based scoring"],
    link: "https://github.com/msugh1/fraud_guard",
    note: "Demonstration prototype. Authentication hardening and production safeguards are future work.",
  },
  {
    index: "03",
    title: "AWS — Isolated Application Infrastructure",
    category: "CLOUD / INFRASTRUCTURE SECURITY",
    description:
      "Deployed a PrestaShop application on EC2 with a separate RDS database tier. Applied security group restrictions and documented infrastructure boundaries, privileged access, and deployment decisions.",
    image: "https://raw.githubusercontent.com/msugh1/nexus-gadgets-aws-deployment./main/assets/banner.png",
    imageAlt: "AWS secure PrestaShop deployment project banner",
    tools: ["AWS EC2", "AWS RDS", "MySQL", "Security Groups"],
    link: "https://github.com/msugh1/nexus-gadgets-aws-deployment.",
    report: "/projects/prestashop-aws",
    note: "Infrastructure lab. TLS and additional operational hardening are documented as future improvements.",
  },
];

export const softwareProjects = [
  {
    title: "BloodLink",
    category: "Health technology",
    description: "A blood-bank management platform with inventory visibility, alerts, and forecasting interfaces.",
    link: "https://github.com/msugh1/BloodLink",
    tools: "React / Vite / Recharts",
  },
  {
    title: "What's Next",
    category: "AI and education",
    description: "A career-planning product exploring guided pathways, personalised recommendations and learning support.",
    link: "https://whats-next-1.onrender.com",
    tools: "Django / React / Gemini",
  },
];

export type LabGroup = "Offensive" | "Defensive" | "Network";
export type Lab = {
  index: string;
  title: string;
  subtitle: string;
  group: LabGroup;
  date: string;
  tools: string[];
  path: string;
};

export const labs: Lab[] = [
  {
    index: "01",
    title: "Metasploitable 2 — Controlled Exploitation",
    subtitle: "Nmap enumeration, vsftpd vulnerability analysis, controlled exploitation and remediation.",
    group: "Offensive",
    date: "APR 2026",
    tools: ["Nmap", "Metasploit"],
    path: "/projects/vulnerability-exploitation",
  },
  {
    index: "02",
    title: "DVWA — Web Application Assessment",
    subtitle: "Investigating injection flaws and misconfigurations using OWASP ZAP and manual testing.",
    group: "Offensive",
    date: "APR 2026",
    tools: ["OWASP ZAP", "DVWA"],
    path: "/projects/dvwa-web-scan",
  },
  {
    index: "03",
    title: "OpenVAS — Vulnerability Assessment",
    subtitle: "Simulated office-network vulnerability scanning, prioritisation and reporting.",
    group: "Defensive",
    date: "MAR 2026",
    tools: ["OpenVAS", "GVM"],
    path: "/projects/openvas-scan",
  },
  {
    index: "04",
    title: "Wireshark — Packet Analysis",
    subtitle: "HTTP, DNS and TCP traffic inspection for insecure transfers and unusual patterns.",
    group: "Network",
    date: "MAR 2026",
    tools: ["Wireshark", "TCP/IP"],
    path: "/projects/wireshark-analysis",
  },
  {
    index: "05",
    title: "Malware Log Investigation",
    subtitle: "Reconstructing a simulated compromise timeline using Windows logs and indicators.",
    group: "Defensive",
    date: "MAY 2026",
    tools: ["Windows Event Logs", "PowerShell"],
    path: "/projects/malware-log-investigation",
  },
  {
    index: "06",
    title: "KafiTech — Network Security Capstone",
    subtitle: "Segmented enterprise design, access policies, DMZ and validation evidence.",
    group: "Network",
    date: "MAY 2026",
    tools: ["Packet Tracer", "ACLs"],
    path: "/projects/kafitech-network-design",
  },
];

export const skillGroups = [
  { name: "Security operations", focus: "Detection and investigation", tools: ["Wazuh", "Log analysis", "Incident investigation", "Wireshark"] },
  { name: "Offensive security", focus: "Assessment and validation", tools: ["Nmap", "Metasploit", "OWASP ZAP", "OpenVAS"] },
  { name: "Cloud & identity", focus: "Infrastructure and access", tools: ["AWS", "Security Groups", "WSO2", "IAM", "Postman"] },
  { name: "Networks & engineering", focus: "Secure systems by design", tools: ["Cisco Packet Tracer", "VLANs & ACLs", "Python", "Java", "SQL"] },
];

export const certifications = [
  { name: "Google Cybersecurity Professional Certificate", issuer: "Google · 2026", flag: "Completed" },
  { name: "Security, Compliance & Identity Fundamentals", issuer: "Microsoft SC-900 · 2026", flag: "Credential" },
  { name: "3MTT Cybersecurity", issuer: "NITDA · 2025", flag: "Certified" },
  { name: "Certified Phishing Prevention Specialist", issuer: "Hack & Fix · 2025", flag: "Certified" },
];
