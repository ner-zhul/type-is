import typeIs from '../dist/typeIs';

test('辅助函数 : isInt', () => {
  expect(typeIs.isInt(1)).toBeTruthy();
});
test('辅助函数 : isFloat', () => {
  expect(typeIs.isFloat(1.1)).toBeTruthy();
});
test('辅助函数 : isNan', () => {
  expect(typeIs.isNan(NaN)).toBeTruthy();
});
test('辅助函数 : isInfinity', () => {
  expect(typeIs.isInfinity(Infinity)).toBeTruthy();
});
test('辅助函数 : isNone', () => {
  expect(typeIs.isNone(null)).toBeTruthy();
});
test('辅助函数 : isTruth', () => {
  expect(typeIs.isTruth(true)).toBeTruthy();
});
