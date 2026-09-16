import { FiTool } from "react-icons/fi";
import { skillGroups } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24 lg:px-12">
      <Reveal>
        <SectionHeading eyebrow="What I know" title="Skills & Tools" icon={FiTool} />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.08}
            className="rounded-2xl border border-border bg-surface/90 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-lg"
          >
            <h3 className="mb-4 text-lg font-semibold text-heading">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-sm text-text"
                >
                  {skill.icon && (
                    <skill.icon
                      className={skill.color ? "" : "text-heading"}
                      style={skill.color ? { color: skill.color } : undefined}
                      size={15}
                    />
                  )}
                  {skill.name}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
