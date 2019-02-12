import getName from './getName';
import names from './names';

function isNaN(target) {
  if (getName(target) === names.number) {
    return Number.isNaN(target);
  }
  return false;
}
function isInfinity(target) {
  if (getName(target) === names.number) {
    return !Number.isFinite(target);
  }
  return false;
}
function isInt(target) {
  if (getName(target) === names.number) {
    if (!isNaN(target) || !isInfinity(target)) {
      return Number.isInteger(target);
    }
  }
  return false;
}
function isFloat(target) {
  if (getName(target) === names.number) {
    if (!isNaN(target) || !isInfinity(target)) {
      return !Number.isInteger(target);
    }
  }
  return false;
}
function isNone(target) {
  return [names.null, names.undefined].includes(getName(target));
}
function isArray(target) {
  if (getName(target) === names.object) {
    return target instanceof Array;
  }
  return false;
}

export {
  isInt, isFloat, isNaN, isInfinity, isNone, isArray,
};
