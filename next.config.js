/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: '',
                pathname: '/',
              },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                port: '',
                pathname: '/**',
              }
        ],
        domains: ['i.ibb.co','cdn.jsdelivr.net','img.youtube.com'],
    },
}

module.exports = nextConfig
