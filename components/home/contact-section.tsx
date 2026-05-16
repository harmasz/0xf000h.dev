import type { ComponentType, SVGProps } from "react";
import { SectionHeading } from "@/components/home/section-heading";
import {
	GitHubIcon,
	LinkedInIcon,
	MailIcon,
	XIcon,
} from "@/components/ui/icons";
import type {
	ContactItem,
	ContactKind,
	ContactSectionContent,
} from "@/content/home";

type ContactSectionProps = Readonly<{
	section: ContactSectionContent;
}>;

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const contactIcons: Record<ContactKind, IconComponent> = {
	github: GitHubIcon,
	linkedin: LinkedInIcon,
	x: XIcon,
	email: MailIcon,
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
