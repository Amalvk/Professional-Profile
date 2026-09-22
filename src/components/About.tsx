import { FiUser } from "react-icons/fi";
import { getExperienceDuration, summaryParagraphs } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  const years = getExperienceDuration();

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24 lg:px-12">
      <Reveal>
        <SectionHeading eyebrow="About me" title="Professional Summary" icon={FiUser} />
      </Reveal>

      <Reveal delay={0.1} className="flex max-w-3xl flex-col gap-4">
        {summaryParagraphs.map((paragraph, i) => (
          <p
            key={i}
            className="text-lg leading-loose text-onbg-muted"
          >
            {paragraph(years)}
          </p>
        ))}
      </Reveal>
    </section>
  );
}
