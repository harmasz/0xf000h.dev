import type { FooterContent } from "@/content/home";

type SiteFooterProps = Readonly<{
	footer: FooterContent;
	currentYear: number;
}>;

export function SiteFooter({ footer, currentYear }: SiteFooterProps) {
	return (
		<footer className="flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
			<p className="font-reading">
				&copy; {currentYear} {footer.copyrightName}. {footer.description}
			</p>
			<a
				className="interactive-underline font-mono text-[0.68rem] uppercase tracking-[0.14em] transition-colors hover:text-foreground"
				href="#top"
			>
				{footer.returnToTopLabel}
			</a>
		</footer>
	);
}
