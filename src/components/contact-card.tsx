"use client";

import { useTransition, useEffect, useRef, useState } from "react";

import { sendEmail } from "@/app/actions/sendEmail";
import { toast } from "sonner";
import { Container } from "@/components/container";

export function ContactCard() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

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
      <Container className="relative w-full max-w-7xl">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div
            className={`space-y-6 transition-all duration-700 ease-out ${
              isInView ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">Contact</p>
            <h2 className="font-display text-4xl font-semibold bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent sm:text-5xl lg:text-6xl">Get In Touch</h2>
            <p className="max-w-xl text-sm text-text-secondary sm:text-base lg:text-lg">
              I'm actively seeking opportunities in software development. Let's discuss how my technical expertise can contribute to your team.
            </p>

            <div className="inline-flex items-center gap-3 rounded-xl ">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-text-primary">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M12 21s7-6.14 7-11a7 7 0 1 0-14 0c0 4.86 7 11 7 11Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-text-muted">Location</p>
                <p className="text-sm font-medium text-text-primary">Toronto, Canada</p>
              </div>
            </div>
          </div>


          <form
            onSubmit={handleSubmit}
            noValidate={true}
            className={`rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-card backdrop-blur-xl transition-all duration-700 ease-out sm:p-6 ${
              isInView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <div className="space-y-2.5 sm:space-y-3">
              <input
                type="text"
                name="company"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required={true}
                className="h-10 w-full rounded-md border border-white/10 bg-[#171b1f]/80 px-3.5 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-aurora-light sm:h-11 sm:px-4"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required={true}
                className="h-10 w-full rounded-md border border-white/10 bg-[#171b1f]/80 px-3.5 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-aurora-light sm:h-11 sm:px-4"
              />
              <textarea
                name="message"
                placeholder="Your message..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required={true}
                className="w-full resize-none rounded-md border border-white/10 bg-[#171b1f]/80 px-3.5 py-2.5 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-aurora-light sm:px-4 sm:py-3"
              />
              <button
                type="submit"
                disabled={isPending}
                className="inline-flex h-10 w-full items-center justify-center rounded-md border border-white/20 bg-white/[0.08] text-sm font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_12px_30px_-18px_rgba(168,139,255,0.7)] backdrop-blur-md transition duration-200 hover:bg-white/[0.14] hover:border-white/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:h-11"
              >
                <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                   {isPending ? "Sending..." : "Send Message"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
