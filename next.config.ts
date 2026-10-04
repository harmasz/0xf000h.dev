import type { NextConfig } from "next";

import { siteConfig } from "./lib/site";

const nextConfig: NextConfig = {
	redirects() {
		return [
			{
				source: "/:path*",
				has: [{ type: "host", value: "0xf000h\\.dev" }],
				destination: `${siteConfig.url}/:path*`,
				permanent: true,
			},
		];
	},
};

export default nextConfig;
