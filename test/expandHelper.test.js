import typeIs from '../dist/typeIs';

test('辅助函数 : isInt', () => {
  // 整数
  expect(typeIs.isInt(1)).toBeTruthy();
  expect(typeIs.isInt(-1)).toBeTruthy();
  expect(typeIs.isInt(1.0)).toBeTruthy();
  expect(typeIs.isInt(-1.0)).toBeTruthy();
  // 科学计数
  expect(typeIs.isInt(2e3)).toBeTruthy();
  expect(typeIs.isInt(-2e3)).toBeTruthy();
  // 其他进制
  expect(typeIs.isInt(0o7101)).toBeTruthy();
  expect(typeIs.isInt(-0o7101)).toBeTruthy();
  expect(typeIs.isInt(0b0101)).toBeTruthy();
  expect(typeIs.isInt(-0b0101)).toBeTruthy();
  expect(typeIs.isInt(0xaa3b)).toBeTruthy();
  expect(typeIs.isInt(-0xaa3b)).toBeTruthy();
  //
  expect(typeIs.isInt(1.1)).toBeFalsy();
  expect(typeIs.isInt(-1.2)).toBeFalsy();
  // 科学计数
  expect(typeIs.isInt(3.000001e3)).toBeFalsy();
  expect(typeIs.isInt(-3.0000001e3)).toBeFalsy();
  // 奇葩数值
  expect(typeIs.isInt(NaN)).toBeFalsy();
  expect(typeIs.isInt(Infinity)).toBeFalsy();
});
test('辅助函数 : isFloat', () => {
  expect(typeIs.isFloat(1.1)).toBeTruthy();
  expect(typeIs.isFloat(-1.2)).toBeTruthy();
  // 科学计数
  expect(typeIs.isFloat(3.000001e3)).toBeTruthy();
  expect(typeIs.isFloat(-3.0000001e3)).toBeTruthy();
  //
  expect(typeIs.isFloat(1)).toBeFalsy();
  expect(typeIs.isFloat(-1)).toBeFalsy();
  expect(typeIs.isFloat(1.0)).toBeFalsy();
  expect(typeIs.isFloat(-1.0)).toBeFalsy();
  // 科学计数
  expect(typeIs.isFloat(2e3)).toBeFalsy();
  expect(typeIs.isFloat(-2e3)).toBeFalsy();
  // 其他进制
  expect(typeIs.isFloat(0o7101)).toBeFalsy();
  expect(typeIs.isFloat(-0o7101)).toBeFalsy();
  expect(typeIs.isFloat(0b0101)).toBeFalsy();
  expect(typeIs.isFloat(-0b0101)).toBeFalsy();
  expect(typeIs.isFloat(0xaa3b)).toBeFalsy();
  expect(typeIs.isFloat(-0xaa3b)).toBeFalsy();
  // 奇葩数值
  expect(typeIs.isFloat(NaN)).toBeFalsy();
  expect(typeIs.isFloat(Infinity)).toBeFalsy();
});
test('辅助函数 : isNan', () => {
  expect(typeIs.isNan(NaN)).toBeTruthy();
  expect(typeIs.isNan(0 / 0)).toBeTruthy();
  //
  expect(typeIs.isNan(1)).toBeFalsy();
});
test('辅助函数 : isInfinity', () => {
  expect(typeIs.isInfinity(Infinity)).toBeTruthy();
  //
  expect(typeIs.isInfinity(0.1)).toBeFalsy();
});
test('辅助函数 : isNone', () => {
  expect(typeIs.isNone(null)).toBeTruthy();
  expect(typeIs.isNone(undefined)).toBeTruthy();
  //
  expect(typeIs.isNone(0)).toBeFalsy();
  expect(typeIs.isNone('')).toBeFalsy();
});
test('辅助函数 : isTruth', () => {
  // 布尔
  expect(typeIs.isTruth(true)).toBeTruthy();
  // 数值
  expect(typeIs.isTruth(1.0)).toBeTruthy();
  expect(typeIs.isTruth(-11)).toBeTruthy();
  expect(typeIs.isTruth(0.001)).toBeTruthy();
  expect(typeIs.isTruth(Infinity)).toBeTruthy();
  // 字符串
  expect(typeIs.isTruth(' ')).toBeTruthy();
  expect(typeIs.isTruth(' 111')).toBeTruthy();
  // 对象
  expect(typeIs.isTruth([])).toBeTruthy();
  expect(typeIs.isTruth({})).toBeTruthy();
  // symbol
  expect(typeIs.isTruth(Symbol(''))).toBeTruthy();
  // 函数
  expect(typeIs.isTruth(() => {})).toBeTruthy();
  //
  // 布尔
  expect(typeIs.isTruth(false)).toBeFalsy();
  // 数值
  expect(typeIs.isTruth(0)).toBeFalsy();
  expect(typeIs.isTruth(NaN)).toBeFalsy();
  // 字符串
  expect(typeIs.isTruth('')).toBeFalsy();
  // 对象
  expect(typeIs.isTruth(null)).toBeFalsy();
  // undefined
  expect(typeIs.isTruth(undefined)).toBeFalsy();
});
test('辅助函数 : isOriginObject', () => {
  expect(typeIs.isOriginObject({})).toBeTruthy();
  expect(typeIs.isOriginObject([])).toBeTruthy();
  expect(typeIs.isOriginObject(null)).toBeTruthy();
  //
  expect(typeIs.isOriginObject(() => {})).toBeFalsy();
});
