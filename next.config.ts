import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";


const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  

  //  GitHub Pages base path fix
  basePath: isProd ? "/Hande-Naz-Kavas-Portfolio" : "",
  assetPrefix: isProd ? "/Hande-Naz-Kavas-Portfolio/" : "",


  //reactCompiler: true,

  
};

export default nextConfig;
