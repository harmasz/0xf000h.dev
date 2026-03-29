import { CursorGlow } from "@/components/cursor-glow";
import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { HelpSection } from "@/components/home/help-section";
import { HeroSection } from "@/components/home/hero-section";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { homePageContent } from "@/content/home";

export default function HomePage() {
	const currentYear = new Date().getFullYear();

	return (
		<main
			className="min-h-screen overflow-hidden py-[var(--space-section)]"
			id="top"
		>
			<CursorGlow />

			<div className="page-frame relative z-10 space-y-16 sm:space-y-20 lg:space-y-24">
				<SiteHeader navigation={homePageContent.navigation} />
				<HeroSection hero={homePageContent.hero} />
				<HelpSection section={homePageContent.help} />
				<ExperienceSection section={homePageContent.portfolio} />
				<AboutSection section={homePageContent.about} />
				<ContactSection section={homePageContent.contact} />
				<SiteFooter currentYear={currentYear} footer={homePageContent.footer} />
			</div>
		</main>
	);
}
