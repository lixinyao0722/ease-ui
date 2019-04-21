import { Options } from 'html-webpack-plugin';
import { resolve } from '../build/util';

export default {
  template: resolve('./templates/index.html'),
  templateParameters: {
    TITLE: 'Ease UI',
    BASE_URL: '/ease-ui/',
  },
} as Options;
