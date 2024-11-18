import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */

};


export default nextConfig;


// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*',  // Mengarahkan ke server API
      },
    ];
  },
  output: 'standalone',
  images: {
    domains: ['example.com', 'cdn.example.com', 'pagedone.io', 'umedalife.jp', 'fakestoreapi.com'],  // Menambahkan domain tempat gambar Anda berasal
  },
};
