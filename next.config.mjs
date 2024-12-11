/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 's.gravatar.com',
          pathname: '**',
        },
      ],
    },
};

export default nextConfig;
