import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  type LucideIcon,
} from "lucide-react";

import { CursorGlow } from "@/components/cursor-glow";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site";

type NavigationItem = Readonly<{
  label: string;
  href: `#${string}`;
}>;

type ContactItem = Readonly<{
  icon: LucideIcon;
  label: string;
  href: string;
  value: string;
}>;

type HeroMetaItem = Readonly<{
  label: string;
  value: string;
}>;

type ExperienceItem = Readonly<{
  role: string;
  organization: string;
  summary: string;
}>;

type HelpItem = Readonly<{
  title: string;
  summary: string;
}>;

const navigationItems: ReadonlyArray<NavigationItem> = [
  { label: "Work", href: "#work" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const contactItems: ReadonlyArray<ContactItem> = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/harmasz",
    value: "harmasz",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/piotr-harmasz/",
    value: "piotr-harmasz",
  },
  {
    icon: Twitter,
    label: "X",
    href: "https://x.com/phrm0",
    value: "@phrm0",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:0xf000h@gmail.com",
    value: "0xf000h@gmail.com",
  },
];

const heroMeta: ReadonlyArray<HeroMetaItem> = [
  { label: "Role", value: "Product Lead / Builder" },
  { label: "Base", value: "Wrocław, Poland" },
];

const helpItems: ReadonlyArray<HelpItem> = [
  {
    title: "Sharper product direction",
    summary:
      "Turning broad goals into clearer bets, priorities, and execution paths.",
  },
  {
    title: "Faster execution",
    summary:
      "Reducing friction between product and engineering so teams can move with more confidence.",
  },
  {
    title: "Better growth foundations",
    summary:
      "Improving the product decisions and workflows that support retention, monetization, and recurring revenue.",
  },
];

const experienceItems: ReadonlyArray<ExperienceItem> = [
  {
    role: "Product Lead",
    organization: "Prezly",
    summary:
      "Helping strengthen product direction, team process, and execution as the company scales.",
  },
  {
    role: "Product, analytics, and AI-focused roles",
    organization: "Piwik PRO",
    summary:
      "Worked across strategy, experimentation, and delivery in a complex SaaS environment, turning ambiguity into shipped improvements.",
  },
  {
    role: "Independent experiments",
    organization: "Side projects and prototypes",
    summary:
      "Testing product ideas, AI workflows, and smaller tools before they become bigger commitments.",
  },
];

