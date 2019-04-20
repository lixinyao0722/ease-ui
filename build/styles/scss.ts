import { RuleSetRule } from 'webpack';
import { PostcssLoaderOptions, SassLoaderOptions, VueStyleLoaderOptions } from '../../config/types';
import { CreateRulesOption } from './types/scss';

function createRule(option: CreateRulesOption): RuleSetRule {
  let {cssLoaderOptions, resourceQuery} = option;
  cssLoaderOptions = Object.assign({
    sourceMap: false,
    importLoaders: 2,
  }, cssLoaderOptions);

  const rule: RuleSetRule = {
    use: [
      {
        loader: 'vue-style-loader',
        options: {
          sourceMap: false,
          shadowMode: false,
        } as VueStyleLoaderOptions,
      },
      {
        loader: 'css-loader',
        options: cssLoaderOptions,
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: false,
        } as PostcssLoaderOptions,
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: false,
        } as SassLoaderOptions,
      },
    ],
  };
  if (resourceQuery) {
    rule.resourceQuery = resourceQuery;
  }

  return rule;
}

function createRules(options: CreateRulesOption[]): RuleSetRule[] {
  const rules: RuleSetRule[] = options.map(option => createRule(option));
  return rules;
}

const localIdentName: string = '[name]_[local]_[hash:base64:5]';
const options: CreateRulesOption[] = [
  {
    resourceQuery: /module/, // vue-modules
    cssLoaderOptions: {
      modules: true,
      localIdentName,
    },
  },
  {
    resourceQuery: /\?vue/, // vue
  },
  {
    resourceQuery: /\.module\.\w+$/, // normal-modules
    cssLoaderOptions: {
      modules: true,
      localIdentName,
    },
  },
  {
    // normal
  },
];

const rules: RuleSetRule[] = createRules(options);

export default rules;