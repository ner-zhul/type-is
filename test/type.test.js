import typeIs from '../dist/typeIs';

test('类型判断 : undefined', () => {
  expect(typeIs.type()).toBe(typeIs.names.undefined);
});
test('类型判断 : null', () => {
  expect(typeIs.type(null)).toBe(typeIs.names.null);
});
test('类型判断 : boolean', () => {
  expect(typeIs.type(false)).toBe(typeIs.names.boolean);
});
test('类型判断 : string', () => {
  expect(typeIs.type('')).toBe(typeIs.names.string);
});
test('类型判断 : number', () => {
  expect(typeIs.type(1)).toBe(typeIs.names.number);
});
test('类型判断 : object', () => {
  expect(typeIs.type({})).toBe(typeIs.names.object);
});
test('类型判断 : array', () => {
  expect(typeIs.type([])).toBe(typeIs.names.array);
});
test('类型判断 : symbol', () => {
  expect(typeIs.type(Symbol(''))).toBe(typeIs.names.symbol);
});
test('类型判断 : function', () => {
  expect(typeIs.type(() => {})).toBe(typeIs.names.function);
});
