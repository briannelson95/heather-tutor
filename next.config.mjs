/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './sanity/lib/imageLoader.ts'
    }
};

export default nextConfig;
