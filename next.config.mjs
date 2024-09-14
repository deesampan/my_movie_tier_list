/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['i.ibb.co'], // Add the allowed external domains here
        remotePatterns: [
        {
          protocol: "http",
          hostname: process.env.VERCEL_URL,
          port: "",
        },
      ],
    },eslint:{
      ignoreDuringBuilds:true,
    },env: {
    customKey: 'my-value',
    },
  };
  
  export default nextConfig; // Use export default for ES module syntax
  