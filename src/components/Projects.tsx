import { FiExternalLink, FiFolder } from "react-icons/fi";
import { projects, type Project } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/90 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg">
      {project.image && (
        <img
          src={project.image}
          alt={project.name}
          className="h-44 w-full object-cover object-top"
        />
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          {project.logo && (
            <img
              src={project.logo}
              alt={project.name}
              className="h-11 w-11 rounded-lg border border-border bg-white object-contain p-1"
            />
          )}
          <h3 className="flex items-center gap-1.5 text-lg font-semibold text-heading">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent"
              >
                {project.name}
                <FiExternalLink className="h-4 w-4" />
              </a>
            ) : (
              project.name
            )}
          </h3>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-text">
          {project.description.join(" ")}
        </p>

        <ul className="scroll-thin mt-4 h-36 space-y-2 overflow-y-auto scroll-smooth pr-2">
          {project.roles.map((role, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm leading-relaxed text-text"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
              {role}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface-2 px-3 py-1 text-xs text-text"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24 lg:px-12">
      <Reveal>
        <SectionHeading eyebrow="Selected work" title="Projects" icon={FiFolder} />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
