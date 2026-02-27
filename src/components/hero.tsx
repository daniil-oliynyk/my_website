import Image from "next/image";

import { Typewriter } from "@/components/typewriter";
import { Container } from "@/components/container";

const HERO_TITLES = [
  "Software Engineer",
  "Android Specialist",
  "Avid Outdoorsman ",
];

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden py-10 sm:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-aurora-soft blur-3xl" />
        <div className="absolute right-16 top-24 h-40 w-40 rounded-full bg-mint-soft blur-3xl" />
        <div className="absolute -bottom-10 left-20 h-52 w-52 rounded-full bg-aurora-soft blur-3xl" />
      </div>

      <Container className="relative z-10 mt-[8svh] flex w-full flex-col sm:mt-[12svh] lg:mt-[16svh] lg:flex-row lg:items-center">
        <div className="relative mx-auto flex h-[300px] w-[300px] flex-shrink-0 items-center justify-center lg:mx-0">
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
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-text-secondary backdrop-blur">
            Hello, I&apos;m Daniil
          </span> */}
          <h1 className="font-display text-5xl font-semibold text-white">
            Hello, I&apos;m <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">Daniil</span>
          </h1>
          <div className="flex min-h-[52px] flex-col items-center gap-3 text-lg font-medium text-text-secondary sm:flex-row">
            <span className="font-display text-5xl text-text-primary sm:text-5xl">
              a&nbsp;
            </span>
            <Typewriter
              phrases={HERO_TITLES}
              className="font-display text-5xl text-white sm:text-5xl"
              caretClassName="h-7 sm:h-8"
            />
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {/* <Link
              href="#cards"
              className="inline-flex h-11 items-center justify-center rounded-full bg-aurora px-6 text-sm font-semibold text-white shadow-glow transition hover:bg-aurora-light hover:shadow-lg hover:shadow-aurora/40"
            >
              Explore Highlights
            </Link> */}
            {/* <Link
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-text-secondary transition hover:border-white/40 hover:text-white"
            >
              Get in Touch
            </Link> */}
          </div>
        </div>
      </Container>

      <Container className="relative z-10 flex flex-col lg:items-left ">
        <div className="mx-auto mt-5 w-full text-left lg:mx-0 lg:items-start ">
          <h2 className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>Currently, I&apos;m a Software Engineer at General Motors</span>
            <Image
              src="/images/General_Motors.svg"
              alt="General Motors logo"
              width={24}
              height={24}
              className="h-5 w-5 lg:h-6 lg:w-6"
            />
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </Container>
    </section>
  );
}
