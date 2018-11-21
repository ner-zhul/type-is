import names from './names.yml';

function type(value) {
  switch (typeof value) {
    case 'undefined':
      return names.undefined;
    case 'boolean':
      return names.boolean;
    case 'string':
      return names.string;
    case 'number':
      return names.number;
    case 'object':
      if (Object.is(value, null)) {
        return names.null;
      }
      if (Array.isArray(value)) {
        return names.array;
      }
      return names.object;
    case 'symbol':
      return names.symbol;
    case 'function':
      return names.function;
    default:
      return undefined;
  }
}

export default {
  names,
  type,
  // 基本类型
  // isUndefined,
  // isNull,
  // isBoolean,
  // isString,
  // isNumber,
  // isObject,
  // isSymbol,
  // isFunction
};
