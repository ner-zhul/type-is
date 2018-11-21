import names from './names.yml';
import type from './type';
import {
  isUndefined,
  isNull,
  isBoolean,
  isString,
  isNumber,
  isObject,
  isSymbol,
  isFunction,
  isArray,
} from './helper';
import {
  isInt,
  isFloat,
  isNan,
  isInfinity,
  isNone,
  isTruth,
  isOriginObject,
} from './expandHelper';

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
  isArray,
  // expand
  isInt,
  isFloat,
  isNan,
  isInfinity,
  isNone,
  isTruth,
  isOriginObject,
};
