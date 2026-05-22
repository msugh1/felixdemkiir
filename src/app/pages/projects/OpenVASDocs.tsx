import pdfSrc from "../../../imports/PROJECT__PERFORM_A_VULNERABILITY_SCAN_USING_OPENVAS_AND_WRITE_A_REPORT_BASED_ON__RESULTS.pdf";
import { DocNav, DocFooter, SectionDivider, SectionNumber, RiskBadge, FindingRow, display, body, mono } from "../../components/DocShared";

export default function OpenVASDocs() {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={body}>
      <DocNav />

      {/* Hero */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["Network Security", "OpenVAS", "CVE Analysis", "Kali Linux"].map((t) => (
              <span key={t} className="text-[11px] tracking-[0.15em] uppercase text-gray-500 border border-gray-300 px-2.5 py-1 rounded-sm" style={mono}>{t}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tight mb-6" style={display}>
            Network Vulnerability Scan: OpenVAS on Office LAN
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Comprehensive vulnerability scan of a simulated office network (192.168.10.0/24) using OpenVAS GVM v25.04.0, identifying 12 critical vulnerabilities including an Apache RCE, SMBv1 EternalBlue exposure, and weak SSH credentials.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-[13px] text-gray-500" style={mono}>
            <span>Scope: 192.168.10.0/24</span>
            <span>Tool: OpenVAS GVM v25.04.0</span>
            <span>Scan Config: Full and Fast</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* Overview */}
        <section>
          <SectionNumber n="01" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>Executive Summary</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            OpenVAS (Greenbone Vulnerability Management) is an enterprise-grade open-source vulnerability scanner used by security teams to assess networks for known CVEs, misconfigurations, and outdated services. This scan targeted a simulated office LAN to identify exploitable weaknesses before a threat actor could.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { severity: "CRITICAL", count: "3", label: "Apache RCE, SMBv1, WordPress SQLi" },
              { severity: "HIGH", count: "2", label: "Weak SSH credentials" },
              { severity: "MEDIUM/LOW", count: "7", label: "Misconfigurations & outdated services" },
            ].map((item) => (
              <div key={item.severity} className="border border-gray-200 rounded-md p-5 text-center">
                <RiskBadge level={item.severity === "CRITICAL" ? "CRITICAL" : item.severity === "HIGH" ? "HIGH" : "MEDIUM"} />
                <div className="text-3xl font-bold mt-3 mb-1" style={display}>{item.count}</div>
                <p className="text-[12px] text-gray-500 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Methodology */}
        <section>
          <SectionNumber n="02" />
          <h2 className="text-2xl font-semibold mt-2 mb-6" style={display}>Scan Setup & Execution</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3" style={display}>Environment</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-md p-5 space-y-1 text-[14px]" style={mono}>
                <div><span className="text-gray-500">OS:</span> Kali Linux (Oracle VirtualBox)</div>
                <div><span className="text-gray-500">Tool:</span> OpenVAS / Greenbone Vulnerability Manager (GVM) v25.04.0</div>
                <div><span className="text-gray-500">Scan Target:</span> Office LAN 192.168.10.0/24</div>
                <div><span className="text-gray-500">Scan Policy:</span> "Full and Fast"</div>
                <div><span className="text-gray-500">Web UI:</span> http://127.0.0.1:9392 (Greenbone Security Assistant)</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3" style={display}>Steps Taken</h3>
              <ul className="space-y-2 text-[14px] text-gray-700" style={mono}>
                <li>→ Updated Kali and installed OpenVAS/GVM package</li>
                <li>→ Ran gvm-setup to initialise the database and certificate infrastructure</li>
                <li>→ Started GVM services with gvm-start and confirmed all daemons running</li>
                <li>→ Opened the Greenbone web UI and created a target: 192.168.10.0/24</li>
                <li>→ Created a new scan task using the "Full and Fast" policy</li>
                <li>→ Executed the scan and reviewed the generated report</li>
              </ul>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Key Findings */}
        <section>
          <SectionNumber n="03" />
          <h2 className="text-2xl font-semibold mt-2 mb-6" style={display}>Critical Vulnerabilities</h2>

          <FindingRow
            vulnerability="Unpatched Apache HTTP Server: CVE-2023-25690"
            severity="CRITICAL"
            component="192.168.10.15: Apache HTTP Server"
            description="The Apache server is running an outdated version vulnerable to HTTP Request Smuggling (CVE-2023-25690). Improper parsing of HTTP headers allows attackers to bypass security controls, poison web caches, and in some configurations achieve Remote Code Execution. Upgrade to Apache 2.4.58+ immediately."
          />
          <FindingRow
            vulnerability="SMBv1 Protocol Enabled: CVE-2017-0144 (EternalBlue)"
            severity="CRITICAL"
            component="192.168.10.33: Windows Server 2016 (unpatched)"
            description="SMBv1 is enabled and the system has not received the MS17-010 patch, making it vulnerable to the EternalBlue exploit, the same vulnerability exploited by WannaCry ransomware. A self-propagating worm could encrypt or exfiltrate all data on the network."
          />
          <FindingRow
            vulnerability="Outdated WordPress Core: CVE-2023-45124 (SQL Injection)"
            severity="CRITICAL"
            component="192.168.1.40: WordPress 5.8.2"
            description="WordPress 5.8.2 contains a critical SQL Injection flaw in its REST API. An unauthenticated attacker can extract database contents including user credentials, payment data, and admin access tokens. Upgrade to WordPress 6.4.3+ and deploy a WAF."
          />
          <FindingRow
            vulnerability="Weak SSH Passwords"
            severity="HIGH"
            component="192.168.10.20-21: OpenSSH 7.6p1"
            description="Multiple systems accept SSH logins with weak/default passwords (e.g., admin:admin, root:12345). These are trivially brute-forced, allowing an attacker to gain shell access and move laterally across the network."
          />
        </section>

        <SectionDivider />

        {/* Detailed Remediation */}
        <section>
          <SectionNumber n="04" />
          <h2 className="text-2xl font-semibold mt-2 mb-6" style={display}>Remediation Plan</h2>
          <div className="space-y-5">
            <div className="border-l-4 border-red-400 pl-5">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="font-semibold text-gray-900" style={display}>Apache: CVE-2023-25690</h4>
                <RiskBadge level="CRITICAL" />
              </div>
              <ul className="text-[14px] text-gray-600 space-y-1">
                <li>→ Upgrade Apache to version 2.4.58 or later immediately</li>
                <li>→ Disable unused modules (mod_request, mod_headers) if not needed</li>
                <li>→ Deploy a Web Application Firewall to filter malformed requests</li>
              </ul>
            </div>
            <div className="border-l-4 border-red-400 pl-5">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="font-semibold text-gray-900" style={display}>SMBv1: EternalBlue</h4>
                <RiskBadge level="CRITICAL" />
              </div>
              <ul className="text-[14px] text-gray-600 space-y-1 mb-2">
                <li>→ Apply MS17-010 security patch immediately</li>
                <li>→ Disable SMBv1 using PowerShell:</li>
              </ul>
              <div className="bg-gray-950 text-emerald-400 p-4 rounded text-[13px] font-mono">
                Disable-WindowsOptionalFeature -Online -FeatureName smb1protocol
              </div>
            </div>
            <div className="border-l-4 border-orange-400 pl-5">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="font-semibold text-gray-900" style={display}>Weak SSH Credentials</h4>
                <RiskBadge level="HIGH" />
              </div>
              <ul className="text-[14px] text-gray-600 space-y-1">
                <li>→ Enforce strong passwords: 12+ characters with numbers, symbols, mixed case</li>
                <li>→ Disable password-based SSH logins and use key-based authentication only</li>
                <li>→ Configure fail2ban to block IPs after repeated failed login attempts</li>
              </ul>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Recommendations */}
        <section>
          <SectionNumber n="05" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>Ongoing Security Practices</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Patch critical systems within 48 hours", detail: "Critical CVEs, especially RCE vulnerabilities, must be patched immediately, not at the next maintenance window." },
              { title: "Monthly vulnerability scans", detail: "Schedule recurring OpenVAS scans to catch new CVEs before attackers do. Automate remediation tracking." },
              { title: "Network segmentation", detail: "Isolate legacy systems that require SMBv1 into separate VLANs. They should not be able to communicate with production systems." },
              { title: "Staff password hygiene training", detail: "Weak credentials remain one of the most common attack vectors. Regular training and mandatory password rotation reduce this risk." },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-md p-5">
                <h4 className="font-semibold text-gray-900 mb-2 text-[15px]" style={display}>{item.title}</h4>
                <p className="text-[14px] text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* What I Learned */}
        <section>
          <SectionNumber n="06" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>What I Learned</h2>
          <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed">
            <p><strong>Enterprise scanners surface CVEs automatically.</strong> OpenVAS's NVT (Network Vulnerability Tests) database maps findings to CVEs, CVSS scores, and remediation guidance, turning a scan into a prioritised work queue for the security team.</p>
            <p><strong>Old protocols are landmines.</strong> SMBv1 is decades old and should have been disabled years ago. Legacy protocol exposure is common in real environments and disproportionately dangerous because patches exist but aren't applied.</p>
            <p><strong>Patch management is the highest-leverage security activity.</strong> Every critical finding here has a patch available. Addressing these vulnerabilities reduces breach risk dramatically — the tooling exists; the gap is process and prioritisation.</p>
            <p><strong>Scanning is only the first step.</strong> A vulnerability report has no value if it sits in a folder. The output needs to feed directly into a remediation workflow with ownership, deadlines, and verification rescans.</p>
          </div>
        </section>
      </div>

      <DocFooter pdfSrc={pdfSrc} label="View Full OpenVAS Report" />
    </div>
  );
}
