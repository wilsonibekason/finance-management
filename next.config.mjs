/** @type {import('next').NextConfig} */
const hostnames = [
  "images.unsplash.com",
  "hydeparkwinterwonderland.com",
  "wembleypark.com",
  "res.cloudinary.com", // Cloudinary added
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default nextConfig;
