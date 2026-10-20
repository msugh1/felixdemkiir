import { ArrowUpRight, BookOpen, Cloud, Code2, GraduationCap, Network, ShieldCheck, Terminal, Users } from "lucide-react";

const experience = [
  {
    icon: Cloud,
    title: "Cloud security foundations",
    body: "Supported cloud security reviews and configuration checks within a financial-services technology team.",
  },
  {
    icon: Network,
    title: "API and identity security",
    body: "Worked with WSO2 for identity and API-security concepts, alongside Postman for API request testing and response inspection.",
  },
  {
    icon: Terminal,
    title: "Security monitoring and research",
    body: "Used Wazuh for log-based security monitoring and supported comparative research on Nigerian fintech products.",
  },
];

const programme = [
  "Google cybersecurity coursework on Coursera",
  "Six-week guided learning plan",
  "Weekly live learning sessions",
  "Peer learning and community support",
];

const mono = { fontFamily: '"JetBrains Mono", ui-monospace, monospace' };
const display = { fontFamily: '"Space Grotesk", Inter, sans-serif' };

export default function CareerHighlights() {
  return (
    <>
      <section id="experience" aria-labelledby="experience-title" className="scroll-mt-20 border-t border-white/10 bg-[#0a1124]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/55" style={mono}>
                <span className="h-px w-8 bg-emerald-400" aria-hidden="true" /> Professional experience
              </p>
              <h2 id="experience-title" className="mt-8 max-w-sm text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl" style={display}>
                Beyond the lab.
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-7 text-white/65">
                Practical exposure to monitoring, identity systems and API security in a financial-services environment.
              </p>
            </div>
            <div className="md:col-span-8">
              <article className="relative overflow-hidden border border-white/15 bg-white/[0.035] p-6 sm:p-9">
                <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-emerald-500/10 blur-3xl" aria-hidden="true" />
                <div className="relative flex flex-col items-start justify-between gap-4 sm:flex-row">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-400" style={mono}>Technology Intern · Cloud Security & Loan Teams</p>
                    <h3 className="mt-3 text-2xl font-medium text-white sm:text-3xl" style={display}>VFD Microfinance Bank</h3>
                    <p className="mt-2 text-sm text-white/55">Lagos, Nigeria · Financial services</p>
                  </div>
                  <span className="shrink-0 border border-emerald-400/30 px-3 py-2 text-xs text-emerald-300" style={mono}>Jul – Sep 2026</span>
                </div>
                <div className="relative mt-9 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
                  {experience.map(({ icon: Icon, title, body }) => (
                    <div key={title} className="group bg-[#0c1628] p-5 transition-colors duration-200 hover:bg-[#14243a] sm:p-6">
                      <Icon size={22} strokeWidth={1.6} className="text-emerald-400 transition-transform duration-200 group-hover:-translate-y-1 motion-reduce:transform-none" aria-hidden="true" />
                      <h4 className="mt-5 text-[15px] font-semibold text-white">{title}</h4>
                      <p className="mt-3 text-sm leading-6 text-white/65">{body}</p>
                    </div>
                  ))}
                </div>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {["Wazuh", "WSO2", "Postman", "IAM", "API Security", "Security Monitoring"].map((item) => (
                    <span key={item} className="border border-white/15 px-3 py-1.5 text-[11px] tracking-wide text-white/70">{item}</span>
                  ))}
                </div>
              </article>

              <article className="mt-5 flex flex-col justify-between gap-5 border border-white/10 p-6 sm:flex-row sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="grid size-11 shrink-0 place-items-center border border-emerald-400/30 text-emerald-400">
                    <Users size={21} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Founding Leader · AWS Student Builders, NUTM</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">
                      Building a student community around cloud fundamentals, peer learning and hands-on workshops.
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-xs text-white/50" style={mono}>2026 – Present</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="skillspark" aria-labelledby="skillspark-title" className="scroll-mt-20 border-t border-white/10 bg-[#070e1d]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/55" style={mono}>
                <span className="h-px w-8 bg-[#00acff]" aria-hidden="true" /> Leadership and impact
              </p>
              <h2 className="mt-7 text-4xl font-medium tracking-tight text-white md:text-5xl" style={display}>
                Building access to opportunity.
              </h2>
            </div>
            <span className="border border-white/20 px-4 py-2 text-xs uppercase tracking-wider text-white/65" style={mono}>Founder-led initiative · 2026</span>
          </div>

          <article className="grid overflow-hidden border border-[#00acff]/25 bg-[#08162b] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-between px-7 py-9 sm:px-12 sm:py-14">
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-xl bg-[#00acff] text-[#010033]"><GraduationCap size={25} strokeWidth={1.8} aria-hidden="true" /></span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#69d1ff]" style={mono}>Cybersecurity · Education · Community</span>
                </div>
                <h3 id="skillspark-title" className="mt-9 text-4xl font-medium tracking-tight text-white sm:text-5xl" style={display}>SkillSpark Bootcamp</h3>
                <p className="mt-3 text-sm font-medium text-[#69d1ff]">Founder & Programme Lead</p>
                <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/70">
                  A free digital-skills initiative preparing a six-week online Cybersecurity Bootcamp for underserved young people in Nigeria. The learning plan uses Google's cybersecurity coursework on Coursera, weekly live sessions, and peer support.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {["6-week learning plan", "Online", "Ages 16+", "Free programme"].map((item) => (
                    <span key={item} className="border border-[#00acff]/25 bg-[#00acff]/5 px-3 py-2 text-xs text-[#b6eaff]">{item}</span>
                  ))}
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="https://skillspark.tech" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 bg-[#00acff] px-5 py-3 text-sm font-semibold text-[#010033] transition-colors hover:bg-[#76d7ff]">
                  View SkillSpark <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only">(opens new tab)</span>
                </a>
                <a href="https://github.com/msugh1/skillspart-bootcamp" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 border border-white/25 px-5 py-3 text-sm text-white transition-colors hover:border-[#00acff] hover:text-[#69d1ff]">
                  Source code <Code2 size={17} aria-hidden="true" /><span className="sr-only">(opens new tab)</span>
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden border-t border-[#00acff]/20 bg-[#00acff] p-7 text-[#010033] sm:p-12 lg:border-l lg:border-t-0">
              <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full border-[54px] border-white/20" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-44 -left-28 size-80 rounded-full border-[48px] border-[#010033]/10" aria-hidden="true" />
              <div className="relative flex h-full min-h-[410px] flex-col justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={mono}>SkillSpark / Cybersecurity</p>
                  <p className="mt-9 max-w-sm text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl" style={display}>
                    Ignite your potential. Build skills for tomorrow.
                  </p>
                </div>
                <div className="mt-12 border border-[#010033]/15 bg-white/90 p-5 shadow-xl sm:p-7">
                  <div className="mb-5 flex items-center justify-between gap-3 border-b border-[#010033]/10 pb-4">
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide"><ShieldCheck size={17} aria-hidden="true" /> Learning pathway</span>
                    <span className="text-xs font-bold">6 weeks</span>
                  </div>
                  <ul className="space-y-3">
                    {programme.map((item, i) => (
                      <li key={item} className="flex items-center gap-4 text-sm font-medium">
                        <span className="text-xs font-bold text-[#007ab8]" style={mono}>0{i + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 flex items-center gap-2 border-t border-[#010033]/10 pt-4 text-xs font-semibold"><BookOpen size={16} aria-hidden="true" /> Learn · Practice · Grow</p>
                </div>
              </div>
            </div>
          </article>
          <p className="mt-5 text-sm text-white/55">The inaugural cohort is in preparation. Participant outcomes will be shared when verified.</p>
        </div>
      </section>
    </>
  );
}
