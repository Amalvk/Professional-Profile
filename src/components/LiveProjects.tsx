import { FiExternalLink, FiGithub, FiGlobe } from "react-icons/fi";
import { liveProjects } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function LiveProjects() {
  return (
    <section id="live-projects" className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24 lg:px-12">
      <Reveal>
        <SectionHeading eyebrow="Personal work" title="Live Projects" icon={FiGlobe} />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {liveProjects.map((project, i) => (
          <Reveal
            key={project.name}
            delay={(i % 2) * 0.1}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/90 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="h-44 w-full object-cover object-top"
              />
            )}

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-heading">
                  {project.name}
                </h3>
                <span className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-text">
                  Self-deployed
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-text">
                {project.description.join(" ")}
              </p>

              <ul className="mt-4 space-y-2">
                {project.roles.slice(0, 4).map((role, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-text"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    {role}
                  </li>
                ))}
              </ul>

              <div className="mt-5 mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface-2 px-3 py-1 text-xs text-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-3 border-t border-border pt-5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-heading transition-colors hover:border-accent hover:text-accent"
                  >
                    <FiGithub className="h-4 w-4" /> Code
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
                  >
                    Live demo <FiExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
