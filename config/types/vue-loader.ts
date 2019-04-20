import { CacheLoaderOptions } from './cache-loader';

export interface VueLoaderOptions extends CacheLoaderOptions {
    compilerOptions: CompilerOptions;
}

interface CompilerOptions {
    preserveWhitespace: boolean;
}