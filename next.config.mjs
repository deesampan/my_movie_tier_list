/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['i.ibb.co'], // Add the allowed external domains here
    },eslint:{
      ignoreDuringBuilds:true,
    }
  };
  
  export default nextConfig; // Use export default for ES module syntax
  