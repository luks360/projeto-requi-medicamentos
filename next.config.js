/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

const images = {
    domains: ['lh3.googleusercontent.com',]
}

module.exports = { nextConfig, images }
