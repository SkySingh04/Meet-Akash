/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: '',
                pathname: '/',
              }
        ],
        domains: ['i.ibb.co','cdn.jsdelivr.net'],
    },
}

module.exports = nextConfig
