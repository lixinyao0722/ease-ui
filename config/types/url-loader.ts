import { FileLoaderOptions } from './file-loader';

export interface UrlLoaderOptions {
    limit: number;
    fallback: Fallback;
}

interface Fallback {
    loader: string;
    options: FileLoaderOptions;
}