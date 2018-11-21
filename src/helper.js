import type from './type';
import names from './names.yml';

function isUndefined(target) {
  return type(target) === names.undefined;
}
function isNull(target) {
  return type(target) === names.null;
}
function isBoolean(target) {
  return type(target) === names.boolean;
}
function isString(target) {
  return type(target) === names.string;
}
function isNumber(target) {
  return type(target) === names.number;
}
function isObject(target) {
  return type(target) === names.object;
}
function isSymbol(target) {
  return type(target) === names.symbol;
}
function isFunction(target) {
  return type(target) === names.function;
}
function isArray(target) {
  return type(target) === names.array;
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
  isArray,
};
