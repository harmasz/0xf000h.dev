"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { MonitorIcon, MoonIcon, SunIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const themeOptions = [
	{ Icon: MonitorIcon, label: "System", value: "system" },
	{ Icon: SunIcon, label: "Light", value: "light" },
	{ Icon: MoonIcon, label: "Dark", value: "dark" },
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
					const label = `Use ${option.label.toLowerCase()} theme`;

					return (
						<Button
							key={option.value}
							aria-label={label}
							aria-pressed={isActive}
							className={cn(
								"size-8 rounded-full p-0",
								isActive &&
									"border-transparent bg-foreground text-background hover:bg-foreground",
							)}
							onClick={() => setTheme(option.value)}
							size="sm"
							title={label}
							type="button"
							variant={isActive ? "default" : "ghost"}
						>
							<option.Icon className="size-4" strokeWidth={1.8} />
							<span className="sr-only">{option.label}</span>
						</Button>
					);
				})}
			</fieldset>
		</div>
	);
}
