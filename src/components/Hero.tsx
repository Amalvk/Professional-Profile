import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiMapPin } from "react-icons/fi";
import { profile } from "../data/portfolioData";
import SocialLinks from "./SocialLinks";
import CodingLottie from "./CodingLottie";

const ROLES = [
  "Problem-Solving Savant",
  "Proud BTech Graduate",
  "Wanderlust Explorer",
  "Frontend Developer",
];
const TYPE_SPEED = 45;
const DELETE_SPEED = 25;
const HOLD_TIME = 1200;

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < breakpoint
  );

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handleChange = () => setIsMobile(query.matches);
    handleChange();
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isMobile;
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

function useTypewriterCycle(phrases: string[]) {
  const [display, setDisplay] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => setTimeout(resolve, ms));

    async function run() {
      for (const phrase of phrases.slice(0, -1)) {
        for (let i = 1; i <= phrase.length; i++) {
          if (cancelled) return;
          setDisplay(phrase.slice(0, i));
          await sleep(TYPE_SPEED);
        }
        if (cancelled) return;
        await sleep(HOLD_TIME);
        for (let i = phrase.length; i >= 0; i--) {
          if (cancelled) return;
          setDisplay(phrase.slice(0, i));
          await sleep(DELETE_SPEED);
        }
      }
      const lastPhrase = phrases[phrases.length - 1];
      for (let i = 1; i <= lastPhrase.length; i++) {
        if (cancelled) return;
        setDisplay(lastPhrase.slice(0, i));
        await sleep(TYPE_SPEED);
      }
      if (!cancelled) setIsDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [phrases]);

  return { display, isDone };
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const { display } = useTypewriterCycle(ROLES);
  const isMobile = useIsMobile();

  return (
    <motion.section
      id="top"
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-8 md:pt-24 lg:px-12"
    >
      <div className="grid items-center gap-10 md:grid-cols-[2.3fr_1fr]">
        <div className="flex flex-col items-start gap-6">
          <motion.h1
            variants={item}
            className="font-semibold leading-tight text-onbg-heading"
          >
            <span className="block whitespace-nowrap text-[22px] sm:text-2xl md:text-[28px]">
              {getGreeting()}, I'm {profile.name}
            </span>
            <span className="gradient-text block text-lg sm:text-xl md:text-2xl">
              {display}
              <span className="ml-0.5 inline-block w-[1px] animate-cursor-blink border-l-2 border-accent-2">
                &nbsp;
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-none text-base leading-relaxed text-onbg-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="flex items-center gap-2 text-sm text-onbg-muted"
          >
            <FiMapPin className="h-4 w-4" />
            {profile.location}
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              Get in touch <FiArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-onbg-heading transition-colors hover:border-onbg-accent hover:text-onbg-accent"
            >
              <FiDownload className="h-4 w-4" /> Download Resume
            </a>
          </motion.div>

          <motion.div variants={item}>
            <SocialLinks className="pt-4" />
          </motion.div>
        </div>

        {!isMobile && (
          <motion.div variants={item} className="mx-auto w-full max-w-sm">
            <CodingLottie className="w-full" />
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
