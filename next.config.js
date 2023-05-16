/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const nextConfig = withPWA({
  reactStrictMode: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.rawg.io',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
  pwa: {
      disable: process.env.NODE_ENV !== 'production',
      dest: 'public',
      runtimeCaching,
      buildExcludes: [/middleware-manifest.json$/],
    },
})

module.exports = nextConfig
