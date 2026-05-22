import pdfSrc from "../../../imports/Wireshark_Network_Traffic_Analysis_Report.pdf";
import { DocNav, DocFooter, SectionDivider, SectionNumber, RiskBadge, display, body, mono } from "../../components/DocShared";

export default function WiresharkDocs() {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={body}>
      <DocNav />

      {/* Hero */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["Network Analysis", "Wireshark", "TCP/IP", "Traffic Forensics"].map((t) => (
              <span key={t} className="text-[11px] tracking-[0.15em] uppercase text-gray-500 border border-gray-300 px-2.5 py-1 rounded-sm" style={mono}>{t}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tight mb-6" style={display}>
            Wireshark Network Traffic Analysis
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Hands-on network traffic capture and analysis using Wireshark, applying display filters, examining packet-level details across HTTP, DNS, and TCP, and identifying unencrypted data exposure and anomalous traffic patterns.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-[13px] text-gray-500" style={mono}>
            <span>Tool: Wireshark</span>
            <span>Protocols: HTTP, DNS, TCP/IP</span>
            <span>Focus: Traffic anomaly detection</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* Overview */}
        <section>
          <SectionNumber n="01" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>Project Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wireshark is the most widely-used network protocol analyser in the world. It captures packets traveling through a network interface in real time and allows deep inspection of every frame, from Ethernet headers down to application-layer payloads. This project demonstrates core competency in traffic capture, filter-based analysis, and security-relevant packet interpretation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Capturing and reading your own network traffic is fundamental to understanding what data is exposed in transit and to recognising what suspicious traffic looks like when you encounter it on a monitored network.
          </p>
        </section>

        <SectionDivider />

        {/* Objective */}
        <section>
          <SectionNumber n="02" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>Objective</h2>
          <ul className="space-y-2 text-gray-700 text-[15px]">
            {[
              "Capture live network traffic across multiple protocol types",
              "Apply targeted display filters to isolate relevant packets",
              "Examine individual packet contents: headers, payloads, response codes",
              "Identify potential security concerns in the captured traffic",
              "Document findings and recommend mitigations",
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
          <h2 className="text-2xl font-semibold mt-2 mb-8" style={display}>Analysis Steps</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3" style={display}>Step 1: Setup & Interface Selection</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Wireshark was installed and launched. The active network interface (Wi-Fi / Ethernet) was selected as the capture interface — this is the physical or virtual NIC whose traffic will be recorded.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3" style={display}>Step 2: Traffic Generation & Capture</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                With capture running, normal network activities were performed to generate a representative traffic sample: browsing HTTP/HTTPS pages, running a DNS lookup, and accessing a shared resource. The capture was stopped once sufficient data was collected.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-md p-4 text-[14px] text-amber-800">
                Activities performed during capture: web browsing, email access, shared resource access, simulating typical workstation traffic.
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3" style={display}>Step 3: Display Filters Applied</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">Wireshark's display filter bar was used to isolate specific traffic types:</p>
              <div className="space-y-2">
                {[
                  { filter: "http", desc: "Show all HTTP traffic, reveals unencrypted web requests" },
                  { filter: "dns", desc: "Show DNS queries, reveals which domains are being resolved" },
                  { filter: "ip.addr == 192.168.1.1", desc: "Isolate traffic involving a specific IP address" },
                  { filter: "tcp.port == 80", desc: "Focus on port 80, HTTP traffic only" },
                  { filter: "tcp.flags.syn == 1", desc: "Show TCP SYN packets, useful for detecting port scans" },
                ].map((item) => (
                  <div key={item.filter} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-md p-3 text-[13px]">
                    <code className="text-emerald-700 font-bold shrink-0" style={mono}>{item.filter}</code>
                    <span className="text-gray-600">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3" style={display}>Step 4: Packet Detail Inspection</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                Individual packets were expanded in the Packet Details pane to extract:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Source & destination IP addresses",
                  "HTTP request method, path, and Host header",
                  "DNS query name and response A records",
                  "TCP sequence/acknowledgement numbers",
                  "Response status codes (200, 301, 404, etc.)",
                  "Cookie values in HTTP request headers",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[14px] text-gray-700">
                    <span className="text-emerald-500 mt-0.5 shrink-0">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-gray-50 border border-gray-200 rounded-md p-4 text-[13px]" style={mono}>
                <div className="text-gray-500 mb-2">Example: Frame 6 (HTTP GET):</div>
                <div className="space-y-0.5 text-gray-700">
                  <div>Hypertext Transfer Protocol: GET /index.html HTTP/1.1</div>
                  <div>Host: example.com</div>
                  <div>User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)</div>
                  <div>Transmission Control Protocol: Source Port 54321 → Dest Port 80</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Findings */}
        <section>
          <SectionNumber n="04" />
          <h2 className="text-2xl font-semibold mt-2 mb-6" style={display}>Issues Identified</h2>

          <div className="space-y-4">
            <div className="border border-orange-200 bg-orange-50 rounded-md p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-semibold text-gray-900" style={display}>Unencrypted HTTP Traffic</h3>
                <RiskBadge level="HIGH" />
              </div>
              <p className="text-[14px] text-gray-700 leading-relaxed">
                Multiple HTTP (plaintext) requests were visible in the capture, including request headers, host names, paths, and in some cases cookie values. Any network observer with Wireshark can read this data verbatim. HTTPS encrypts the payload and headers, making this analysis impossible for an attacker on the same network.
              </p>
            </div>

            <div className="border border-yellow-200 bg-yellow-50 rounded-md p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-semibold text-gray-900" style={display}>Communication with Unexpected IP Addresses</h3>
                <RiskBadge level="MEDIUM" />
              </div>
              <p className="text-[14px] text-gray-700 leading-relaxed">
                Several packets were destined for IP addresses not associated with any intentional user activity. This can indicate background telemetry, third-party analytics, or in a threat investigation, command-and-control beaconing. These IPs should be investigated against threat intelligence feeds.
              </p>
            </div>

            <div className="border border-yellow-200 bg-yellow-50 rounded-md p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-semibold text-gray-900" style={display}>High-Volume Repetitive Traffic</h3>
                <RiskBadge level="MEDIUM" />
              </div>
              <p className="text-[14px] text-gray-700 leading-relaxed">
                A pattern of repeated SYN packets to multiple destination ports was observed — a classic indicator of port scanning activity. In a production environment this would trigger an IDS/IPS alert and warrant investigation of the source IP.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Recommendations */}
        <section>
          <SectionNumber n="05" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>Security Recommendations</h2>
          <div className="space-y-4">
            {[
              {
                title: "Enforce HTTPS everywhere",
                detail: "All web services must use TLS. HTTP plaintext exposes credentials, session tokens, and sensitive data to anyone on the same network segment. Use HSTS headers to prevent downgrade attacks.",
              },
              {
                title: "Monitor outbound connections to unknown IPs",
                detail: "Maintain an allowlist of expected destinations. Connections to unlisted external IPs should generate alerts, especially repeated low-volume connections that could indicate C2 beaconing.",
              },
              {
                title: "Deploy an IDS/IPS for anomaly detection",
                detail: "Tools like Snort or Suricata can automatically flag SYN flood patterns, port scans, and known malicious signatures in real time, without requiring manual Wireshark review.",
              },
              {
                title: "Regular traffic baseline analysis",
                detail: "Capture and baseline normal network traffic patterns. Deviations from baseline — unusual volumes, new destinations, unexpected protocols — are the early indicators of compromise.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-md p-5">
                <h4 className="font-semibold text-gray-900 mb-2" style={display}>{item.title}</h4>
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
            <p><strong>Packets tell the full story.</strong> Wireshark makes visible what every application on your machine is actually doing on the wire, not what it claims to be doing. Reading a raw HTTP packet for the first time makes the value of encryption viscerally obvious.</p>
            <p><strong>Display filters are a superpower.</strong> A raw capture can contain millions of packets. The ability to filter by IP, protocol, port, flag, or keyword is what makes Wireshark usable as an investigative tool rather than just a data firehose.</p>
            <p><strong>Anomaly detection requires a baseline.</strong> You can only identify "unusual" traffic if you know what "normal" looks like. This lab reinforced the importance of baselining network behaviour before an incident happens.</p>
            <p><strong>HTTP is a liability.</strong> Seeing my own credentials and session tokens readable in plaintext in a local capture was an effective demonstration of why every application should enforce HTTPS, not just login pages.</p>
          </div>
        </section>
      </div>

      <DocFooter pdfSrc={pdfSrc} label="View Full Analysis Report" />
    </div>
  );
}
