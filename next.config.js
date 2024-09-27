/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'i.pravatar.cc',
  //       port: '',
  //       pathname: 'i.pravatar.cc/**',
  //     },
  //   ],
  // },
  async redirects() {
    return [
      // {
      //   source: '/my-account',
      //   destination: '/my-account/personal-details',
      //   permanent: true,
      // },
      {
        source: '/:path*',
        destination: '/purelife-pharmacy-project2/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
