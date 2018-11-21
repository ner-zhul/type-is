import typeIs from '../dist/typeIs';

test('辅助函数 : undefined', () => {
  expect(typeIs.isUndefined()).toBeTruthy();
});
test('辅助函数 : null', () => {
  expect(typeIs.isNull(null)).toBeTruthy();
});
test('辅助函数 : boolean', () => {
  expect(typeIs.isBoolean(false)).toBeTruthy();
});
test('辅助函数 : string', () => {
  expect(typeIs.isString('')).toBeTruthy();
});
test('辅助函数 : number', () => {
  expect(typeIs.isNumber(1)).toBeTruthy();
});
test('辅助函数 : object', () => {
  expect(typeIs.isObject({})).toBeTruthy();
});
test('辅助函数 : array', () => {
  expect(typeIs.isArray([])).toBeTruthy();
});
test('辅助函数 : symbol', () => {
  expect(typeIs.isSymbol(Symbol(''))).toBeTruthy();
});
test('辅助函数 : function', () => {
  expect(typeIs.isFunction(() => {})).toBeTruthy();
});
