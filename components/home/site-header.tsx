import { ThemeToggle } from "@/components/theme-toggle";
import { MenuIcon } from "@/components/ui/icons";
import type { NavigationItem } from "@/content/home";

type SiteHeaderProps = Readonly<{
	navigation: ReadonlyArray<NavigationItem>;
}>;

export function SiteHeader({ navigation }: SiteHeaderProps) {
	return (
		<header className="flex items-start justify-between gap-6">
			<details
				className="motion-reveal group w-full md:hidden"
				style={{ animationDelay: "40ms" }}
			>
				<summary className="flex w-fit list-none items-center gap-2 rounded-full border border-border/70 bg-surface/88 px-4 py-2.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground shadow-[var(--shadow-soft)] marker:hidden">
					<MenuIcon className="size-4" strokeWidth={1.8} />
					Menu
				</summary>

				<div className="mt-4 space-y-5 rounded-[1.5rem] border border-border bg-surface p-5 shadow-[var(--shadow-panel)]">
					<nav aria-label="Primary">
						<ul className="space-y-3">
							{navigation.map((item) => (
								<li key={item.href}>
									<a
										className="interactive-underline font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
										href={item.href}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<div>
						<ThemeToggle />
					</div>
				</div>
			</details>

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
