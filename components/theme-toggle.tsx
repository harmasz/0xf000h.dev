"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const themeOptions = [
	{ label: "System", value: "system" },
	{ label: "Light", value: "light" },
	{ label: "Dark", value: "dark" },
] as const;

const emptySubscribe = () => () => {};

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();
	const mounted = useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false,
	);

	const activeTheme = mounted ? (theme ?? "system") : null;

	return (
		<div className="inline-flex items-center gap-2 rounded-full border border-border/55 bg-surface/48 p-1 shadow-[0_16px_34px_-30px_rgb(15_23_42_/_0.16)] backdrop-blur-[2px] dark:shadow-[0_18px_40px_-30px_rgb(2_6_23_/_0.48)]">
			<fieldset className="inline-flex min-w-0 items-center gap-1 border-0 p-0">
				<legend className="sr-only">Theme switcher</legend>
				{themeOptions.map((option) => {
					const isActive = option.value === activeTheme;

					return (
						<Button
							key={option.value}
							aria-pressed={isActive}
							className={cn(
								"min-w-16 rounded-full px-3.5",
								isActive &&
									"border-transparent bg-foreground text-background hover:bg-foreground",
							)}
							onClick={() => setTheme(option.value)}
							size="sm"
							type="button"
							variant={isActive ? "default" : "ghost"}
						>
							{option.label}
						</Button>
					);
				})}
			</fieldset>
		</div>
	);
}
