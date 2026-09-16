import { AnimatePresence, motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border bg-surface text-text-muted transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? <FiSun className="h-4.5 w-4.5" /> : <FiMoon className="h-4.5 w-4.5" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
