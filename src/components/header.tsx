"use client";

import Link from "next/link";

import { Container } from "@/components/container";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#top", label: "Home" },
  { href: "#cards", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    setActive(window.location.hash || "#top");

    const sections = navItems
      .map(item => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newHash = `#${entry.target.id}`;
            setActive(newHash);
            // update browser URL without reload
            window.history.replaceState(null, "", newHash);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach(section => observer.observe(section!));

    return () => observer.disconnect();
  }, []);


  return (
    <header className="sticky top-0 pt-5 z-50">
      <Container className="flex h-16 items-center justify-center">
        {/* <Link
          href="#top"
          className="font-display text-lg font-semibold text-text-primary tracking-wide bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent"
        >
          Daniil Oliynyk
        </Link> */}
        <div className="hidden w-fit rounded-full border border-white/10 px-16 py-5 backdrop-blur-xl sm:block">
          <nav className="flex items-center gap-20 text-base font-medium text-text-secondary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActive(item.href)}
                className={`inline-flex transition-transform duration-200 active:scale-90 ${
                  active === item.href ? "scale-125 text-white" : "scale-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
 