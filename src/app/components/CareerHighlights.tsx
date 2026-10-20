import { ArrowUpRight, Cloud, GraduationCap, Network, Terminal, Users } from "lucide-react";

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

      <section id="skillspark" aria-labelledby="skillspark-title" className="scroll-mt-20 border-t border-white/10 bg-[#0a1124]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="mb-10 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/55" style={mono}>
                <span className="h-px w-8 bg-emerald-400" aria-hidden="true" /> Initiative / 2026
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl" style={display}>
                Turning a skills gap into an opportunity.
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/60">
                I believe access to opportunity should not depend on where someone starts. SkillSpark is how I began putting that belief into practice.
              </p>
            </div>
          </div>

          <article className="grid overflow-hidden border border-white/15 bg-[#0c1628] transition-colors duration-300 hover:border-emerald-400/40 lg:grid-cols-[1.05fr_0.95fr] motion-reduce:transition-none">
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-400" style={mono}>
                  <GraduationCap size={18} aria-hidden="true" /> Founder-led initiative
                </span>
                <h3 id="skillspark-title" className="mt-8 text-4xl font-medium tracking-tight text-white sm:text-5xl" style={display}>
                  SkillSpark Bootcamp
                </h3>
                <p className="mt-3 text-sm text-emerald-300">Founder & Programme Lead</p>
                <p className="mt-7 max-w-xl text-[15px] leading-8 text-white/75">
                  I saw how access, cost and a lack of guidance can hold motivated young Nigerians back from technology careers. So I started SkillSpark: a free, structured cybersecurity learning initiative designed to make that first step more achievable. I lead the programme strategy, built its digital presence, designed the inaugural learning experience and am preparing a community where learners can grow together.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {["Cybersecurity education", "Programme design", "Community building", "Web development"].map((item) => (
                    <span key={item} className="border border-white/15 px-3 py-2 text-[11px] tracking-wide text-white/70">{item}</span>
                  ))}
                </div>
              </div>
              <a
                href="https://skillspark.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex min-h-11 w-fit items-center gap-3 border border-emerald-400 bg-emerald-400 px-5 py-3 text-sm font-semibold text-[#0a1124] transition-colors hover:bg-[#a7f3d0] motion-reduce:transition-none"
              >
                Explore the initiative
                <ArrowUpRight size={17} aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>

            <div className="relative overflow-hidden border-t border-white/10 bg-[#0e1b29] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage: "linear-gradient(to right, rgba(52,211,153,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(52,211,153,0.10) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="relative flex h-full min-h-[360px] flex-col justify-between">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-[0.22em] text-emerald-300" style={mono}>Project profile</span>
                  <span className="text-xs text-white/45" style={mono}>01 / 03</span>
                </div>
                <div className="my-12">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/50" style={mono}>The mission</p>
                  <p className="mt-5 max-w-md border-l-2 border-emerald-400 pl-6 text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl" style={display}>
                    Potential is everywhere. Opportunity should be too.
                  </p>
                </div>
                <div className="border border-white/15 bg-[#0a1124]/90">
                  {[
                    { no: "01", title: "Brand & platform", detail: "Defined the brand, built and launched the public website" },
                    { no: "02", title: "Programme", detail: "Designed the inaugural six-week cybersecurity pathway" },
                    { no: "03", title: "Community", detail: "Organising live sessions and peer-led learning support" },
                  ].map((item, index) => (
                    <div key={item.no} className={`flex gap-4 p-4 sm:p-5 ${index > 0 ? "border-t border-white/10" : ""}`}>
                      <span className="shrink-0 pt-0.5 text-xs text-emerald-400" style={mono}>{item.no}</span>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-xs leading-5 text-white/60">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs text-white/50" style={mono}>Status: Inaugural cohort in preparation</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
