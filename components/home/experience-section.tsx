import { SectionHeading } from "@/components/home/section-heading";
import type { ExperienceItem, PortfolioSectionContent } from "@/content/home";

type ExperienceSectionProps = Readonly<{
	section: PortfolioSectionContent;
}>;

function ExperienceRow({ item }: Readonly<{ item: ExperienceItem }>) {
	const headline = item.emphasizeOrganization ? item.organization : item.role;
	const supporting = item.emphasizeOrganization ? item.role : item.organization;

	return (
		<article className="grid gap-5 py-7 sm:py-8 lg:grid-cols-[minmax(12rem,0.8fr)_minmax(0,1.2fr)] lg:gap-10">
			<div className="space-y-2">
				<h3 className="text-xl font-semibold leading-[1.15] tracking-[-0.03em] text-foreground">
					{headline}
				</h3>
				<p className="font-reading text-sm leading-7 text-muted-foreground">
					{supporting}
				</p>
			</div>

			<p className="font-reading max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base">
				{item.summary}
			</p>
		</article>
	);
}

export function ExperienceSection({ section }: ExperienceSectionProps) {
	return (
		<section
			aria-labelledby={section.heading.id}
			className="scroll-mt-24 space-y-8 border-t border-border pt-12 sm:space-y-10 sm:pt-14"
			id={section.sectionId}
		>
			<SectionHeading heading={section.heading} />

			<div className="divide-y divide-border/90 border-t border-border/90">
				{section.items.map((item) => (
					<ExperienceRow
						item={item}
						key={`${item.role}-${item.organization}`}
					/>
				))}
			</div>
		</section>
	);
}
