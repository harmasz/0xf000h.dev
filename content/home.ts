import { siteConfig } from "@/lib/site";

export type NavigationItem = Readonly<{
	label: string;
	href: `#${string}`;
}>;

export type HeroMetaItem = Readonly<{
	label: string;
	value: string;
}>;

export type HeroImage = Readonly<{
	src: string;
	alt: string;
}>;

export type HeroContent = Readonly<{
	headingId: string;
	eyebrow: string;
	title: string;
	description: string;
	meta: ReadonlyArray<HeroMetaItem>;
	image: HeroImage;
}>;

export type SectionHeadingContent = Readonly<{
	id: string;
	eyebrow: string;
	title: string;
	description?: string;
}>;

export type HelpItem = Readonly<{
	title: string;
	summary: string;
}>;

export type HelpSectionContent = Readonly<{
	sectionId: string;
	heading: SectionHeadingContent;
	items: ReadonlyArray<HelpItem>;
}>;

export type ExperienceItem = Readonly<{
	role: string;
	organization: string;
	summary: string;
	emphasizeOrganization?: boolean;
}>;

export type PortfolioSectionContent = Readonly<{
	sectionId: string;
	heading: SectionHeadingContent;
	items: ReadonlyArray<ExperienceItem>;
}>;

export type AboutSectionContent = Readonly<{
	sectionId: string;
	heading: SectionHeadingContent;
	paragraphs: ReadonlyArray<string>;
}>;

export type ContactKind = "github" | "linkedin" | "x" | "email";

export type ContactItem = Readonly<{
	kind: ContactKind;
	label: string;
	href: string;
	value: string;
}>;

export type ContactSectionContent = Readonly<{
	sectionId: string;
	heading: SectionHeadingContent;
	items: ReadonlyArray<ContactItem>;
}>;

export type FooterContent = Readonly<{
	copyrightName: string;
	description: string;
	returnToTopLabel: string;
}>;

export type HomePageContent = Readonly<{
	navigation: ReadonlyArray<NavigationItem>;
	hero: HeroContent;
	help: HelpSectionContent;
	portfolio: PortfolioSectionContent;
	about: AboutSectionContent;
	contact: ContactSectionContent;
	footer: FooterContent;
}>;

export const homePageContent = {
	navigation: [
		{ label: "Work", href: "#work" },
		{ label: "Portfolio", href: "#portfolio" },
		{ label: "About", href: "#about" },
		{ label: "Contact", href: "#contact" },
	],
	hero: {
		headingId: "home-heading",
		eyebrow: "PIOTR HARMASZ",
		title: "I help SaaS companies turn product clarity into growth.",
		description:
			"I work across product leadership, systems, and implementation to help teams make better bets, ship with more focus, and build products that support real business outcomes.",
		meta: [
			{ label: "Role", value: siteConfig.role },
			{ label: "Base", value: siteConfig.location },
		],
		image: {
			src: "/profile/me-hero.jpg",
			alt: "Piotr Harmasz speaking at a podium",
		},
	},
	help: {
		sectionId: "work",
		heading: {
			id: "work-heading",
			eyebrow: "How I Help",
			title: "Product work that improves focus, execution, and growth.",
			description:
				"I usually work with companies that need stronger product direction, tighter delivery, and better systems for the next stage of scale.",
		},
		items: [
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
		],
	},
	portfolio: {
		sectionId: "portfolio",
		heading: {
			id: "portfolio-heading",
			eyebrow: "Portfolio",
			title: "Selected experience",
		},
		items: [
			{
				organization: "Prezly",
				role: "Product Lead",
				emphasizeOrganization: true,
				summary:
					"Helping strengthen product direction, team process, and execution as the company scales.",
			},
			{
				organization: "Piwik PRO",
				role: "Product, analytics, and AI-focused roles",
				emphasizeOrganization: true,
				summary:
					"Worked across strategy, experimentation, and delivery in a complex SaaS environment, turning ambiguity into shipped improvements.",
			},
			{
				role: "Independent experiments",
				organization: "Side projects and prototypes",
				summary:
					"Testing product ideas, AI workflows, and smaller tools before they become bigger commitments.",
			},
		],
	},
	about: {
		sectionId: "about",
		heading: {
			id: "about-heading",
			eyebrow: "About",
			title: "I work best where strategy needs to become execution.",
		},
		paragraphs: [
			"Companies rarely need more ideas. They need better judgment, clearer priorities, and tighter feedback loops between product decisions and what actually gets built.",
			"That&apos;s the space I tend to operate in across product leadership, software, analytics, and AI, helping teams move faster without losing depth, and scale without losing focus.",
		],
	},
	contact: {
		sectionId: "contact",
		heading: {
			id: "contact-heading",
			eyebrow: "Contact",
			title: "Interested in working together?",
			description:
				"Best reached by email. You can also find me on GitHub, LinkedIn, and X.",
		},
		items: [
			{
				kind: "github",
				label: "GitHub",
				href: siteConfig.socials.github,
				value: "harmasz",
			},
			{
				kind: "linkedin",
				label: "LinkedIn",
				href: siteConfig.socials.linkedin,
				value: "piotr-harmasz",
			},
			{
				kind: "x",
				label: "X",
				href: siteConfig.socials.x,
				value: siteConfig.socials.xHandle,
			},
			{
				kind: "email",
				label: "Email",
				href: `mailto:${siteConfig.email}`,
				value: siteConfig.email,
			},
		],
	},
	footer: {
		copyrightName: siteConfig.name,
		description: `Personal site of ${siteConfig.author}.`,
		returnToTopLabel: "Return to top",
	},
} as const satisfies HomePageContent;
