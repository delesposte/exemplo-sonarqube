const { calculadora } = require('./index');

test('10 + 10 to equal 20', () => {
  expect(calculadora.somar(10, 10)).toBe(20);
})

test('10 - 10 to equal 0', () => {
  expect(calculadora.subtrair(10, 10)).toBe(0);
})

test('10 / 10 to equal 1', () => {
  expect(calculadora.dividir(10, 10)).toBe(1);  
})

test('10 * 10 to equal 100', () => {
  expect(calculadora.multiplicar(10, 10)).toBe(100);  
})

