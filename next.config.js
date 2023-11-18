/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "encrypted-tbn0.gstatic.com",
            },

            {
                protocol: "https",
                hostname: "logo.com",
              },

            {
                protocol: "https",
                hostname: "banhmigachdo.com",
            },

            {
              protocol: "https",
              hostname: "d33byq9npfy6u9.cloudfront.net",
            },
        ]
      },
}

module.exports = nextConfig
