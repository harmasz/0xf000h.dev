import { PageShell } from "@/components/page-shell";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
  return (
    <main className="min-h-screen py-[var(--space-section)]">
      <div className="page-frame flex min-h-[calc(100vh-(var(--space-section)*2))] flex-col justify-center gap-6 sm:gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
              0xf000h.dev
            </p>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              Foundation pass for the fresh rebuild: theme-aware tokens,
              typography, and layout primitives before the final homepage takes
              shape.
            </p>
          </div>

          <ThemeToggle />
        </div>

        <PageShell className="lg:pr-16">
          <div className="relative z-10 grid gap-10">
            <div className="max-w-3xl space-y-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Initial Design System
              </p>

              <h1 className="max-w-3xl font-display text-[clamp(2.9rem,1.9rem+4vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-foreground">
                Minimal by intent, but no longer generic.
              </h1>

              <p className="max-w-2xl text-[length:var(--text-lede)] leading-[1.7] text-muted-foreground">
                The site now has a stable visual language for color, type,
                spacing, surfaces, and theme behavior. It is still a scaffold,
                just one that is ready for design-heavy iteration.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-[var(--radius-lg)] border border-border/80 bg-background/60 p-5">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                  Palette
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Neutral base tones with a restrained accent, defined in light
                  and dark tokens instead of ad hoc color classes.
                </p>
              </article>

              <article className="rounded-[var(--radius-lg)] border border-border/80 bg-background/60 p-5">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                  Typography
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Sora sets the interface tone, IBM Plex Mono handles utility
                  text, and responsive type scales establish consistent rhythm.
                </p>
              </article>

              <article className="rounded-[var(--radius-lg)] border border-border/80 bg-background/60 p-5">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                  Layout
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Shared gutter, measure, radius, and surface rules now anchor
                  the scaffold without committing to the final homepage
                  composition.
                </p>
              </article>
            </div>
          </div>
        </PageShell>
      </div>
    </main>
  );
}
