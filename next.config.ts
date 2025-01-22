import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_SLEEPER_API_URL: process.env.NEXT_PUBLIC_SLEEPER_API_URL,
    NEXT_PUBLIC_SLEEPER_LEAGUE_ID: process.env.NEXT_PUBLIC_SLEEPER_LEAGUE_ID,
  },
};

export default nextConfig;
