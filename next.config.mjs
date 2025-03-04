/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "dist", // Change output directory to "dist" like Vite
    images: {
      unoptimized: true, // Avoids Next.js Image Optimization (needed for static builds)
    },
  };
  
  export default nextConfig; // Use "export default" instead of "module.exports"
  