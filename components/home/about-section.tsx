import { SectionHeading } from "@/components/home/section-heading";
import type { AboutSectionContent } from "@/content/home";

type AboutSectionProps = Readonly<{
	section: AboutSectionContent;
}>;

export function AboutSection({ section }: AboutSectionProps) {
	return (
		<section
			aria-labelledby={section.heading.id}
			className="scroll-mt-24 space-y-8 border-t border-border pt-12 sm:space-y-10 sm:pt-14"
			id={section.sectionId}
		>
			<SectionHeading heading={section.heading} />

			<div className="max-w-3xl space-y-5">
				{section.paragraphs.map((paragraph) => (
					<p
						className="font-reading text-sm leading-8 text-muted-foreground sm:text-base"
						key={paragraph}
					>
						{paragraph}
					</p>
				))}
			</div>
		</section>
	);
}
