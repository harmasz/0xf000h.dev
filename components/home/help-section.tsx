import { SectionHeading } from "@/components/home/section-heading";
import type { HelpItem, HelpSectionContent } from "@/content/home";

type HelpSectionProps = Readonly<{
	section: HelpSectionContent;
}>;

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

export function HelpSection({ section }: HelpSectionProps) {
	return (
		<section
			aria-labelledby={section.heading.id}
			className="scroll-mt-24 space-y-8 border-t border-border pt-12 sm:space-y-10 sm:pt-14"
			id={section.sectionId}
		>
			<SectionHeading heading={section.heading} />

			<div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
				{section.items.map((item) => (
					<HelpCard item={item} key={item.title} />
				))}
			</div>
		</section>
	);
}
