import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { socialLinks } from "../data/portfolioData";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  instagram: FiInstagram,
  email: FiMail,
};

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = ICONS[link.icon];
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.icon === "email" ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={link.name}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Icon className="h-4.5 w-4.5" />
          </a>
        );
      })}
    </div>
  );
}
