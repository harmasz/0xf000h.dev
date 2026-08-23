import { MobileNavigation } from "@/components/home/mobile-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import type { NavigationItem } from "@/content/home";

type SiteHeaderProps = Readonly<{
	navigation: ReadonlyArray<NavigationItem>;
}>;

export function SiteHeader({ navigation }: SiteHeaderProps) {
	return (
		<header className="flex items-start justify-between gap-6 md:items-center">
			<MobileNavigation navigation={navigation} />

			<nav
				aria-label="Primary"
				className="motion-reveal hidden md:block"
				style={{ animationDelay: "40ms" }}
			>
				<ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
					{navigation.map((item) => (
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
				className="motion-reveal hidden md:block"
				style={{ animationDelay: "90ms" }}
			>
				<ThemeToggle />
			</div>
		</header>
	);
}
