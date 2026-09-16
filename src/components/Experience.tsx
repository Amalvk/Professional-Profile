import { FiBriefcase, FiExternalLink } from "react-icons/fi";
import { experiences } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24 lg:px-12">
      <Reveal>
        <SectionHeading eyebrow="Career" title="Work Experience" icon={FiBriefcase} />
      </Reveal>

      <div className="relative">
        <span className="absolute left-[7px] top-0 bottom-0 w-0.5 -translate-x-1/2 bg-white/25" />

        {experiences.map((exp, i) => (
          <Reveal
            key={exp.role + exp.company + exp.date}
            delay={i * 0.06}
            className="flex gap-4 pb-8 last:pb-0 sm:gap-6"
          >
            <div className="flex w-3.5 shrink-0 flex-col items-center">
              <span className="relative z-10 mt-6 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-accent-2 bg-onbg-heading" />
            </div>

            <div className="relative z-0 min-w-0 flex-1 rounded-2xl border border-border bg-surface/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:z-10 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-xl">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className={`h-10 w-10 rounded-lg border border-border object-contain p-1 ${exp.logoBg ?? "bg-white"}`}
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-heading">
                      {exp.role}
                      {exp.empId && (
                        <span className="ml-2 font-normal text-text-muted/70">
                          {exp.empId}
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-text-muted">
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 hover:text-accent"
                        >
                          {exp.companyFullName || exp.company}
                          <FiExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        exp.companyFullName || exp.company
                      )}
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-text-muted">
                  {exp.date}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
