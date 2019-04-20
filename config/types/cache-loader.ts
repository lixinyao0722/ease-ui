export interface CacheLoaderOptions {
    cacheDirectory: string;
    cacheIdentifier: string;
}

export interface CacheLoaderOptionsMap {
  [key: string]: CacheLoaderOptions;
}

