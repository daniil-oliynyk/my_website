"use client";

import { Typewriter } from "@/components/typewriter";
import { Container } from "@/components/container";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import GradientText from "./gradient-text";

const HERO_TITLES = [
  "a Software Engineer",
  "an Android Specialist",
  "an Avid Outdoorsman",
];


export function Hero() {
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
      id="top"
      ref={sectionRef}
      className="relative min-h-[calc(100svh-4rem)] overflow-hidden py-8 sm:py-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-aurora-soft blur-3xl" />
        <div className="absolute right-16 top-24 h-40 w-40 rounded-full bg-mint-soft blur-3xl" />
        <div className="absolute -bottom-10 left-20 h-52 w-52 rounded-full bg-aurora-soft blur-3xl" />
      </div>

      <Container className="relative z-10 pt-[4svh] sm:pt-[7svh] lg:pt-[6svh]">
        <div className="flex flex-col items-start text-left">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-text-secondary/90">
            <span className="h-2 w-2 rounded-full bg-mint" />
            Hey! My name is Daniil
          </p>

          <h1 className="mt-5 max-w-4xl font-display text-[2.3rem] font-semibold leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-[4.35rem]">
            I like <GradientText
                colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                animationSpeed={5}
                showBorder={false}
              >solving</GradientText>
            <span className="px-2">
              <GradientText
                colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                animationSpeed={5}
                showBorder={false}
              >
                problems  
              </GradientText>
            </span>
           that don&apos;t have obvious answers.  
          </h1>

          <div className="mt-6 flex min-h-[40px] items-center gap-3 text-base text-text-secondary sm:text-lg">
            <span className="font-display text-xl sm:text-2xl">I am</span>
            <Typewriter
              phrases={HERO_TITLES}
              className="font-display text-xl text-white sm:text-2xl"
              caretClassName="h-6 sm:h-7"
            />
          </div>
        </div>

        <div className="mt-5 flex items-start gap-8 lg:flex-row lg:items-center justify-end">
            

            <p className="max-w-lg text-sm leading-relaxed text-text-secondary sm:text-base lg:max-w-2xl">
              Most of my work is figuring things out,designing systems, improving performance, 
              and making sure everything works the way it should once it&apos;s live.
            </p>

          </div>
        <div className="mt-5 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <span className="flex flex-wrap items-center gap-5 sm:gap-6"> 
            <a href="https://github.com/daniil-oliynyk" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/github.png"
                alt="github"
                width={7}
                height={7}
                className="h-7 w-7 cursor-pointer transition opacity-70 hover:scale-110 hover:opacity-100"
                priority
              />
            </a>              
            <a href="https://linkedin.com/in/daniiloliynyk" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/linkedin.png"
                alt="linkedin"
                width={7}
                height={7}
                className="h-7 w-7 cursor-pointer transition opacity-70 hover:scale-110 hover:opacity-100"
                priority
              />
            </a>    
            <a href="/Daniil_Oliynyk_Resume_2026.pdf" target="_blank" rel="noopener noreferrer">          
              <Image
                src="/images/resume.png"
                alt="resume"
                width={7}
                height={7}
                className="h-7 w-7 cursor-pointer transition opacity-70 hover:scale-110 hover:opacity-100"
                priority
              />
            </a>          
          </span>
          <span className="flex w-full justify-start lg:max-w-2xl">  
            <a
              href="#contact"
              className="shrink-0 inline-flex rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Contact me
            </a>
          </span>
        </div>
      </Container>

      <Container className="relative z-10 mt-14 sm:mt-20">
        <div className="h-px w-full bg-white/10" />
      </Container>

      <Container className="relative z-10">
        <div id="about" className="mx-auto mt-10 max-w-4xl text-center sm:mt-14">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-mint/90">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            About me
          </p>

          <p
            className={`mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/95 transition-opacity duration-[1600ms] ease-out sm:text-3xl ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
          >
            I&apos;m Daniil Oliynyk, a software engineer with 3+ years of experience building impactful,
            production-grade software with a strong focus on performance and reliability.
          </p>

          <p
            className={`mx-auto mt-6 max-w-3xl text-base leading-relaxed text-text-secondary transition-opacity duration-[1600ms] ease-out sm:text-xl ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isInView ? "180ms" : "0ms" }}
          >
            I currently work at General Motors, where I contribute across the entire AOSP stack, build out SDKs and APIs, dev tooling, and the occasional full stack web application. I&apos;m always exploring new
            technologies and open to new opportunities.
          </p>
        </div>
      </Container>
    </section>
  );
}
