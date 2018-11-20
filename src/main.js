/**
 * Js 的基本数据类型：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）、Symbol
 * 此外还有函数
 */
/**
 * 定义了一系列类型
 */
const type = {
  // 基本类型
  undefined: 'undefined',
  null: 'null',
  boolean: 'boolean',
  string: 'string',
  // number: 'number', // 拆分为子类型
  // object: 'object', // 拆分为子类型
  symbol: 'symbol',
  function: 'function',
  // 自定义的数据类型
  int: 'int', // number
  float: 'float', // number
  nan: 'NaN', // number
  infinity: 'Infinity', // number
  array: 'array', // object
  objectExceptArray: 'objectExceptArray', // object
  // 未知的类型
  unknown: 'unknown',
};

const combinationType = {
  number: [type.int, type.float, type.nan, type.infinity],
  object: [type.array, type.objectExceptArray],
};

/**
 * 获取一个变量的类型
 * @param value 要获取类型的变量
 * @returns {string} 类型
 */
function getType(value) {
  switch (typeof value) {
    case 'undefined':
      return type.undefined;
    case 'boolean':
      return type.boolean;
    case 'string':
      return type.string;
    case 'number':
      if (Number.isNaN(value)) {
        return type.nan;
      } if (!Number.isFinite(value)) {
        return type.infinity;
      } if (Number.isInteger(value)) {
        return type.int;
      }
      return type.float;
    case 'object':
      if (Object.is(value, null)) {
        return type.null;
      } if (Array.isArray(value)) {
        return type.array;
      }
      return type.objectExceptArray;
    case 'symbol':
      return type.symbol;
    case 'function':
      return type.function;
    default:
      return type.unknown;
  }
}

// 基本类型
function isUndefined(value) {
  return getType(value) === type.undefined;
}
function isNull(value) {
  return getType(value) === type.null;
}
function isBoolean(value) {
  return getType(value) === type.boolean;
}
function isString(value) {
  return getType(value) === type.string;
}
function isNumber(value) {
  return combinationType.number.includes(getType(value));
}
function isObject(value) {
  return combinationType.object.includes(getType(value));
}
function isSymbol(value) {
  return getType(value) === type.symbol;
}
function isFunction(value) {
  return getType(value) === type.function;
}
// 自定义的数据类型
function isInt(value) {
  return getType(value) === type.int;
}
function isFloat(value) {
  return getType(value) === type.float;
}
function isNan(value) {
  return getType(value) === type.nan;
}
function isInfinity(value) {
  return getType(value) === type.infinity;
}
function isArray(value) {
  return getType(value) === type.array;
}
function isObjectExceptArray(value) {
  return getType(value) === type.objectExceptArray;
}
// 未知的类型
function isUnknown(value) {
  return getType(value) === type.unknown;
}
// 扩展的快捷方法
function isUndefinedOrNull(value) {
  return [type.undefined, type.null].includes(getType(value));
}

export default {
  type,
  getType,
  // 基本类型
  isUndefined,
  isNull,
  isBoolean,
  isString,
  isNumber,
  isObject,
  isSymbol,
  isFunction,
  // 自定义的数据类型
  isInt,
  isFloat,
  isNan,
  isInfinity,
  isArray,
  isObjectExceptArray,
  // 扩展的快捷方法
  isUndefinedOrNull,
  // 未知的类型
  isUnknown,
};
