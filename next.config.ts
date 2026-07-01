import type { NextConfig } from "next";

const nextConfig: NextConfig =
  process.env.GITHUB_PAGES === "true"
    ? {
        output: "export",
        trailingSlash: true,
        typescript: {
          tsconfigPath: "tsconfig.pages.json",
        },
      }
    : {};

export default nextConfig;
