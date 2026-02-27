"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

interface TypewriterProps {
  phrases: string[];
  typingDelay?: number;
  deletingDelay?: number;
  pause?: number;
  className?: string;
  caretClassName?: string;
}

export function Typewriter({
  phrases,
  typingDelay = 90,
  deletingDelay = 40,
  pause = 1400,
  className,
  caretClassName,
}: TypewriterProps) {
  const safePhrases = useMemo(() => {
    return phrases.length ? phrases : [""];
  }, [phrases]);
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = safePhrases[phraseIndex % safePhrases.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((index) => (index + 1) % safePhrases.length);
      }, deletingDelay);
      return () => clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      const nextText = isDeleting
        ? currentPhrase.slice(0, text.length - 1)
        : currentPhrase.slice(0, text.length + 1);
      setText(nextText);
    }, isDeleting ? deletingDelay : typingDelay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, safePhrases, phraseIndex, typingDelay, deletingDelay, pause]);

  return (
    <span className="inline-flex items-center">
      <span className={cn("text-aurora-light", className)}>{text}</span>
      <span
        className={cn(
          "ml-1 inline-block h-[1.05em] w-[4px] rounded-sm bg-white shadow-[0_0_10px_rgba(255,255,255,0.85)] [animation:blink_1s_step-end_infinite]",
          caretClassName
        )}
        aria-hidden
      />
    </span>
  );
}
