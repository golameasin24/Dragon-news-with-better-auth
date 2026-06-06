/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // এখানে শুধু ডাবল স্টার হ্যাট (**) হবে, কোনো স্ল্যাশ (/) থাকবে না
      },
      {
        protocol: "http", // অনেক সময় কিছু পুরোনো সাইটে http থাকে, তাই এটাও ব্যাকআপ হিসেবে রাখা ভালো
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
