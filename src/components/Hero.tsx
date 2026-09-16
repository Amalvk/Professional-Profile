import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiMapPin } from "react-icons/fi";
import { profile } from "../data/portfolioData";
import SocialLinks from "./SocialLinks";
import CodingLottie from "./CodingLottie";

const ROLES = [
  "Frontend Developer 💻",
  "Problem-Solving Savant 🧠",
  "Proud BTech Graduate 🎓",
  "Wanderlust Explorer ✈️",
];
const FINAL_TEXT = "Available for new opportunities";
const TYPE_SPEED = 45;
const DELETE_SPEED = 25;
const HOLD_TIME = 1200;

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

function useTypewriterCycle(phrases: string[], finalText: string) {
  const [display, setDisplay] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => setTimeout(resolve, ms));

    async function run() {
      for (const phrase of phrases) {
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
      for (let i = 1; i <= finalText.length; i++) {
        if (cancelled) return;
        setDisplay(finalText.slice(0, i));
        await sleep(TYPE_SPEED);
      }
      if (!cancelled) setIsDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [phrases, finalText]);

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
  const { display } = useTypewriterCycle(ROLES, FINAL_TEXT);

  return (
    <motion.section
      id="top"
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-8 md:pt-24 lg:px-12"
    >
      <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col items-start gap-6">
          <motion.span
            variants={item}
            className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-accent-2"
          >
            {display}
            <span className="ml-0.5 inline-block w-[1px] animate-cursor-blink border-l-2 border-accent-2">
              &nbsp;
            </span>
          </motion.span>

          <motion.h1
            variants={item}
            className="font-semibold leading-tight text-onbg-heading"
          >
            <span className="block whitespace-nowrap text-lg sm:text-2xl md:text-4xl">
              {getGreeting()}, I'm {profile.name}
            </span>
            <span className="gradient-text block text-lg sm:text-xl md:text-2xl">
              {profile.title}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-2xl text-base leading-relaxed text-onbg-muted md:text-lg"
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
              className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-onbg-heading transition-colors hover:border-accent hover:text-accent"
            >
              <FiDownload className="h-4 w-4" /> Download Resume
            </a>
          </motion.div>

          <motion.div variants={item}>
            <SocialLinks className="pt-4" />
          </motion.div>
        </div>

        <motion.div variants={item} className="mx-auto w-full max-w-sm">
          <CodingLottie className="w-full" />
        </motion.div>
      </div>
    </motion.section>
  );
}
