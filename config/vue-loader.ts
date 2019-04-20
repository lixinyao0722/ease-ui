import { CacheLoaderOptions, VueLoaderOptions } from './types';
import { cacheLoaderOptionsMap } from '.';
import { CacheKey } from './constants/cache-loader';

const cacheLoaderOptions: CacheLoaderOptions = cacheLoaderOptionsMap[CacheKey.VUE_LOADER];
const options: VueLoaderOptions = {
  compilerOptions: {
    preserveWhitespace: false,
  },
  ...cacheLoaderOptions,
};

export default options;