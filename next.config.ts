import type { NextConfig } from "next";
// import nextTranspileModules from 'next-transpile-modules';
// const withTM = nextTranspileModules(['@ant-design/icons-svg']);

const nextConfig: NextConfig = {
  // output: 'export',
  /* config options here */
  reactStrictMode: false,
   transpilePackages: [
    "antd",
    // "rc-util",
    // "@babel/runtime",
    "@ant-design/icons",
    "@ant-design/icons-svg"
  ],
};

export default nextConfig;

// const nextConfig = {
//   reactStrictMode: false,
 
// };

// export default nextConfig;
