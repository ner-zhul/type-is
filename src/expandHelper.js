import type from './type';
import names from './names.yml';

function isInt(target) {
  if (type(target) === names.number) {
    return Number.isInteger(target);
  }
  return false;
}
function isFloat(target) {
  if (type(target) === names.number) {
    return !Number.isInteger(target);
  }
  return false;
}
function isNan(target) {
  if (type(target) === names.number) {
    return Number.isNaN(target);
  }
  return false;
}
function isInfinity(target) {
  if (type(target) === names.number) {
    return !Number.isFinite(target);
  }
  return false;
}
function isNone(target) {
  return [names.null, names.undefined].includes(type(target));
}
function isTruth(target) {
  return !!target;
}
function isOriginObject(target) {
  return [names.null, names.object, names.array].includes(type(target));
}

export {
  isInt, isFloat, isNan, isInfinity, isNone, isTruth, isOriginObject,
};
