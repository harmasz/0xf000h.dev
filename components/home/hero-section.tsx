import Image from "next/image";

import type { HeroContent } from "@/content/home";

type HeroSectionProps = Readonly<{
	hero: HeroContent;
}>;

export function HeroSection({ hero }: HeroSectionProps) {
	return (
		<section
			aria-labelledby={hero.headingId}
			className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(15rem,19rem)] md:items-center md:gap-12 lg:gap-16"
		>
			<div className="order-2 space-y-7 md:order-1">
				<div className="space-y-4">
					<p
						className="motion-reveal font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent"
						style={{ animationDelay: "130ms" }}
					>
						{hero.eyebrow}
					</p>

					<div className="space-y-2">
						<h1
							className="motion-reveal max-w-[15ch] text-[clamp(2.3rem,1.85rem+1.9vw,3.8rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-foreground"
							id={hero.headingId}
							style={{ animationDelay: "180ms" }}
						>
							{hero.title}
						</h1>
					</div>

					<p
						className="motion-reveal font-reading max-w-2xl text-[length:var(--text-lede)] leading-[1.9] text-muted-foreground"
						style={{ animationDelay: "240ms" }}
					>
						{hero.description}
					</p>
				</div>

				<div
					className="motion-reveal flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5"
					style={{ animationDelay: "300ms" }}
				>
					{hero.meta.map((item) => (
						<div className="flex items-center gap-2.5" key={item.label}>
							<span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
								{item.label}
							</span>
							<span className="font-reading text-sm leading-6 text-foreground sm:text-base">
								{item.value}
							</span>
						</div>
					))}
				</div>
			</div>

			<figure
				className="motion-reveal motion-reveal-figure order-1 w-full max-w-[min(78vw,15rem)] md:order-2 md:mx-0 md:justify-self-end md:max-w-[17rem] lg:max-w-[18.5rem]"
				style={{ animationDelay: "220ms" }}
			>
				<div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-surface-strong shadow-[var(--shadow-panel)]">
					<Image
						alt={hero.image.alt}
						className="object-cover object-[50%_24%]"
						fill
						priority
						sizes="(min-width: 1024px) 18.5rem, (min-width: 768px) 15rem, 72vw"
						src={hero.image.src}
					/>
					<div className="absolute inset-0 bg-linear-to-t from-background/28 via-transparent to-transparent" />
					<div className="absolute inset-0 ring-1 ring-border/55 ring-inset" />
				</div>
			</figure>
		</section>
	);
}
