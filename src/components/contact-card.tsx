"use client";

import { useTransition, useEffect, useRef, useState } from "react";

import { sendEmail } from "@/app/actions/sendEmail";
import { toast } from "sonner";
import { Container } from "@/components/container";

const CONTACT_META = [
  {
    label: "Location",
    value: "Toronto, Canada",
    detail: "Open to onsite and hybrid teams in the GTA, plus remote across North America.",
    tag: "EST",
  },
];

export function ContactCard() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isPending] = useTransition();

  const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
      company: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm({...form, [name]: value});
  }


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all required fields.");
      return;
    }

    toast.promise(
      sendEmail(form), 
      {
        loading: "Sending...",
        success: () => {
          setForm({ name: "", email: "", message: "", company: "" });
          return "Message sent successfully!";
        },
        error: (error) => error.message
      }
    )

  }

  
  useEffect(() => {
    const target = sectionRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative flex min-h-[calc(100svh-4rem)] items-center py-10 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-3rem] top-[18%] h-56 w-56 rounded-full bg-aurora-soft blur-3xl" />
        <div className="absolute right-[-3rem] bottom-[14%] h-64 w-64 rounded-full bg-mint-soft blur-3xl" />
      </div>

      <Container className="relative w-full max-w-7xl">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div
            className={`space-y-7 transition-all duration-700 ease-out ${
              isInView ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">Let&apos;s Connect</p>
              <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[4.25rem]">
                Contact
              </h2>
              <p className="max-w-[62ch] text-sm leading-relaxed text-text-secondary sm:text-base">
                If you&apos;re hiring for software engineering roles or want to discuss a project, send a message and I&apos;ll get back to you soon.
              </p>
            </div>

            <ul className="grid gap-0 border-y border-white/12 sm:max-w-xl">
              {CONTACT_META.map((item, index) => (
                <li
                  key={item.label}
                  className={`grid gap-2 py-4 transition-colors duration-200 ${
                    index !== CONTACT_META.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-text-muted">{item.label}</p>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/65">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white sm:text-[15px]">{item.value}</p>
                  <p className="max-w-[58ch] text-xs leading-relaxed text-text-secondary/90 sm:text-[13px]">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>


          <form
            onSubmit={handleSubmit}
            noValidate={true}
            className={`border-t border-white/12 pt-5 transition-all duration-700 ease-out sm:pt-7 ${
              isInView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <div className="mb-5 border-b border-white/10 pb-4 sm:mb-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">Message Form</p>
              <h3 className="mt-2 font-display text-2xl text-white sm:text-3xl">Tell me about your role or project</h3>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                name="company"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <label className="block space-y-2">
                <span className="text-[11px] uppercase tracking-[0.16em] text-text-muted">Name</span>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required={true}
                  className="h-11 w-full border-b border-white/20 bg-white/[0.02] px-2 text-sm text-text-primary shadow-[0_10px_24px_-24px_rgba(168,139,255,0.95)] outline-none transition placeholder:text-text-muted focus:border-aurora-light focus:shadow-[0_14px_30px_-22px_rgba(168,139,255,0.9)]"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-[11px] uppercase tracking-[0.16em] text-text-muted">Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required={true}
                  className="h-11 w-full border-b border-white/20 bg-white/[0.02] px-2 text-sm text-text-primary shadow-[0_10px_24px_-24px_rgba(168,139,255,0.95)] outline-none transition placeholder:text-text-muted focus:border-aurora-light focus:shadow-[0_14px_30px_-22px_rgba(168,139,255,0.9)]"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-[11px] uppercase tracking-[0.16em] text-text-muted">Message</span>
                <textarea
                  name="message"
                  placeholder="A quick note about the position or project"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required={true}
                  className="w-full resize-none border-b border-white/20 bg-white/[0.02] px-2 py-2 text-sm text-text-primary shadow-[0_12px_26px_-24px_rgba(168,139,255,0.95)] outline-none transition placeholder:text-text-muted focus:border-aurora-light focus:shadow-[0_16px_32px_-22px_rgba(168,139,255,0.9)]"
                />
              </label>

              <button
                type="submit"
                disabled={isPending}
                className="mt-3 inline-flex h-11 w-full cursor-pointer items-center justify-center border border-white/25 bg-transparent text-sm font-semibold text-white transition duration-200 hover:border-white/45 hover:bg-white/[0.04] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isPending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
