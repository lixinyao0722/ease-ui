import { TsLoaderOptions } from './types/ts-loader';

const options: TsLoaderOptions = {
  transpileOnly: true,
  appendTsSuffixTo: [
    '\\.vue$',
  ],
  happyPackMode: false,
};

export default options;