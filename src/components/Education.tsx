import { FiAward, FiBookOpen } from "react-icons/fi";
import { education, certifications } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24 lg:px-12">
      <Reveal>
        <SectionHeading eyebrow="Background" title="Education & Certifications" icon={FiBookOpen} />
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
        <div className="flex flex-col gap-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-onbg-muted">
            Education
          </h3>
          {education.map((edu, i) => (
            <Reveal
              key={edu.school}
              delay={i * 0.08}
              className="flex h-full flex-col rounded-2xl border border-border bg-surface/90 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex flex-1 items-start gap-3">
                <FiBookOpen className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div className="flex flex-1 flex-col">
                  <h4 className="text-base font-semibold text-heading">
                    {edu.school}
                  </h4>
                  <p className="mt-1 text-sm text-heading">{edu.degree}</p>
                  <p className="mt-1 text-sm text-text-muted">{edu.location}</p>
                  <p className="mt-2 text-sm font-medium text-accent-2">
                    Score : {edu.grade}
                  </p>
                  <span className="mt-2 w-fit rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-text-muted">
                    {edu.duration}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-onbg-muted">
            Certifications
          </h3>
          {certifications.map((cert, i) => (
            <Reveal
              key={cert.title}
              delay={i * 0.08}
              className="flex h-full flex-col rounded-2xl border border-border bg-surface/90 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-start gap-3">
                <FiAward className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div className="flex flex-1 flex-col">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base font-semibold text-heading">
                      {cert.title}
                    </h4>
                    <span className="text-xs text-text-muted">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted">{cert.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {cert.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
