import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: [
            path.join(__dirname, 'components'),
        ],
    },
};

export default nextConfig;
