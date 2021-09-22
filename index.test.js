const { calculadora } = require('./index');

test('10 + 10 igual 20', () => {
  expect(calculadora.somar(10, 10)).toBe(20);
})

test('10 - 10 igual 0', () => {
  expect(calculadora.subtrair(10, 10)).toBe(0);
})

test('10 / 10 igual 1', () => {
  expect(calculadora.dividir(10, 10)).toBe(1);  
})

test('10 * 10 igual 100', () => {
  expect(calculadora.multiplicar(10, 10)).toBe(100);  
})

test('raíz quadrada 9 igual 3', () => {
  expect(calculadora.raizQuadrada(9)).toBe(3);  
})

