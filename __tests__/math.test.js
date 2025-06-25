const somar = require('../src/math');

test('soma 2 + 2 para resultar em 4', () => {
  expect(somar(2, 2)).toBe(4);
});