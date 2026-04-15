"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Container } from "@/components/container";

const EXPERIENCE_ITEMS = [
  {
    role: "Software Engineer",
    company: "General Motors",
    location: "Markham, ON, Canada",
    period: "2023 - Present",
    highlights: [
      "Core contributor on GM’s Android Platform Connectivity team, responsible for building out Android services, SDKs and APIs used across multiple products and device configurations.",
      "Implemented OpenTelemetry framework into services, enabling deep visibility into system performance and stability.",
      "Authored a comprehensive design document outlining Java API methods and defining key metrics, logs, events, and traces to improve system monitoring and debugging.",
      "Increased unit test coverage from 0% to 90%, dramatically improving release confidence and regression detection.",
      "Built an Android app in Java to automate multi-device connect/disconnect events for CarPlay and Android Auto validation, reducing total dependency on heavy automated test frameworks, thus cutting hardware costs by ~$2,500 per developer.",
      "Built a full-stack internal analytics platform (React, Flask, MongoDB) to visualize performance and regression test results and metrics at scale.",
      "Triaged and resolved high severity production defects, improving platform stability and reducing recurring incidents."
    ],
  },
  {
    role: "Computer Science Teaching Assistant",
    company: "University of Toronto",
    location: "Toronto, ON, Canada",
    period: "2021 - 2022",
    highlights: [
      "Delivered weekly tutorials on software engineering fundamentals, including design patterns, agile methodologies, requirements elicitation, estimation, and task prioritization. ",
      "Explained technical topics such as RESTful APIs, microservices, MVC, MVVM in a clear manner to help students build practical and industry relevant skills.",
      "Led hands-on sessions with Docker, dependency injection (Dagger), Neo4j, MongoDB, PostgreSQL, helping students gain real‑world, industry‑relevant experience. ",
      "Mentored students on debugging, performance optimization, and clean Java code practices."
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Aviat Networks",
    location: "Markham, ON, Canada",
    period: "2020 - 2021",
    highlights: [
      "Developed performance critical C++ networking software supporting private LTE infrastructure. ",
      "Worked on a team of 5 to build a new LTE radio controller from scratch using C++ and Linux. ",
      "Built diagnostic tooling that reduced manual hardware setup time and improved engineering productivity."
    ],
  },
];

export function WorkExperience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState(1);
  const activeExperience = EXPERIENCE_ITEMS[activeIndex];

  useEffect(() => {
    const target = sectionRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  function handleExperienceChange(nextIndex: number) {
    if (nextIndex === activeIndex) {
      return;
    }

    setTransitionDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveIndex(nextIndex);
  }

  return (
    <section
      id="cards"
      ref={sectionRef}
      className="relative flex min-h-[calc(100svh-4rem)] items-center py-10 sm:py-16"
    >
      <Container
        className={`relative w-full max-w-7xl transition-all duration-700 ease-out ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <div className="grid gap-7 sm:gap-9">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Career Journey</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Work Experience
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
              Roles, systems, and outcomes across platform engineering, education, and telecom software.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-10">
            <div className="grid gap-1 border-l border-white/10 pl-3 sm:grid-cols-3 sm:gap-2 sm:border-l-0 sm:pl-0 lg:grid-cols-1 lg:border-l lg:pl-4">
              {EXPERIENCE_ITEMS.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={`${item.role}-${item.period}`}
                    type="button"
                    onClick={() => handleExperienceChange(index)}
                    className={`min-h-[5.5rem] w-full border-l-2 px-3 py-3 text-left transition duration-200 active:scale-[0.98] ${
                      isActive
                        ? "border-violet-400 text-white"
                        : "border-transparent text-text-secondary hover:border-white/30 hover:text-white"
                    }`}
                    aria-pressed={isActive}
                  >
                    <p className="text-[10px] uppercase tracking-[0.16em] text-text-muted">{item.period}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{item.company}</p>
                    <p className="mt-1 text-xs text-text-secondary">{item.role}</p>
                  </button>
                );
              })}
            </div>

            <article className="flex min-h-[29rem] flex-col border-t border-white/10 pt-5 sm:min-h-[31rem] sm:pt-6 lg:min-h-[33rem] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1">
              <AnimatePresence mode="wait" custom={transitionDirection}>
                <motion.div
                  key={activeIndex}
                  custom={transitionDirection}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={{
                    enter: (direction: number) => ({
                      opacity: 0,
                      x: direction > 0 ? 28 : -28,
                      filter: "blur(3px)",
                    }),
                    center: {
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                    },
                    exit: (direction: number) => ({
                      opacity: 0,
                      x: direction > 0 ? -28 : 28,
                      filter: "blur(3px)",
                    }),
                  }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="will-change-transform"
                >
                  <div className="mb-3 h-px overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-transparent via-violet-400 to-transparent"
                      initial={{ opacity: 0, scaleX: 0.35 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0.35 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>

                  <div className="grid min-h-[7.5rem] gap-4 border-b border-white/10 pb-4 sm:grid-cols-[1fr_auto] sm:items-start">
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl leading-tight text-white sm:text-3xl">
                        {activeExperience.role}
                      </h3>
                      <p className="mt-2 bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-base font-medium text-transparent">
                        {activeExperience.company}
                      </p>
                      <p className="mt-1 text-sm text-text-muted">{activeExperience.location}</p>
                    </div>
                    <p className="inline-flex h-fit w-fit rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-text-secondary">
                      {activeExperience.period}
                    </p>
                  </div>

                  <motion.ul
                    className="mt-4 h-[34dvh] space-y-3 overflow-y-auto pr-2 text-sm leading-relaxed text-text-secondary sm:h-[36dvh] sm:text-[15px] lg:h-[38dvh]"
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.055,
                          delayChildren: 0.08,
                        },
                      },
                    }}
                  >
                    {activeExperience.highlights.map((point) => (
                      <motion.li
                        key={point}
                        className="grid grid-cols-[auto_1fr] gap-3"
                        variants={{
                          hidden: {
                            opacity: 0,
                            x: transitionDirection > 0 ? 10 : -10,
                          },
                          show: {
                            opacity: 1,
                            x: 0,
                          },
                        }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <span className="mt-[0.5rem] h-1.5 w-1.5 rounded-full bg-violet-400" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </AnimatePresence>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
