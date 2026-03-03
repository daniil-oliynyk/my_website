"use client";

import Image from "next/image";

import { Typewriter } from "@/components/typewriter";
import { Container } from "@/components/container";
import { useEffect, useRef, useState } from "react";
import GradientText from "./gradient-text";

const HERO_TITLES = [
  "a Software Engineer",
  "an Android Specialist",
  "an Avid Outdoorsman ",
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
      className="relative min-h-[calc(100svh-4rem)] overflow-hidden py-8 sm:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-aurora-soft blur-3xl" />
        <div className="absolute right-16 top-24 h-40 w-40 rounded-full bg-mint-soft blur-3xl" />
        <div className="absolute -bottom-10 left-20 h-52 w-52 rounded-full bg-aurora-soft blur-3xl" />
      </div>

      <Container className="relative z-10 mt-[4svh] flex w-full flex-col sm:mt-[10svh] lg:mt-[16svh] lg:flex-row lg:items-center">
        <div className="relative mx-auto flex h-[220px] w-[220px] flex-shrink-0 items-center justify-center sm:h-[260px] sm:w-[260px] lg:mx-0 lg:h-[300px] lg:w-[300px]">
          <Image
            src="/images/bitmoji3.png"
            alt="Daniil Oliynyk bitmoji"
            width={300}
            height={300}
            className="h-full w-full object-contain drop-shadow-[0_58px_90px_rgba(8,0,18,0.48)]"
            priority
          />
        </div>
        <div className="mx-auto flex w-full flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            {/* Hello, I&apos;m <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">Daniil</span> */}
          Hello, I&apos;m 
          <span className="pl-4">
            <GradientText
              colors={["#5227FF","#f5abf2ff","#B19EEF"]}
              animationSpeed={4}
              showBorder={false}
            >
              Daniil
            </GradientText>
          </span>
          </h1><div className="flex min-h-[44px] flex-col items-center gap-2 text-lg font-medium text-text-secondary sm:min-h-[52px] sm:gap-3 sm:flex-row">
            <Typewriter
              phrases={HERO_TITLES}
              className="font-display text-3xl text-white sm:text-5xl"
              caretClassName="h-7 sm:h-8"
            />
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          </div>
        </div>
      </Container>

      <Container className="relative z-10 flex flex-col lg:items-left">
        <div className="mx-auto mt-5 w-full text-left lg:mx-0 lg:items-start ">
          <h2 className="flex flex-wrap items-center justify-center gap-2 text-base tracking-wide text-white/90 sm:text-lg lg:justify-start lg:text-xl">
            <span>Currently, I&apos;m a Software Engineer at General Motors</span>
            <Image
              src="/images/General_Motors.svg"
              alt="General Motors logo"
              width={24}
              height={24}
              className="h-5 w-5 lg:h-6 lg:w-6"
            />
          </h2>
          <p
            className={`mt-4 max-w-[600px] text-sm leading-relaxed text-text-secondary transition-opacity duration-[1600ms] ease-out sm:text-base ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
          >
            I have been a Software Engineer for 3+ years with most of my professional focus on Android Open Source Project (AOSP). I have
            worked across the stack developing services and AIDL interfaces for the infotainment connectivity platform, building out 
            SDKs and their APIs, and fullstack android applications all primarily in Java.              
          </p>
          <p
            className={`mt-4 max-w-[600px] text-sm leading-relaxed text-text-secondary transition-opacity duration-[1600ms] ease-out sm:text-base ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isInView ? "180ms" : "0ms" }}
          >
            I have a passion for all things tech and software engineering, constantly learning and exploring new technologies and open to
            all sorts of opportunities.              
          </p>
           <span className="mt-4 flex flex-wrap items-center justify-center gap-5 sm:gap-6 lg:justify-start"> 
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
        </div>
      </Container>
    </section>
  );
}
