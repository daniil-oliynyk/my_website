"use client";

import { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    const target = sectionRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cards"
      ref={sectionRef}
      className="relative flex min-h-[calc(100svh-4rem)] items-center py-12 sm:py-16"
    >
      <Container className="relative w-full max-w-6xl">
        <h2 className="text-center font-display text-3xl font-semibold text-white sm:text-4xl">
          Work Experience
        </h2>

        <div className="relative mt-10 pl-6 sm:pl-10">
          <div className="pointer-events-none absolute bottom-2 left-0 top-2 w-px bg-gradient-to-b from-violet-600 via-violet-400 to-violet-600" />

          <div className="space-y-5 sm:space-y-6">
            {EXPERIENCE_ITEMS.map((item, index) => (
              <article
                key={`${item.role}-${item.period}`}
                className="relative rounded-xl border border-white/10 bg-[#111416]/80 px-5 py-4 shadow-card backdrop-blur-sm transition duration-300 ease-out hover:scale-[1.015] hover:shadow-[0_0_36px_-18px_rgba(168,139,255,0.75)] sm:px-6"
              >
                <span className="absolute -left-[1.72rem] top-8 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_0_2px_rgba(20,21,21,1)] sm:-left-[2.22rem]" />

                <div
                  className={`transition-all duration-700 ease-out ${
                    isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${120 + index * 140}ms` }}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg text-white">{item.role}</h3>
                      <p className="mt-1 text-sm bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                        {item.company}  
                      </p>
                      <p className="mt-1 text-sm bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                         {item.location}
                      </p>
                    </div>
                    <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-text-secondary">
                      {item.period}
                    </span>
                  </div>

                  {item.highlights.length > 0 ? (
                    <ul className="mt-4 space-y-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
                      {item.highlights.map((point, pointIndex) => (
                        <li
                          key={point}
                          className={`flex gap-2 transition-all duration-700 ease-out ${
                            isInView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                          }`}
                          style={{
                            transitionDelay: `${280 + index * 140 + pointIndex * 80}ms`,
                          }}
                        >
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-aurora-light" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
