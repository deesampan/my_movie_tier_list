/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['i.ibb.co'], // Add the allowed external domains here
        remotePatterns: [
        {
          protocol: "http",
          hostname: process.env.NEXT_PUBLIC_API_URL,
          port: "3000",
        },
      ],
    },eslint:{
      ignoreDuringBuilds:true,
    },env: {
    customKey: 'my-value',
    },
  };
  
  export default nextConfig; // Use export default for ES module syntax
  