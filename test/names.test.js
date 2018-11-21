import typeIs from '../dist/typeIs';

test('基本测试', () => {
  expect(typeIs).toBeDefined();
  expect(typeof typeIs).toBe('object');
});

test('各类型名称', () => {
  expect(typeIs.names).toBeDefined();
  expect(typeof typeIs.names).toBe('object');
  //
  expect(typeIs.names.undefined).toBe('undefined');
  expect(typeIs.names.null).toBe('null');
  expect(typeIs.names.boolean).toBe('boolean');
  expect(typeIs.names.string).toBe('string');
  expect(typeIs.names.number).toBe('number');
  expect(typeIs.names.object).toBe('object');
  expect(typeIs.names.array).toBe('array');
  expect(typeIs.names.symbol).toBe('symbol');
  expect(typeIs.names.function).toBe('function');
});
