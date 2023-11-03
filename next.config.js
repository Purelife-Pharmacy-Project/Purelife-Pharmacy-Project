/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.pravatar.cc'],
  },
  async redirects() {
    return [
      // {
      //   source: '/my-account',
      //   destination: '/my-account/personal-details',
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;
