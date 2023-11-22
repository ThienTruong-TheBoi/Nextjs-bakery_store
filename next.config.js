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

            {
              protocol: "https",
              hostname: "vcdn1-suckhoe.vnecdn.net",
            },

            {
              protocol: "https",
              hostname: "down-vn.img.susercontent.com",
            },
        ]
      },
}

module.exports = nextConfig
