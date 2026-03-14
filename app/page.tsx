import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  type LucideIcon,
} from "lucide-react";

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
  period: string;
  summary: string;
}>;

const navigationItems: ReadonlyArray<NavigationItem> = [
  { label: "Work", href: "#work" },
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
    label: "Twitter",
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
  { label: "Role", value: "Product Lead / Full-stack developer" },
  { label: "Base", value: "Wroclaw, Poland" },
];

const experienceItems: ReadonlyArray<ExperienceItem> = [
  {
    role: "Product leadership",
    organization: "Product-led software teams",
    period: "Recent",
    summary:
      "Shaping product direction, aligning scope with business priorities, and keeping execution close enough to the work that decisions stay grounded.",
  },
  {
    role: "Full-stack development",
    organization: "Web platforms and internal tools",
    period: "Ongoing",
    summary:
      "Building across the stack when speed, clarity, or product quality benefits from tighter product and engineering feedback loops.",
  },
  {
    role: "Independent experiments",
    organization: "Personal and side projects",
    period: "Always",
    summary:
      "Using smaller builds to test interface ideas, workflow improvements, and technical directions before they earn a larger footprint.",
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
  description: string;
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
      <p className="font-reading max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base">
        {description}
      </p>
    </div>
  );
}

function ExperienceRow({ item }: Readonly<{ item: ExperienceItem }>) {
  return (
    <article className="grid gap-5 py-7 sm:py-8 lg:grid-cols-[minmax(12rem,0.8fr)_minmax(0,1.2fr)] lg:gap-10">
      <div className="space-y-2">
        <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
          {item.period}
        </p>
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

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen py-[var(--space-section)]" id="top">
      <div className="page-frame space-y-16 sm:space-y-20 lg:space-y-24">
        <header className="flex items-center justify-between gap-6">
          <nav aria-label="Primary">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />
        </header>

          <section
            aria-labelledby="home-heading"
            className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(15rem,19rem)] md:items-center md:gap-12 lg:gap-16"
          >
            <div className="space-y-7">
              <div className="space-y-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                  Piotr Harmasz
                </p>

                <div className="space-y-2">
                  <h1
                    className="max-w-[13ch] text-[clamp(2.3rem,1.85rem+1.9vw,3.8rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-foreground"
                    id="home-heading"
                  >
                    Product Lead with a full-stack builder mindset.
                  </h1>
                </div>

                <p className="font-reading max-w-2xl text-[length:var(--text-lede)] leading-[1.9] text-muted-foreground">
                  I work across product thinking, systems, and implementation.
                  This rebuild is a quieter front page for selected work,
                  previous experience, and whatever deserves more space next.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5">
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

            <figure className="mx-auto w-full max-w-[17rem] md:mx-0 md:justify-self-end lg:max-w-[18.5rem]">
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
              description="Previous experience organized as the kinds of work I tend to move between: product direction, shipping software, and smaller experiments that sharpen both."
              eyebrow="Work"
              id="work-heading"
              title="Previous experience across product, engineering, and the space between."
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
              description="A short note on what the site is for and how the work tends to connect."
              eyebrow="About"
              id="about-heading"
              title="I care about product judgment that stays close to the build."
            />

            <div className="max-w-3xl space-y-5">
              <p className="font-reading text-sm leading-8 text-muted-foreground sm:text-base">
                The work I tend to enjoy sits at the point where product
                thinking, interface quality, and implementation detail start to
                reinforce each other. Strategy matters, but so does knowing what
                the thing actually becomes once it is built.
              </p>

              <p className="font-reading text-sm leading-8 text-muted-foreground sm:text-base">
                This site is being rebuilt from that perspective: minimal,
                practical, and structured enough to evolve without turning into
                a polished template before the content earns it.
              </p>
            </div>
          </section>

          <section
            aria-labelledby="contact-heading"
            className="scroll-mt-24 space-y-8 border-t border-border pt-12 sm:space-y-10 sm:pt-14"
            id="contact"
          >
            <SectionHeading
              description="The easiest ways to get in touch or find the rest of my work online."
              eyebrow="Contact"
              id="contact-heading"
              title="Reach out where it makes the most sense."
            />

            <div className="max-w-2xl divide-y divide-border/90 border-t border-border/90">
              {contactItems.map((item) => (
                <a
                  className="group flex items-start gap-4 py-5 text-muted-foreground transition-colors hover:text-foreground"
                  href={item.href}
                  key={item.label}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-colors group-hover:border-foreground/20 group-hover:text-foreground">
                    <item.icon aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <span className="space-y-1">
                    <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="block font-reading text-sm leading-7 text-foreground sm:text-base">
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
              className="font-mono text-[0.68rem] uppercase tracking-[0.14em] transition-colors hover:text-foreground"
              href="#top"
            >
              Return to top
            </a>
          </footer>
      </div>
    </main>
  );
}
