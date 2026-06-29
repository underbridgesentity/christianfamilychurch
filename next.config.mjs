/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Static export-friendly + remote YouTube thumbnails
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
};

export default nextConfig;
