import { Configuration, DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import { resolve } from './util';
import { cacheLoaderOptionsMap, tsLoaderOptions, urlLoaderOptions, vueLoaderOptions } from '../config';
import { scssOneOfRules } from './styles';
import { CacheKey } from '../config/constants/cache-loader';
import { VueLoaderPlugin } from 'vue-loader/lib';
import CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
import FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
import ProgressPlugin from 'progress-webpack-plugin';

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
  plugins: [
    new VueLoaderPlugin(), // https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BASE_URL: JSON.stringify('/'),
      },
    }),
    new CaseSensitivePathsPlugin(),
    new FriendlyErrorsPlugin(),
    new HotModuleReplacementPlugin(),
    new ProgressPlugin(),
  ],
};

// console.log(JSON.stringify(config, null, 2));

export default config;
