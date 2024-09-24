/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.msafely.com'], // 添加你要加载图片的域名
  }
};

export default nextConfig;
