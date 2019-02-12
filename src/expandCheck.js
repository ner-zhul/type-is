import getType from './type';
import names from './names';

function isNaN(target) {
  if (getType(target) === names.number) {
    return Number.isNaN(target);
  }
  return false;
}
function isInfinity(target) {
  if (getType(target) === names.number) {
    return !Number.isFinite(target);
  }
  return false;
}
function isInt(target) {
  if (getType(target) === names.number) {
    if (!isNaN(target) || !isInfinity(target)) {
      return Number.isInteger(target);
    }
  }
  return false;
}
function isFloat(target) {
  if (getType(target) === names.number) {
    if (!isNaN(target) || !isInfinity(target)) {
      return !Number.isInteger(target);
    }
  }
  return false;
}
function isNone(target) {
  return [names.null, names.undefined].includes(getType(target));
}
function isArray(target) {
  if (getType(target) === names.object) {
    return target instanceof Array;
  }
  return false;
}

export {
  isInt, isFloat, isNaN, isInfinity, isNone, isArray,
};
