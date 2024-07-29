/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: "www.foodpanda.com",
            protocol: "https",
          }
      
    
        ],
      },
};

export default nextConfig;
