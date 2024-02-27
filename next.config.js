/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Uncomment below line for production build - Generates index.html
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
