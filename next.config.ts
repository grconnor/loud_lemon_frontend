import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  sassOptions: {
    silenceDeprecations: ["import", "color-functions", "global-builtin"],
    includePaths: ["src/styles"],
  },
};

export default nextConfig;
