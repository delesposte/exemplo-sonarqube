class Calculadora {

  somar(n1, n2) {
    return n1 + n2;
  }

}

const calculadora = new Calculadora();
const result = calculadora.somar(10, 10);

console.log(result);
