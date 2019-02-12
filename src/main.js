import names from './names';
import type from './getName';
import {
  isUndefined,
  isNull,
  isBoolean,
  isString,
  isNumber,
  isObject,
  isSymbol,
  isFunction,
} from './check';
import {
  isInt,
  isFloat,
  isNaN,
  isInfinity,
  isNone,
  isArray,
} from './expandCheck';

export default {
  names,
  type,
  // 基本类型
  isUndefined,
  isNull,
  isBoolean,
  isString,
  isNumber,
  isObject,
  isSymbol,
  isFunction,
  // expand
  isInt,
  isFloat,
  isNaN,
  isInfinity,
  isNone,
  isArray,
};
