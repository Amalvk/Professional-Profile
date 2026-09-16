import { Fragment } from "react";
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

      <div className="grid gap-6 sm:grid-cols-2">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-onbg-muted">
          Education
        </h3>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-onbg-muted">
          Certifications
        </h3>

        {Array.from({
          length: Math.max(education.length, certifications.length),
        }).map((_, i) => {
          const edu = education[i];
          const cert = certifications[i];
          return (
            <Fragment key={i}>
              {edu ? (
                <Reveal
                  key={edu.school}
                  delay={i * 0.08}
                  className="flex h-full flex-col rounded-2xl border border-border bg-surface/90 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-lg"
                >
                  <div className="flex flex-1 items-start gap-3">
                    <FiBookOpen className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div className="flex flex-1 flex-col">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h4 className="text-base font-semibold text-heading">
                          {edu.school}
                        </h4>
                        <span className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-text-muted">
                          {edu.duration}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-text-muted">{edu.degree}</p>
                      <p className="mt-1 text-sm text-text-muted">{edu.location}</p>
                      <p className="mt-auto pt-2 text-sm font-medium text-accent-2">
                        {edu.grade}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ) : (
                <div key={`edu-empty-${i}`} />
              )}

              {cert ? (
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
              ) : (
                <div key={`cert-empty-${i}`} />
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
