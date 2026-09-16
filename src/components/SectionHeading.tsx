import type { IconType } from "react-icons";

export default function SectionHeading({
  eyebrow,
  title,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  icon?: IconType;
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      {Icon && (
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/5 text-onbg-accent backdrop-blur-sm">
          <Icon className="h-5 w-5" />
        </span>
      )}
      <div>
        <h2 className="text-3xl font-semibold text-onbg-heading md:text-4xl">
          {title}
        </h2>
        <p className="mt-1 text-sm font-medium uppercase tracking-widest text-onbg-accent">
          {eyebrow}
        </p>
      </div>
    </div>
  );
}
