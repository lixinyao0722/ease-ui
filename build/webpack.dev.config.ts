import * as webpack from 'webpack';
import { resolve } from './util';

const config: webpack.Configuration = {
    mode: 'development',
    entry: resolve('src/index.js'),
    output: {
        path: resolve('dist'),
        filename: 'app.[chunkhash].js',
    },
    module: {
        noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: 'node_modules',
                include: 'src',
            },
            {
                test: /\.vue$/,
                use: [],
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
};

export default config;