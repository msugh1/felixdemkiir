import pdfSrc from "../../../imports/PROJECT__PERFORM_SCAN_ON_DAM_VULNERABILITY_WEB_APPLICATION_AND_RECOMMEND_______________________________________________REMEDIATION.pdf";
import { DocNav, DocFooter, SectionDivider, SectionNumber, RiskBadge, FindingRow, display, body, mono } from "../../components/DocShared";

export default function DVWADocs() {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={body}>
      <DocNav />

      {/* Hero */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["Web Security", "OWASP ZAP", "DVWA", "Manual Testing"].map((t) => (
              <span key={t} className="text-[11px] tracking-[0.15em] uppercase text-gray-500 border border-gray-300 px-2.5 py-1 rounded-sm" style={mono}>{t}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tight mb-6" style={display}>
            Web App Security Scan: DVWA with OWASP ZAP
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Full vulnerability assessment of the Damn Vulnerable Web Application (DVWA) using OWASP ZAP, combining automated scanning with manual payload testing to surface SQL Injection, Command Injection, XSS, and security misconfiguration issues.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-[13px] text-gray-500" style={mono}>
            <span>Target: DVWA (localhost)</span>
            <span>Tool: OWASP ZAP</span>
            <span>Security Level: Low</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* Overview */}
        <section>
          <SectionNumber n="01" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>Project Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            DVWA (Damn Vulnerable Web Application) is a deliberately insecure PHP/MySQL web application designed for security practitioners to practice common attack techniques in a legal, controlled environment. This project uses OWASP ZAP, a widely-used open-source web application security scanner, to discover, document, and recommend remediation for multiple vulnerability classes.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Environment", value: "XAMPP (Apache + MySQL) on localhost" },
              { label: "Scanner", value: "OWASP ZAP: Manual Explore + Active Scan" },
              { label: "Target", value: "http://localhost/dvwa/ (Security Level: Low)" },
              { label: "Approach", value: "Automated scan + manual payload injection" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 border border-gray-200 rounded-md p-4 text-[14px]" style={mono}>
                <span className="text-gray-500">{item.label}:</span> <span className="text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Objective */}
        <section>
          <SectionNumber n="02" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>Objective</h2>
          <p className="text-gray-700 leading-relaxed">
            Scan DVWA using OWASP ZAP in both automated and manual modes to identify web application vulnerabilities, document their severity and affected components, and produce a remediation strategy for each finding.
          </p>
        </section>

        <SectionDivider />

        {/* Methodology */}
        <section>
          <SectionNumber n="03" />
          <h2 className="text-2xl font-semibold mt-2 mb-8" style={display}>Testing Procedure</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3" style={display}>1. Environment Setup</h3>
              <ul className="space-y-1 text-[14px] text-gray-700" style={mono}>
                <li>→ Started XAMPP, confirmed Apache and MySQL running (green indicators)</li>
                <li>→ Verified DVWA accessible at http://localhost/dvwa/</li>
                <li>→ Logged in with default credentials (admin / password)</li>
                <li>→ Set DVWA Security Level to <strong>Low</strong> for accurate scan coverage</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3" style={display}>2. ZAP Proxy Configuration</h3>
              <p className="text-gray-700 text-[14px] leading-relaxed mb-2">Configured browser to route all traffic through ZAP's local proxy, so every HTTP request/response is intercepted and logged.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-md p-4 text-[13px]" style={mono}>
                HTTP Proxy: 127.0.0.1 | Port: 8080 (ZAP Local Proxy)
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3" style={display}>3. Spider + Active Scan</h3>
              <ul className="space-y-1 text-[14px] text-gray-700" style={mono}>
                <li>→ Right-clicked localhost tree in ZAP → Attack → Spider Site (discovers all pages/parameters)</li>
                <li>→ Right-clicked again → Attack → Active Scan (automated payload injection)</li>
                <li>→ Reviewed Alerts tab for auto-detected issues</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3" style={display}>4. Manual Testing</h3>
              <p className="text-gray-700 text-[14px] leading-relaxed mb-3">Used ZAP's manual tools alongside direct payload injection to test each vulnerability module:</p>
              <div className="space-y-3">
                <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                  <div className="text-[12px] font-bold tracking-widest uppercase text-gray-500 mb-2" style={mono}>SQL Injection</div>
                  <code className="text-[13px] text-gray-800" style={mono}>{"' OR 1=1--  |  1' OR '1'='1"}</code>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                  <div className="text-[12px] font-bold tracking-widest uppercase text-gray-500 mb-2" style={mono}>Reflected XSS</div>
                  <code className="text-[13px] text-gray-800" style={mono}>{"<script>alert('XSS')</script>"}</code>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                  <div className="text-[12px] font-bold tracking-widest uppercase text-gray-500 mb-2" style={mono}>Command Injection</div>
                  <code className="text-[13px] text-gray-800" style={mono}>{"127.0.0.1; cat /etc/passwd  |  ; ls"}</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Findings */}
        <section>
          <SectionNumber n="04" />
          <h2 className="text-2xl font-semibold mt-2 mb-6" style={display}>Vulnerability Report</h2>

          <FindingRow
            vulnerability="SQL Injection"
            severity="CRITICAL"
            component="vulnerabilities/sqli/ (parameter: id)"
            description="The user ID field passes input directly into SQL queries without sanitisation. Payload '1' OR '1'='1' returns all database records. An attacker can extract credentials, bypass authentication, or enumerate the entire database. CWE-89, WASC-19."
          />
          <FindingRow
            vulnerability="Command Injection"
            severity="CRITICAL"
            component="vulnerabilities/exec/ (parameter: ip)"
            description="User input is passed directly to a system shell call. Payload '127.0.0.1; cat /etc/passwd' returns system file contents in the browser. Full system compromise possible. CWE-77, WASC-31."
          />
          <FindingRow
            vulnerability="Reflected XSS"
            severity="HIGH"
            component="vulnerabilities/xss_r/ (parameter: name)"
            description="Unsanitised user input is reflected directly in the response, rendering arbitrary JavaScript. Attackers can steal session cookies, redirect users, or perform actions on behalf of the victim. CWE-79, WASC-8."
          />
          <FindingRow
            vulnerability="Directory Listing Enabled"
            severity="HIGH"
            component="Apache Server: /dvwa/hackable/uploads/"
            description="The uploads directory is publicly browsable, exposing all uploaded files. An attacker can enumerate and download files including any malicious uploads they've placed there."
          />
          <FindingRow
            vulnerability="Missing Security Headers"
            severity="MEDIUM"
            component="Web Server (Apache)"
            description="The following headers are absent: X-Frame-Options (clickjacking risk), X-Content-Type-Options (MIME sniffing), Content-Security-Policy (XSS risk), Strict-Transport-Security. Each omission is a distinct attack surface."
          />
          <FindingRow
            vulnerability="Default Credentials Active"
            severity="MEDIUM"
            component="Authentication System: DVWA login"
            description="The application accepts admin/password without any lockout or complexity requirement. Any attacker who knows DVWA defaults gains immediate authenticated access."
          />
          <FindingRow
            vulnerability="Verbose Error Messages"
            severity="LOW"
            component="includes/dvwaPage.inc.php"
            description="Submitting invalid data triggers full PHP stack traces including mysqli_sql_exception details, database structure, and server paths — useful reconnaissance data for an attacker."
          />
        </section>

        <SectionDivider />

        {/* Remediation */}
        <section>
          <SectionNumber n="05" />
          <h2 className="text-2xl font-semibold mt-2 mb-6" style={display}>Remediation Strategy</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-6 font-semibold text-gray-900" style={mono}>Vulnerability</th>
                  <th className="text-left py-3 font-semibold text-gray-900" style={mono}>Fix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { vuln: "SQL Injection", fix: "Use parameterised queries / prepared statements. Never concatenate user input into SQL strings." },
                  { vuln: "Command Injection", fix: "Avoid passing user input to exec() or system(). Use safe APIs. Whitelist allowed inputs strictly." },
                  { vuln: "Reflected XSS", fix: "Escape and encode all output. Implement a Content Security Policy. Use frameworks with built-in XSS protection." },
                  { vuln: "Directory Listing", fix: "Add 'Options -Indexes' to the Apache config or .htaccess for the uploads directory." },
                  { vuln: "Missing Headers", fix: "Add X-Frame-Options: DENY, X-Content-Type-Options: nosniff, and Content-Security-Policy to Apache config." },
                  { vuln: "Default Credentials", fix: "Change all defaults immediately post-install. Enforce password complexity and implement account lockout." },
                  { vuln: "Verbose Errors", fix: "Set display_errors = Off in php.ini. Log errors to a secure file. Show only generic messages to users." },
                ].map((row) => (
                  <tr key={row.vuln}>
                    <td className="py-3 pr-6 text-gray-900 font-medium align-top">{row.vuln}</td>
                    <td className="py-3 text-gray-600">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <SectionDivider />

        {/* What I Learned */}
        <section>
          <SectionNumber n="06" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>What I Learned</h2>
          <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed">
            <p><strong>Manual testing complements automated scanners.</strong> ZAP's active scan catches surface-level issues, but manually injecting payloads and watching the application's response reveals exactly how and why a vulnerability exists, not just that it does.</p>
            <p><strong>Input validation is the root of most web vulnerabilities.</strong> Every critical finding here — SQLi, XSS, Command Injection — exists because user-supplied data entered a trusted execution context without being validated or sanitised.</p>
            <p><strong>Server configuration is part of security posture.</strong> Missing headers and enabled directory listing are pure configuration issues with no code changes required, yet they represent real, exploitable attack surface.</p>
            <p><strong>Error messages are an asset for attackers.</strong> Verbose PHP exceptions that reach the browser tell an attacker which database driver is running, what query failed, and the file path of the affected file. Turn them off in production.</p>
          </div>
        </section>
      </div>

      <DocFooter pdfSrc={pdfSrc} label="View Full Scan Report" />
    </div>
  );
}
