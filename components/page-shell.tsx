import { cn } from "@/lib/utils";

type PageShellProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export function PageShell({ children, className }: PageShellProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface px-6 py-8 shadow-[var(--shadow-panel)] backdrop-blur-xl sm:px-10 sm:py-10 lg:px-12 lg:py-12",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-border-strong to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-[-3.5rem] h-40 w-40 rounded-full bg-accent/12 blur-3xl"
      />
      {children}
    </section>
  );
}
