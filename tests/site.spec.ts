import { expect, test } from "@playwright/test";

import { homePageContent } from "../content/home";
import { siteConfig } from "../lib/site";

test("homepage exposes landmarks and working social metadata", async ({
	page,
	request,
}) => {
	const pageErrors: string[] = [];
	page.on("pageerror", (error) => pageErrors.push(error.message));
	const response = await page.goto("/");

	expect(response?.status()).toBe(200);
	await expect(page.getByRole("banner")).toBeVisible();
	await expect(
		page.getByRole("main").getByRole("heading", {
			level: 1,
			name: homePageContent.hero.title,
		}),
	).toBeVisible();
	await expect(page.getByRole("contentinfo")).toBeVisible();
	await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
		"href",
		siteConfig.url,
	);

	const imageUrl = await page
		.locator('meta[property="og:image"]')
		.getAttribute("content");
	expect(imageUrl).toBeTruthy();
	const imagePath = new URL(imageUrl ?? "", siteConfig.url);
	expect(imagePath.origin).toBe(siteConfig.url);
	const image = await request.get(`${imagePath.pathname}${imagePath.search}`);
	expect(image.status()).toBe(200);
	expect(image.headers()["content-type"]).toContain("image/png");
	expect(pageErrors).toEqual([]);
});

test("mobile navigation reaches a section and closes the menu", async ({
	page,
}) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await page.emulateMedia({ reducedMotion: "reduce" });
	await page.goto("/");
	await page.getByText("Menu", { exact: true }).click();
	await expect(page.locator("details")).toHaveAttribute("open", "");
	await page.getByRole("link", { name: "Contact", exact: true }).click();
	await expect(page).toHaveURL(/#contact$/);
	await expect(page.locator("details")).not.toHaveAttribute("open");
	await expect(page.locator("#contact")).toBeInViewport();
	expect(
		await page.evaluate(
			() => document.documentElement.scrollWidth <= window.innerWidth,
		),
	).toBe(true);
});

test("theme selection persists and system mode follows the device", async ({
	page,
}) => {
	await page.emulateMedia({ colorScheme: "light" });
	await page.goto("/");
	await expect(
		page.getByRole("button", { name: "Use system theme" }),
	).toHaveAttribute("aria-pressed", "true");
	await page.getByRole("button", { name: "Use dark theme" }).click();
	await expect(page.locator("html")).toHaveClass(/dark/);
	await page.reload();
	await expect(page.locator("html")).toHaveClass(/dark/);
	await expect(
		page.getByRole("button", { name: "Use dark theme" }),
	).toHaveAttribute("aria-pressed", "true");
	await page.getByRole("button", { name: "Use light theme" }).click();
	await expect(page.locator("html")).toHaveClass(/light/);
	await page.getByRole("button", { name: "Use system theme" }).click();
	await page.emulateMedia({ colorScheme: "dark" });
	await expect(page.locator("html")).toHaveClass(/dark/);
});

test("legacy-domain redirects preserve paths and query strings", async ({
	request,
}) => {
	for (const path of ["/?ref=old", "/notes/example?ref=old&view=full"]) {
		const response = await request.get(path, {
			headers: { host: "0xf000h.dev" },
			maxRedirects: 0,
		});
		expect(response.status()).toBe(308);
		expect(new URL(response.headers().location).href).toBe(
			new URL(path, siteConfig.url).href,
		);
	}

	const canonical = await request.get("/", {
		headers: { host: "harmasz.dev" },
		maxRedirects: 0,
	});
	expect(canonical.status()).toBe(200);
});

test("crawler endpoints and missing pages return the expected responses", async ({
	request,
}) => {
	const robots = await request.get("/robots.txt");
	expect(robots.status()).toBe(200);
	expect(await robots.text()).toContain(
		`Sitemap: ${siteConfig.url}/sitemap.xml`,
	);
	const sitemap = await request.get("/sitemap.xml");
	expect(sitemap.status()).toBe(200);
	expect(await sitemap.text()).toContain(`<loc>${siteConfig.url}</loc>`);
	const missingPage = await request.get("/this-page-does-not-exist");
	expect(missingPage.status()).toBe(404);
});
