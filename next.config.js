/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Uncomment below line for production build - Generates index.html
    output: 'standalone',
    images: {
        unoptimized: true
    },
}

module.exports = nextConfig
