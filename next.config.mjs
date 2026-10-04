/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL("https://utfs.io/**"),
      new URL("https://file.garden/**"),
      new URL("https://www.trulle123.se/88x31.png"),
    ],
  },
};

export default nextConfig;
