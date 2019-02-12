import getType from './type';
import names from './names';

function isUndefined(target) {
  return getType(target) === names.undefined;
}
function isNull(target) {
  return getType(target) === names.null;
}
function isBoolean(target) {
  return getType(target) === names.boolean;
}
function isString(target) {
  return getType(target) === names.string;
}
function isNumber(target) {
  return getType(target) === names.number;
}
function isObject(target) {
  return getType(target) === names.object;
}
function isSymbol(target) {
  return getType(target) === names.symbol;
}
function isFunction(target) {
  return getType(target) === names.function;
}

export {
  isUndefined,
  isNull,
  isBoolean,
  isString,
  isNumber,
  isObject,
  isSymbol,
  isFunction,
};
