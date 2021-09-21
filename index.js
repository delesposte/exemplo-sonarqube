class Calculadora {

  somar(n1, n2) {
    return n1 + n2;
  }

  subtrair(n1, n2) {
    return n1 - n2;
  }

}

const calculadora = new Calculadora();

console.log(calculadora.somar(10, 10));
console.log(calculadora.subtrair(10, 10));
