import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    experimental: {
      ppr: 'incremental', // mod for Chapter 10
      serverActions: {
        allowedOrigins: ["https://stunning-train-6xxqrxxwxxx25px6.github.dev/stunning-train-6xxqrxxwxxx25px6.github.dev", "localhost:3000"],
    }, // Added for 
    },
  }; 

export default nextConfig;