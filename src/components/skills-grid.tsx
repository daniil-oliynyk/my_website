"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { Container } from "@/components/container";

const STACK_SECTIONS = [
  {
    title: "Languages",
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
  const totalSkills = STACK_SECTIONS.reduce((count, section) => count + section.skills.length, 0);
  const tiltClasses = ["-rotate-[0.75deg]", "rotate-[0.75deg]", "-rotate-[0.5deg]", "rotate-[0.5deg]"];
  const collageOffsetClasses = [
    "translate-x-0 translate-y-0",
    "-translate-y-1 sm:translate-x-2",
    "translate-y-1 sm:-translate-x-1",
    "sm:translate-y-1",
    "sm:-translate-y-1 sm:translate-x-3",
    "translate-y-0.5 sm:translate-x-1",
    "-translate-y-0.5 sm:-translate-x-2",
    "sm:translate-y-1 sm:translate-x-2",
  ];

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
      className="relative min-h-[calc(100svh-4rem)] py-10 sm:py-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-8 h-36 w-36 rounded-full bg-aurora-soft blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-mint-soft blur-3xl" />
        <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute left-0 top-2/3 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Container className="relative w-full max-w-7xl">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-text-secondary/80">
              Core Toolkit
            </p>
            <h2 className="mt-2 max-w-4xl font-display text-5xl font-semibold leading-[0.95] text-white sm:text-7xl lg:text-[5.25rem]">
              Built from
              <span className="ml-3 inline-block text-white/45">practice</span>
            </h2>
          </div>

          <div className="justify-self-start lg:justify-self-end">
            <p className="max-w-sm text-sm leading-relaxed text-text-secondary sm:text-base">
              Languages, data systems, and production tooling organized as a visual map of how I actually build.
            </p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-white/70">
              {STACK_SECTIONS.length} domains · {totalSkills} tools
            </p>
          </div>
        </div>

        <div className="mt-7 border-t border-white/15">
          {STACK_SECTIONS.map((section, rowIndex) => (
            <article
              key={section.title}
              className={`grid gap-4 border-b border-white/10 py-5 transition-all duration-700 lg:grid-cols-[240px_1fr] lg:gap-7 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${80 + rowIndex * 140}ms` }}
            >
              <div className="flex items-baseline gap-3 lg:block">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                  {`0${rowIndex + 1}`}
                </p>
                <h3 className="mt-0.5 font-display text-3xl font-semibold leading-[0.96] text-white sm:text-4xl lg:text-[2.1rem]">
                  {section.title}
                </h3>
              </div>

              <ul className="flex flex-wrap items-start gap-x-4 gap-y-1 sm:gap-x-6 sm:gap-y-2">
                {section.skills.map((skill, chipIndex) => (
                  <li
                    key={`${section.title}-${skill.name}`}
                    className={`group inline-flex w-fit items-center gap-2 border-b border-white/15 pb-1 text-white/85 transition-all duration-500 hover:border-white/45 hover:text-white active:scale-[0.98] ${
                      tiltClasses[(rowIndex + chipIndex) % tiltClasses.length]
                    } ${
                      collageOffsetClasses[(rowIndex * 3 + chipIndex) % collageOffsetClasses.length]
                    } ${
                      isInView ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                    }`}
                    style={{ transitionDelay: `${180 + rowIndex * 130 + chipIndex * 45}ms` }}
                  >
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain transition-transform duration-300 group-hover:-translate-y-[1px]"
                    />
                    <span className="text-sm font-medium tracking-[0.01em] sm:text-base">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}