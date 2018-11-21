import typeIs from '../dist/typeIs';

test('类型判断 : undefined', () => {
  expect(typeIs.type(undefined)).toBe(typeIs.names.undefined);
  expect(typeIs.type()).toBe(typeIs.names.undefined);
  //
  expect(typeIs.type('undefined')).not.toBe(typeIs.names.undefined);
  expect(typeIs.type(null)).not.toBe(typeIs.names.undefined);
});
test('类型判断 : null', () => {
  expect(typeIs.type(null)).toBe(typeIs.names.null);
  //
  expect(typeIs.type('null')).not.toBe(typeIs.names.null);
  expect(typeIs.type(undefined)).not.toBe(typeIs.names.null);
});
test('类型判断 : boolean', () => {
  expect(typeIs.type(true)).toBe(typeIs.names.boolean);
  expect(typeIs.type(false)).toBe(typeIs.names.boolean);
  expect(typeIs.type(!!0)).toBe(typeIs.names.boolean);
  expect(typeIs.type(!!undefined)).toBe(typeIs.names.boolean);
  //
  expect(typeIs.type('true')).not.toBe(typeIs.names.boolean);
  expect(typeIs.type(0)).not.toBe(typeIs.names.boolean);
});
test('类型判断 : string', () => {
  expect(typeIs.type('')).toBe(typeIs.names.string);
  expect(typeIs.type('fwefwf')).toBe(typeIs.names.string);
  const a = 1;
  expect(typeIs.type(`${a} 111`)).toBe(typeIs.names.string);
  //
  expect(typeIs.type(0)).not.toBe(typeIs.names.string);
  expect(typeIs.type(null)).not.toBe(typeIs.names.string);
});
test('类型判断 : number', () => {
  // 整数
  expect(typeIs.type(1)).toBe(typeIs.names.number);
  expect(typeIs.type(-10)).toBe(typeIs.names.number);
  // 浮点数
  expect(typeIs.type(1.0)).toBe(typeIs.names.number);
  expect(typeIs.type(1.1)).toBe(typeIs.names.number);
  expect(typeIs.type(-9.9)).toBe(typeIs.names.number);
  // 科学计数
  expect(typeIs.type(1e10)).toBe(typeIs.names.number);
  // 其他进制
  expect(typeIs.type(0xf1ac)).toBe(typeIs.names.number);
  expect(typeIs.type(0b1111)).toBe(typeIs.names.number);
  expect(typeIs.type(0o7021)).toBe(typeIs.names.number);
  // 奇葩数值
  expect(typeIs.type(NaN)).toBe(typeIs.names.number);
  expect(typeIs.type(Infinity)).toBe(typeIs.names.number);
  //
  expect(typeIs.type('1')).not.toBe(typeIs.names.number);
  expect(typeIs.type(null)).not.toBe(typeIs.names.number);
});
test('类型判断 : object', () => {
  expect(typeIs.type({})).toBe(typeIs.names.object);
  expect(typeIs.type(new Date())).toBe(typeIs.names.object);
  //
  expect(typeIs.type([])).not.toBe(typeIs.names.object);
  expect(typeIs.type(null)).not.toBe(typeIs.names.object);
});
test('类型判断 : array', () => {
  expect(typeIs.type([])).toBe(typeIs.names.array);
  expect(typeIs.type([1, 2, 3])).toBe(typeIs.names.array);
  //
  expect(typeIs.type({ a: 1, b: 2, c: 3 })).not.toBe(typeIs.names.array);
});
test('类型判断 : symbol', () => {
  expect(typeIs.type(Symbol(''))).toBe(typeIs.names.symbol);
  //
  expect(typeIs.type('symbol')).not.toBe(typeIs.names.symbol);
});
test('类型判断 : function', () => {
  expect(typeIs.type(() => {})).toBe(typeIs.names.function);
  //
  expect(typeIs.type({})).not.toBe(typeIs.names.function);
});
