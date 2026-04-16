"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { Container } from "@/components/container";

const SKILL_ATLAS = [
  {
    title: "Languages",
    label: "Core",
    summary: "The languages I use for product code, system programming, and experimentation.",
    skills: [
      { name: "Java", src: "/images/java.svg" },
      { name: "Go", src: "/images/golang.svg" },
      { name: "Python", src: "/images/python.svg" },
      { name: "C", src: "/images/c.svg" },
      { name: "C++", src: "/images/cpp.svg" },
      { name: "Kotlin", src: "/images/kotlin.svg" },
      { name: "Typescript", src: "/images/typescript.svg" },
    ],
  },
  {
    title: "Database",
    label: "Data",
    summary: "Storage systems for transactional apps, distributed workloads, and caching layers.",
    skills: [
      { name: "MongoDB", src: "/images/mongodb.svg" },
      { name: "Cassandra", src: "/images/cassandra.svg" },
      { name: "PostgreSQL", src: "/images/postgresql.svg" },
      { name: "SQLite", src: "/images/sqlite.svg" },
      { name: "Redis", src: "/images/redis.svg" },
    ],
  },
  {
    title: "Technologies",
    label: "Platform",
    summary: "Frameworks and tooling used to ship, test, observe, and maintain production systems.",
    skills: [
      { name: "Android", src: "/images/android.svg" },
      { name: "AWS", src: "/images/aws.svg" },
      { name: "React Native", src: "/images/reactnative.svg" },
      { name: "Expo", src: "/images/expo.svg" },
      { name: "Docker", src: "/images/docker.svg" },
      { name: "Git", src: "/images/git.svg" },
      { name: "Node.js", src: "/images/nodejs.svg" },
      { name: "Mockito", src: "/images/mockito.svg" },
      { name: "Junit", src: "/images/junit.svg" },
    ],
  },
];

export function SkillsGrid() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const totalSkills = SKILL_ATLAS.reduce((count, section) => count + section.skills.length, 0);

  useEffect(() => {
    const target = sectionRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative flex min-h-[calc(100svh-4rem)] items-center py-10 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-2rem] top-10 h-44 w-44 rounded-full bg-aurora-soft blur-3xl" />
        <div className="absolute right-[-2.5rem] top-1/3 h-52 w-52 rounded-full bg-mint-soft blur-3xl" />
      </div>

      <Container className="relative w-full max-w-7xl">
        <div
          className={`transition-all duration-700 ease-out ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">Core Toolkit</p>
              <h2 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-[5rem]">
                Skills & Technologies
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
                Languages, data systems, and platform tooling that I use regularly when building and shipping products.
              </p>
            </div>

            <div className="justify-self-start lg:justify-self-end">
              <p className="text-sm uppercase tracking-[0.16em] text-white/70">
                {SKILL_ATLAS.length} Domains · {totalSkills} Tools
              </p>
            </div>
          </div>

          <div className="mt-8 border-y border-white/12">
            {SKILL_ATLAS.map((section, sectionIndex) => (
              <article
                key={section.title}
                className={`grid gap-4 border-b border-white/10 py-6 transition-all duration-700 last:border-b-0 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${sectionIndex * 120}ms` }}
              >
                <div className="flex items-baseline gap-3 lg:block">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                    {`0${sectionIndex + 1}`}
                  </p>
                  <h3 className="mt-1 font-display text-3xl font-semibold leading-[0.96] text-white sm:text-4xl">
                    {section.title}
                  </h3>
                  <p className="mt-2 hidden text-[11px] uppercase tracking-[0.18em] text-white/55 lg:block">
                    {section.label}
                  </p>
                </div>

                <div>
                  <p className="max-w-[62ch] text-sm leading-relaxed text-text-secondary sm:text-[15px]">
                    {section.summary}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2.5">
                    {section.skills.map((skill) => (
                      <li key={skill.name}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-white/90 transition duration-200 hover:-translate-y-px hover:border-white/35 hover:bg-white/[0.04] active:scale-[0.98]">
                          <Image
                            src={skill.src}
                            alt={skill.name}
                            width={18}
                            height={18}
                            className="h-[18px] w-[18px] object-contain"
                          />
                          <span className="text-xs font-medium tracking-[0.01em] sm:text-sm">{skill.name}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}