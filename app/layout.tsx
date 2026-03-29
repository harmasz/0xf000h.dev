import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";

const bodyFont = Geist({
	subsets: ["latin"],
	variable: "--font-body",
});

const monoFont = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-code",
});

export const metadata: Metadata = {
	applicationName: siteConfig.name,
	title: {
		default: `${siteConfig.author} | ${siteConfig.role}`,
		template: `%s | ${siteConfig.author}`,
	},
	description: siteConfig.description,
	authors: [
		{
			name: siteConfig.author,
			url: siteConfig.url,
		},
	],
	creator: siteConfig.author,
	publisher: siteConfig.author,
	keywords: [...siteConfig.keywords],
	metadataBase: new URL(siteConfig.url),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		url: siteConfig.url,
		title: `${siteConfig.author} | ${siteConfig.role}`,
		description: siteConfig.description,
		siteName: siteConfig.name,
		locale: "en_US",
		images: [
			{
				url: "/opengraph-image",
				width: 1200,
				height: 630,
				alt: `${siteConfig.author} - ${siteConfig.role}`,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: `${siteConfig.author} | ${siteConfig.role}`,
		description: siteConfig.description,
		creator: siteConfig.socials.xHandle,
		images: [
			{
				url: "/opengraph-image",
				alt: `${siteConfig.author} - ${siteConfig.role}`,
			},
		],
	},
	category: "technology",
};

type RootLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			className={`${bodyFont.variable} ${monoFont.variable}`}
			lang="en"
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					disableTransitionOnChange
					enableSystem
				>
					{children}
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
