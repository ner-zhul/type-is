import typeIs from '../dist/typeIs';

test('辅助函数 : undefined', () => {
  expect(typeIs.isUndefined(undefined)).toBeTruthy();
  expect(typeIs.isUndefined()).toBeTruthy();
  //
  expect(typeIs.isUndefined('undefined')).toBeFalsy();
  expect(typeIs.isUndefined(null)).toBeFalsy();
});
test('辅助函数 : null', () => {
  expect(typeIs.isNull(null)).toBeTruthy();
  //
  expect(typeIs.isNull('null')).toBeFalsy();
  expect(typeIs.isNull(undefined)).toBeFalsy();
});
test('辅助函数 : boolean', () => {
  expect(typeIs.isBoolean(true)).toBeTruthy();
  expect(typeIs.isBoolean(false)).toBeTruthy();
  expect(typeIs.isBoolean(!!0)).toBeTruthy();
  expect(typeIs.isBoolean(!!undefined)).toBeTruthy();
  //
  expect(typeIs.isBoolean('true')).toBeFalsy();
  expect(typeIs.isBoolean(0)).toBeFalsy();
});
test('辅助函数 : string', () => {
  expect(typeIs.isString('')).toBeTruthy();
  expect(typeIs.isString('fwefwf')).toBeTruthy();
  const a = 1;
  expect(typeIs.isString(`${a} 111`)).toBeTruthy();
  //
  expect(typeIs.isString(0)).toBeFalsy();
  expect(typeIs.isString(null)).toBeFalsy();
});
test('辅助函数 : number', () => {
  // 整数
  expect(typeIs.isNumber(1)).toBeTruthy();
  expect(typeIs.isNumber(-10)).toBeTruthy();
  // 浮点数
  expect(typeIs.isNumber(1.0)).toBeTruthy();
  expect(typeIs.isNumber(1.1)).toBeTruthy();
  expect(typeIs.isNumber(-9.9)).toBeTruthy();
  // 科学计数
  expect(typeIs.isNumber(1e10)).toBeTruthy();
  // 其他进制
  expect(typeIs.isNumber(0xf1ac)).toBeTruthy();
  expect(typeIs.isNumber(0b1111)).toBeTruthy();
  expect(typeIs.isNumber(0o7021)).toBeTruthy();
  // 奇葩数值
  expect(typeIs.isNumber(NaN)).toBeTruthy();
  expect(typeIs.isNumber(Infinity)).toBeTruthy();
  //
  expect(typeIs.isNumber('1')).toBeFalsy();
  expect(typeIs.isNumber(null)).toBeFalsy();
});
test('辅助函数 : object', () => {
  expect(typeIs.isObject({})).toBeTruthy();
  expect(typeIs.isObject(new Date())).toBeTruthy();
  expect(typeIs.isObject([])).toBeTruthy();
  //
  expect(typeIs.isObject(null)).toBeFalsy();
});
test('辅助函数 : symbol', () => {
  expect(typeIs.isSymbol(Symbol(''))).toBeTruthy();
  //
  expect(typeIs.isSymbol('symbol')).toBeFalsy();
});
test('辅助函数 : function', () => {
  expect(typeIs.isFunction(() => {})).toBeTruthy();
  //
  expect(typeIs.isFunction({})).toBeFalsy();
});
