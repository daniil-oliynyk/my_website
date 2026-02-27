import Link from "next/link";

import { Container } from "@/components/container";

const navItems = [
  { href: "#top", label: "Home" },
  { href: "#cards", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
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
                className="transition hover:text-white"
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
