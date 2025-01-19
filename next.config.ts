import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    SLEEPER_API_URL: process.env.SLEEPER_API_URL,
    SLEEPER_LEAGUE_ID: process.env.SLEEPER_LEAGUE_ID,
  },
};

export default nextConfig;
