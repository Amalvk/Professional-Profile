import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-onbg-muted sm:px-8 md:flex-row lg:px-12">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React, Vite & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
