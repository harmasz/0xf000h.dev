"use client";

import { useRef } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { MenuIcon } from "@/components/ui/icons";
import type { NavigationItem } from "@/content/home";

type MobileNavigationProps = Readonly<{
	navigation: ReadonlyArray<NavigationItem>;
}>;

export function MobileNavigation({ navigation }: MobileNavigationProps) {
	const detailsRef = useRef<HTMLDetailsElement>(null);

	const closeMenu = () => {
		if (detailsRef.current) {
			detailsRef.current.open = false;
		}
	};

	return (
		<details
			className="motion-reveal group w-full md:hidden"
			ref={detailsRef}
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
									onClick={closeMenu}
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
	);
}
