import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "muted" | "dark";
}

export function Section({ children, className, id, background = "white" }: SectionProps) {
  const bgColors = {
    white: "bg-background",
    muted: "bg-muted/50",
    dark: "bg-primary text-primary-foreground",
  };

  return (
    <section id={id} className={cn("py-20 md:py-32", bgColors[background], className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, center = true, className }: { title: string; subtitle?: string; center?: boolean; className?: string }) {
  return (
    <div className={cn("mb-16", center && "text-center", className)}>
      <h2 className="text-3xl md:text-5xl mb-4 font-bold tracking-tight text-foreground relative inline-block">
        {title}
        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">{subtitle}</p>}
    </div>
  );
}
