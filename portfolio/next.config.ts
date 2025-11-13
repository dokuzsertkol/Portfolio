import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const isProd = process.env.github_pages === "production";

const nextConfig: NextConfig = {
    output: 'export',
    images: { unoptimized: true },
    basePath: isProd ? "/Portfolio" : "",
    assetPrefix: isProd ? "/Porfolio/" : "",
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);