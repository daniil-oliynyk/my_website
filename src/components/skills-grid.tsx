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
      className="relative flex min-h-[calc(100svh-4rem)] items-center py-12 sm:py-16"
    >
      <Container className="relative w-full max-w-7xl">
        <h2 className="font-display text-5xl font-semibold text-white sm:text-6xl">
          My Stack
        </h2>

        <div className="mt-12 space-y-8 sm:space-y-10">
          {STACK_SECTIONS.map((section, rowIndex) => (
            <div key={section.title} className="grid gap-5 sm:grid-cols-[170px_1fr] sm:items-center">
              <p
                className={`bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-lg font-semibold text-transparent transition-all duration-700 ease-out sm:text-xl ${
                  isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${80 + rowIndex * 140}ms` }}
              >
                {section.title}
              </p>
              <div className="flex flex-wrap gap-4 ">
                {section.skills.map((skill, chipIndex) => (
                  <div
                    key={`${section.title}-${skill.name}`}
                    className={`transition-all duration-700 ease-out ${
                      isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${180 + rowIndex * 140 + chipIndex * 55}ms` }}
                  >
                    <article className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-white/10 bg-[#191c20]/90 px-5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-200 hover:scale-[1.1] hover:border-white/20 hover:bg-[#22262b] hover:shadow-[0_0_36px_-18px_rgba(168,139,255,0.75)] active:scale-90">
                      <Image
                        src={skill.src}
                        alt={skill.name}
                        width={22}
                        height={22}
                        className="h-[22px] w-[22px] object-contain"
                      />
                      <span className="text-base font-medium text-text-secondary">{skill.name}</span>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
