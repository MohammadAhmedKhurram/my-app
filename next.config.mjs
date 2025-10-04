/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Disable React Strict Mode
  
    images: {
      domains: ['cdn.sanity.io'], // Allow images from Sanity CDN
    },
  
    typescript: {
      ignoreBuildErrors: true, // ✅ Ignore TypeScript build errors
    },
  
    webpack: (config, { isServer }) => {
      // Add custom rule for .txt files
      config.module.rules.push({
        test: /\.txt$/,
        use: 'raw-loader',
      });
      return config;
    },
  };
  
  export default nextConfig;
  