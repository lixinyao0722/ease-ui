import { UrlLoaderOptions } from './types';
import { fileLoaderOptions } from '.';

const options: UrlLoaderOptions = {
    limit: 4 * 1024, // kb
    fallback: {
        loader: 'file-loader',
        options: fileLoaderOptions,
    },
};

export default options;