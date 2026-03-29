import { readFile } from "node:fs/promises";

import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.author} - ${siteConfig.role}`;
export const contentType = "image/png";
export const runtime = "nodejs";
export const size = {
	width: 1200,
	height: 630,
};

const portraitPath = new URL("../public/profile/me-hero.jpg", import.meta.url);

export default async function OpenGraphImage() {
	const portraitBuffer = await readFile(portraitPath);
	const portraitSrc = `data:image/jpeg;base64,${portraitBuffer.toString("base64")}`;

	return new ImageResponse(
		<div
			style={{
				display: "flex",
				height: "100%",
				width: "100%",
				position: "relative",
				overflow: "hidden",
				background:
					"radial-gradient(circle at top left, rgba(59, 130, 246, 0.06) 0%, rgba(59, 130, 246, 0) 26%), linear-gradient(180deg, rgb(249, 250, 251) 0%, rgb(244, 247, 250) 100%)",
				color: "rgb(15, 23, 42)",
				fontFamily: "system-ui, sans-serif",
			}}
		>
			<div
				style={{
					display: "flex",
					flex: 1,
					padding: "54px",
					alignItems: "center",
					justifyContent: "space-between",
					gap: "64px",
				}}
			>
				<div
					style={{
						display: "flex",
						flex: "0 0 64%",
						flexDirection: "column",
						gap: "20px",
					}}
				>
					<div
						style={{
							display: "flex",
							fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
							fontSize: 13,
							letterSpacing: "0.18em",
							textTransform: "uppercase",
							color: "rgb(59, 130, 246)",
						}}
					>
						{siteConfig.author}
					</div>

					<div
						style={{
							display: "flex",
							maxWidth: "560px",
							fontSize: 56,
							fontWeight: 600,
							lineHeight: 1.04,
							letterSpacing: "-0.055em",
						}}
					>
						I help SaaS companies turn product clarity into growth.
					</div>

					<div
						style={{
							display: "flex",
							maxWidth: "620px",
							fontSize: 18,
							lineHeight: 1.7,
							color: "rgb(100, 116, 139)",
						}}
					>
						I work across product leadership, systems, and implementation to
						help teams make better bets, ship with more focus, and build
						products that support real business outcomes.
					</div>

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "16px",
							paddingTop: "12px",
						}}
					>
						<div
							style={{
								display: "flex",
								width: "100%",
								height: "1px",
								background: "rgba(203, 213, 225, 0.95)",
							}}
						/>

						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "30px",
								fontSize: 14,
							}}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "10px",
								}}
							>
								<span
									style={{
										display: "flex",
										fontFamily:
											"ui-monospace, SFMono-Regular, Menlo, monospace",
										fontSize: 11,
										letterSpacing: "0.16em",
										textTransform: "uppercase",
										color: "rgb(100, 116, 139)",
									}}
								>
									Role
								</span>
								<span
									style={{
										display: "flex",
										fontSize: 15,
										color: "rgb(15, 23, 42)",
									}}
								>
									{siteConfig.role}
								</span>
							</div>

							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "10px",
								}}
							>
								<span
									style={{
										display: "flex",
										fontFamily:
											"ui-monospace, SFMono-Regular, Menlo, monospace",
										fontSize: 11,
										letterSpacing: "0.16em",
										textTransform: "uppercase",
										color: "rgb(100, 116, 139)",
									}}
								>
									Base
								</span>
								<span
									style={{
										display: "flex",
										fontSize: 15,
										color: "rgb(15, 23, 42)",
									}}
								>
									{siteConfig.location}
								</span>
							</div>
						</div>
					</div>
				</div>

				<div
					style={{
						display: "flex",
						flex: "0 0 auto",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							display: "flex",
							width: "240px",
							height: "300px",
							overflow: "hidden",
							borderRadius: "28px",
							background: "rgb(226, 232, 240)",
							boxShadow: "0 20px 50px -36px rgba(15, 23, 42, 0.28)",
						}}
					>
						{/* biome-ignore lint/performance/noImgElement: next/og image routes render standard img elements. */}
						<img
							alt={alt}
							src={portraitSrc}
							style={{
								display: "flex",
								height: "100%",
								width: "100%",
								borderRadius: "28px",
								objectFit: "cover",
								objectPosition: "50% 24%",
							}}
						/>
					</div>
				</div>
			</div>
		</div>,
		size,
	);
}