function SectionHeading({
  eyebrow,
  id,
  title,
  description,
}: Readonly<{
  eyebrow: string;
  id: string;
  title: string;
  description?: string;
}>) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2
        className="max-w-xl text-[clamp(1.7rem,1.45rem+0.8vw,2.35rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground"
        id={id}
      >
        {title}
      </h2>
      {description ? (
        <p className="font-reading max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ExperienceRow({ item }: Readonly<{ item: ExperienceItem }>) {
  return (
    <article className="grid gap-5 py-7 sm:py-8 lg:grid-cols-[minmax(12rem,0.8fr)_minmax(0,1.2fr)] lg:gap-10">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold leading-[1.15] tracking-[-0.03em] text-foreground">
          {item.role}
        </h3>
        <p className="font-reading text-sm leading-7 text-muted-foreground">
          {item.organization}
        </p>
      </div>

      <p className="font-reading max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base">
        {item.summary}
      </p>
    </article>
  );
}

function HelpCard({ item }: Readonly<{ item: HelpItem }>) {
  return (
    <article className="space-y-3 rounded-[1.4rem] border border-border bg-surface px-5 py-6 shadow-[var(--shadow-panel)] sm:px-6">
      <h3 className="text-xl font-semibold leading-[1.15] tracking-[-0.03em] text-foreground">
        {item.title}
      </h3>
      <p className="font-reading text-sm leading-8 text-muted-foreground sm:text-base">
        {item.summary}
      </p>
    </article>
  );
}

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen overflow-hidden py-[var(--space-section)]" id="top">
      <CursorGlow />

      <div className="page-frame relative z-10 space-y-16 sm:space-y-20 lg:space-y-24">
        <header className="flex items-center justify-between gap-6">
          <nav
            aria-label="Primary"
            className="motion-reveal"
            style={{ animationDelay: "40ms" }}
          >
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="interactive-underline font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="motion-reveal"
            style={{ animationDelay: "90ms" }}
          >
            <ThemeToggle />
          </div>
        </header>

        <section
          aria-labelledby="home-heading"
          className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(15rem,19rem)] md:items-center md:gap-12 lg:gap-16"
        >
          <div className="space-y-7">
            <div className="space-y-4">
              <p
                className="motion-reveal font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent"
                style={{ animationDelay: "130ms" }}
              >
                PIOTR HARMASZ
              </p>

              <div className="space-y-2">
                <h1
                  className="motion-reveal max-w-[15ch] text-[clamp(2.3rem,1.85rem+1.9vw,3.8rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-foreground"
                  id="home-heading"
                  style={{ animationDelay: "180ms" }}
                >
                  I help SaaS companies turn product clarity into growth.
                </h1>
              </div>

              <p
                className="motion-reveal font-reading max-w-2xl text-[length:var(--text-lede)] leading-[1.9] text-muted-foreground"
                style={{ animationDelay: "240ms" }}
              >
                I work across product leadership, systems, and implementation
                to help teams make better bets, ship with more focus, and build
                products that support real business outcomes.
              </p>
            </div>

            <div
              className="motion-reveal flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5"
              style={{ animationDelay: "300ms" }}
            >
              {heroMeta.map((item) => (
                <div className="flex items-center gap-2.5" key={item.label}>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="font-reading text-sm leading-6 text-foreground sm:text-base">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <figure
            className="motion-reveal motion-reveal-figure mx-auto w-full max-w-[17rem] md:mx-0 md:justify-self-end lg:max-w-[18.5rem]"
            style={{ animationDelay: "220ms" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-surface-strong shadow-[var(--shadow-panel)]">
              <Image
                alt="Piotr Harmasz speaking at a podium"
                className="object-cover object-[50%_24%]"
                fill
                priority
                sizes="(min-width: 1024px) 18.5rem, (min-width: 768px) 15rem, 72vw"
                src="/profile/me-hero.jpg"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/28 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-border/55 ring-inset" />
            </div>
          </figure>
        </section>

        <section
          aria-labelledby="work-heading"
          className="scroll-mt-24 space-y-8 border-t border-border pt-12 sm:space-y-10 sm:pt-14"
          id="work"
        >
          <SectionHeading
            description="I usually work with companies that need stronger product direction, tighter delivery, and better systems for the next stage of scale."
            eyebrow="How I Help"
            id="work-heading"
            title="Product work that improves focus, execution, and growth."
          />

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
            {helpItems.map((item) => (
              <HelpCard item={item} key={item.title} />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="portfolio-heading"
          className="scroll-mt-24 space-y-8 border-t border-border pt-12 sm:space-y-10 sm:pt-14"
          id="portfolio"
        >
          <SectionHeading
            description=""
            eyebrow="Portfolio"
            id="portfolio-heading"
            title="Selected experience"
          />

          <div className="divide-y divide-border/90 border-t border-border/90">
            {experienceItems.map((item) => (
              <ExperienceRow item={item} key={`${item.role}-${item.organization}`} />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="about-heading"
          className="scroll-mt-24 space-y-8 border-t border-border pt-12 sm:space-y-10 sm:pt-14"
          id="about"
        >
          <SectionHeading
            description=""
            eyebrow="About"
            id="about-heading"
            title="I work best where strategy needs to become execution."
          />

          <div className="max-w-3xl space-y-5">
            <p className="font-reading text-sm leading-8 text-muted-foreground sm:text-base">
              Companies rarely need more ideas. They need better judgment,
              clearer priorities, and tighter feedback loops between product
              decisions and what actually gets built.
            </p>

            <p className="font-reading text-sm leading-8 text-muted-foreground sm:text-base">
              That&apos;s the space I tend to operate in across product
              leadership, software, analytics, and AI, helping teams move
              faster without losing depth, and scale without losing focus.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="contact-heading"
          className="scroll-mt-24 space-y-8 border-t border-border pt-12 sm:space-y-10 sm:pt-14"
          id="contact"
        >
          <SectionHeading
            description="Best reached by email. You can also find me on GitHub, LinkedIn, and X."
            eyebrow="Contact"
            id="contact-heading"
            title="Interested in working together?"
          />

          <div className="max-w-2xl divide-y divide-border/90 border-t border-border/90">
            {contactItems.map((item) => (
              <a
                className="contact-link group flex items-start gap-4 py-5 text-muted-foreground transition-colors hover:text-foreground"
                href={item.href}
                key={item.label}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                target={item.href.startsWith("http") ? "_blank" : undefined}
              >
                <span className="contact-link-icon mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-colors group-hover:border-foreground/20 group-hover:text-foreground">
                  <item.icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="block font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="contact-link-value font-reading text-sm leading-7 text-foreground sm:text-base">
                    {item.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-reading">
            &copy; {currentYear} {siteConfig.name}. Personal site rebuild in
            progress.
          </p>
          <a
            className="interactive-underline font-mono text-[0.68rem] uppercase tracking-[0.14em] transition-colors hover:text-foreground"
            href="#top"
          >
            Return to top
          </a>
        </footer>
      </div>
    </main>
  );
}
