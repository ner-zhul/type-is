import names from './names';

/**
 * 判断一个对象是否是 null
 *
 * @param {Object} value 要判断的对象
 * @returns {boolean} 如果 value 是 null，则返回 true
 */
function isNull(value) {
  return value === null;
}

/**
 * 判断一个变量的类型，可以正确的区别 object 和 null
 *
 * @param {any} value 要判断的变量
 * @returns {string} 该变量的类型
 */
function type(value) {
  const typeName = typeof value;
  if (typeName === names.object) {
    // 如果 value 是 object 的话，判断一下是不是 null
    return isNull(value) ? names.null : typeName;
  }
  return typeName;
}

export default type;
