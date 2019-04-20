import { RuleSetCondition } from 'webpack';
import { CssLoaderOptions } from '../../../config/types';

export interface CreateRulesOption {
  resourceQuery?: RuleSetCondition;
  cssLoaderOptions?: CssLoaderOptions
}
