/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
      remotePatterns: [{ hostname: "reachout-demo.reachoutapp.io" }]
    }
  };
export default nextConfig;
