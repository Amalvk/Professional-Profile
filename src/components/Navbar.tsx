import { useEffect, useState } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { profile } from "../data/portfolioData";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Live Projects", href: "#live-projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "bg-bg/90 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#top" className="text-lg font-semibold text-onbg-heading">
          {profile.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-onbg-muted transition-colors hover:text-onbg-heading"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            <FiDownload className="h-4 w-4" /> Resume
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="text-onbg-heading"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg px-6 pb-6 sm:px-8 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-onbg-muted transition-colors hover:text-onbg-heading"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white"
            >
              <FiDownload className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
