import { Link } from "react-router";
import { ArrowLeft, ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";

export const display = { fontFamily: '"Space Grotesk", Inter, ui-sans-serif, system-ui' };
export const body = { fontFamily: 'Inter, ui-sans-serif, system-ui' };
export const mono = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' };

export function DocNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-[13px]"
          style={mono}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to portfolio
        </Link>
        <Link to="/" className="text-[14px] font-semibold text-gray-900 tracking-tight" style={display}>
          Felix Demkiir
        </Link>
        <button className="md:hidden p-1" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
}

type Severity = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
const badgeStyles: Record<Severity, string> = {
  CRITICAL: "bg-red-50 text-red-700 border border-red-200",
  HIGH: "bg-orange-50 text-orange-700 border border-orange-200",
  MEDIUM: "bg-yellow-50 text-yellow-800 border border-yellow-200",
  LOW: "bg-gray-100 text-gray-600 border border-gray-200",
};

export function RiskBadge({ level }: { level: Severity }) {
  return (
    <span className={`inline-block text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm ${badgeStyles[level]}`} style={mono}>
      {level}
    </span>
  );
}

export function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-gray-950 text-emerald-400 p-5 rounded-md text-[13px] leading-relaxed overflow-x-auto my-4" style={mono}>
      <code>{children}</code>
    </pre>
  );
}

export function SectionDivider() {
  return <div className="border-t border-gray-100 my-12" />;
}

export function SectionNumber({ n }: { n: string }) {
  return (
    <span className="text-[11px] text-emerald-600 font-bold tracking-[0.2em] uppercase" style={mono}>
      {n}
    </span>
  );
}

export function DocFooter({ pdfSrc, label = "View Full Report PDF" }: { pdfSrc: string; label?: string }) {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-20">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
          style={mono}
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to projects
        </Link>
        <a
          href={pdfSrc}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white px-5 py-2.5 text-[13px] tracking-wide transition-colors"
          style={body}
        >
          {label} <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </footer>
  );
}

export function FindingRow({
  vulnerability,
  severity,
  component,
  description,
}: {
  vulnerability: string;
  severity: Severity;
  component: string;
  description: string;
}) {
  return (
    <div className="border border-gray-200 rounded-md p-5 mb-4">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <span className="font-semibold text-gray-900 text-[15px]" style={display}>{vulnerability}</span>
        <RiskBadge level={severity} />
      </div>
      <p className="text-[13px] text-gray-500 mb-1" style={mono}>{component}</p>
      <p className="text-[14px] text-gray-700 leading-relaxed" style={body}>{description}</p>
    </div>
  );
}
