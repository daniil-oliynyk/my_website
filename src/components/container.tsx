import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-6 sm:px-10 md:px-12 lg:px-16",
        className
      )}
    >
      {children}
    </div>
  );
}
