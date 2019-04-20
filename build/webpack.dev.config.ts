import { Configuration } from 'webpack';
import { resolve } from './util';
import { cacheLoaderOptionsMap, tsLoaderOptions, urlLoaderOptions, vueLoaderOptions } from '../config';
import { scssOneOfRules } from './styles';
import { CacheKey } from '../config/constants/cache-loader';

console.log(resolve('src/index.js'));

const config: Configuration = {
  mode: 'development',
  context: resolve('.'), // set the project root
  entry: resolve('src/index.ts'),
  output: {
    path: resolve('dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
            options: cacheLoaderOptionsMap[CacheKey.VUE_LOADER],
          },
          {
            loader: 'vue-loader',
            options: vueLoaderOptions,
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        loader: 'url-loader',
        options: urlLoaderOptions,
      },
      {
        test: /\.scss$/,
        oneOf: scssOneOfRules,
      },
      {
        test: /\.m?jsx?$/,
        use: [
          {
            loader: 'cache-loader',
            options: cacheLoaderOptionsMap[CacheKey.BABEL_LOADER],
          },
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'cache-loader',
            options: cacheLoaderOptionsMap[CacheKey.TS_LOADER],
          },
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: tsLoaderOptions,
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.vue', '.tsx', '.ts', '.jsx', '.js', '.scss', '.json'],
    alias: {
      '@': resolve('src'),
      vue$: 'vue/dist/vue.runtime.esm.js',
    },
  },
  devtool: '#@cheap-module-eval-source-map',
  plugins: [],
};

// console.log(JSON.stringify(config, null, 2));

export default config;
