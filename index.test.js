const { calculadora } = require('./index');

test('add 10 + 10 to equal 20', () => {
  expect(calculadora.somar(10, 10)).toBe(20);
})