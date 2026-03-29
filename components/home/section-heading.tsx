import type { SectionHeadingContent } from "@/content/home";

type SectionHeadingProps = Readonly<{
	heading: SectionHeadingContent;
}>;

export function SectionHeading({ heading }: SectionHeadingProps) {
	return (
		<div className="max-w-2xl space-y-4">
			<p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">
				{heading.eyebrow}
			</p>
			<h2
				className="max-w-xl text-[clamp(1.7rem,1.45rem+0.8vw,2.35rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground"
				id={heading.id}
			>
				{heading.title}
			</h2>
			{heading.description ? (
				<p className="font-reading max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base">
					{heading.description}
				</p>
			) : null}
		</div>
	);
}
