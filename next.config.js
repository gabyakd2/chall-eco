/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true
    },
    // env: {
    //     API_URL: ""
    // }
}

module.exports = nextConfig
