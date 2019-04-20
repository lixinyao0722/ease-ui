import { md5 } from '../build/util';
import { CacheLoaderOptions, CacheLoaderOptionsMap, Dictionary } from './types';
import { CacheKey } from './constants/cache-loader';

function createOptionsMap(cacheDirectoryMap: Dictionary): CacheLoaderOptionsMap {
  const optionsMap: CacheLoaderOptionsMap = {};
  for (const key in cacheDirectoryMap) {
    const cacheDirectory: string = cacheDirectoryMap[key];
    // generate options right here
    const options: CacheLoaderOptions = {
      cacheDirectory,
      cacheIdentifier: md5(cacheDirectory),
    };
    optionsMap[key] = options;
  }
  return optionsMap;
}

const cacheDirectoryMap = {
  [CacheKey.VUE_LOADER]: 'node_modules/.cache/vue-loader',
  [CacheKey.TS_LOADER]: 'node_modules/.cache/ts-loader',
  [CacheKey.BABEL_LOADER]: 'node_modules/.cache/babel-loader',
};
const optionsMap: CacheLoaderOptionsMap = createOptionsMap(cacheDirectoryMap);

export default optionsMap;