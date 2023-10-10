/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // output: 'export',
    distDir: '_static',
    images: {
        unoptimized: true
    },
    publicRuntimeConfig: {
        backendHost: 'http://localhost:8080'
    },

}

module.exports = nextConfig
