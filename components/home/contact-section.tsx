import { Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { SectionHeading } from "@/components/home/section-heading";
import type {
	ContactItem,
	ContactKind,
	ContactSectionContent,
} from "@/content/home";

type ContactSectionProps = Readonly<{
	section: ContactSectionContent;
}>;

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.42 9.42 0 0 1 12 6.96c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .28.18.6.69.5A10.23 10.23 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
		</svg>
	);
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path d="M6.94 8.87H3.73V20h3.21V8.87ZM5.33 4a1.86 1.86 0 1 0 0 3.72A1.86 1.86 0 0 0 5.33 4Zm15.16 9.9c0-3.28-1.75-4.8-4.08-4.8a3.53 3.53 0 0 0-3.18 1.75h-.04V8.87h-3.08V20h3.2v-5.5c0-1.45.27-2.86 2.07-2.86 1.77 0 1.79 1.67 1.79 2.95V20h3.21l.11-6.1Z" />
		</svg>
	);
}

function XBrandIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path d="M13.86 10.47 21.15 2h-1.73l-6.33 7.35L8.04 2H2.21l7.65 11.12L2.21 22h1.73l6.69-7.76L15.96 22h5.83l-7.93-11.53Zm-2.37 2.75-.78-1.1L4.56 3.3h2.65l4.97 7.11.77 1.1 6.47 9.26h-2.65l-5.28-7.56Z" />
		</svg>
	);
}

const contactIcons: Record<ContactKind, IconComponent> = {
	github: GitHubIcon,
	linkedin: LinkedInIcon,
	x: XBrandIcon,
	email: Mail,
};

function ContactLink({ item }: Readonly<{ item: ContactItem }>) {
	const Icon = contactIcons[item.kind];
	const isExternal = item.href.startsWith("http");

	return (
		<a
			className="contact-link group flex items-start gap-4 py-5 text-muted-foreground transition-colors hover:text-foreground"
			href={item.href}
			rel={isExternal ? "noreferrer" : undefined}
			target={isExternal ? "_blank" : undefined}
		>
			<span className="contact-link-icon mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-colors group-hover:border-foreground/20 group-hover:text-foreground">
				<Icon aria-hidden="true" className="h-4 w-4" />
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
	);
}

export function ContactSection({ section }: ContactSectionProps) {
	return (
		<section
			aria-labelledby={section.heading.id}
			className="scroll-mt-24 space-y-8 border-t border-border pt-12 sm:space-y-10 sm:pt-14"
			id={section.sectionId}
		>
			<SectionHeading heading={section.heading} />

			<div className="max-w-2xl divide-y divide-border/90 border-t border-border/90">
				{section.items.map((item) => (
					<ContactLink item={item} key={item.label} />
				))}
			</div>
		</section>
	);
}
