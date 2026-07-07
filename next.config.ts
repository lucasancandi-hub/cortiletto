import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow accessing the dev server from other devices on the LAN (e.g. a phone
  // at http://192.168.1.5:3000). Without this, Next 16 blocks the JS/HMR dev
  // resources as cross-origin, so the page loads but never becomes interactive.
  allowedDevOrigins: ["192.168.1.5"],
};

export default nextConfig;
