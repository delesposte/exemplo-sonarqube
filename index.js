class Calculadora {

  somar(n1, n2) {
    return n1 + n2;
  }

  subtrair(n1, n2) {
    return n1 - n2;
  }

  dividir(n1, n2) {
    return n1 / n2;
  }

  multiplicar(n1, n2) {
    return n1 * n2;
  }

  raizQuadrada(n) {
    return Math.sqrt(n);
  }

}

module.exports = { calculadora: new Calculadora() };