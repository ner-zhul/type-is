import getName from './getName';
import names from './names';

function isUndefined(target) {
  return getName(target) === names.undefined;
}
function isNull(target) {
  return getName(target) === names.null;
}
function isBoolean(target) {
  return getName(target) === names.boolean;
}
function isString(target) {
  return getName(target) === names.string;
}
function isNumber(target) {
  return getName(target) === names.number;
}
function isObject(target) {
  return getName(target) === names.object;
}
function isSymbol(target) {
  return getName(target) === names.symbol;
}
function isFunction(target) {
  return getName(target) === names.function;
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
