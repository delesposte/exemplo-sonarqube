/*Dt. Hr. Início - 23/09/2021 18:43*/
/*Dt. Hr. Fim - 23/09/2021 18:36*/

class EStatusCarro {
  static DISPONIVEL = 0;
  static RESERVADO = 1;
}

class Carro {

  constructor() {
    this.placa = null;
    this.marca = null;
    this.km = 0;
    this.status = EStatusCarro.DISPONIVEL;
    this.historicoReservas = new Map();
  }

}

class Reserva {

  constructor() {
    this.seminovo = false;
    this.dtHrInicio = null;
    this.placa = null;
    this.idCliente = null;
  }

}

class Locadora {

  constructor() {
    this.estoqueCarros = new Map();
  }

  adicionarCarroEstoque(carro) {
    if (!carro || !carro.placa || !carro.marca || !carro.km)
      console.log('Carro inválido ou não informado!');
    else {
      this.estoqueCarros.set(carro.placa, carro);
      console.log('Carro adicionado no estoque: ', carro);
    }
  }

  reservarCarro(reserva) {
    const carro = this.estoqueCarros.get(reserva.placa);

    if (!carro || !carro.placa || !carro.marca || !carro.km)
      console.log('Carro não localizado!');
    else if (reserva.seminovo && carro.km > 50000)
      console.log('Carro escolhido não é seminovo: ', carro);
    else {
      if (carro.status == EStatusCarro.RESERVADO) {
        const ultimaReserva = carro.historicoReservas.get(carro.historicoReservas.size - 1);

        if (ultimaReserva) {
          const fimReserva = new Date(ultimaReserva.dtHrInicio.getTime() + 24 * 60 * 60 * 1000);
          const dtHrFim = fimReserva.getTime();
          const dtHrNova = reserva.dtHrInicio.getTime();

          if (dtHrFim > dtHrNova)
            console.log('Carro escolhido já está reservado: ', carro);
          else
            _reservar();
        } else
          _reservar();
      } else
        _reservar();
    }

    function _reservar() {
      carro.status = EStatusCarro.RESERVADO;
      carro.historicoReservas.set(carro.historicoReservas.size, reserva);
      console.log('Carro reservado: ', carro);
    }
  }

  cancelarReserva(placa) {
    const carro = this.estoqueCarros.get(placa);

    if (!carro || !carro.placa || !carro.marca || !carro.km)
      console.log('Carro não localizado!');
    else {
      carro.status = EStatusCarro.DISPONIVEL;
      console.log('Reserva cancelada: ', carro);
    }
  }

}

class RentCar {

  static main() {
    const locadora = new Locadora();

    function adicionarCarrosEstoque() {
      let carro = new Carro();
      carro.placa = 'GQX-7000';
      carro.marca = 'BMW';
      carro.km = 20000;
      carro.status = EStatusCarro.DISPONIVEL;
      locadora.adicionarCarroEstoque(carro);

      carro = new Carro();
      carro.placa = 'ODE-2020';
      carro.marca = 'FIAT';
      carro.km = 60000;
      carro.status = EStatusCarro.DISPONIVEL;
      locadora.adicionarCarroEstoque(carro);

      carro = new Carro();
      carro.placa = 'VLV-3030';
      carro.marca = 'Volvo';
      carro.km = 30000;
      carro.status = EStatusCarro.DISPONIVEL;
      locadora.adicionarCarroEstoque(carro);

      carro = new Carro();
      carro.placa = 'BGT-1010';
      carro.marca = 'Bugati';
      carro.km = 70000;
      carro.status = EStatusCarro.DISPONIVEL;
      locadora.adicionarCarroEstoque(carro);

      carro = new Carro();
      carro.placa = 'FFF-6070';
      carro.marca = 'Ferrari';
      carro.km = 40000;
      carro.status = EStatusCarro.DISPONIVEL;
      locadora.adicionarCarroEstoque(carro);
    }

    function reservarCarro() {
      const reserva = new Reserva();
      reserva.dtHrInicio = new Date();
      reserva.placa = 'FFF-6070';
      reserva.seminovo = false;
      reserva.idCliente = 1;
      locadora.reservarCarro(reserva);
    }

    function reservarCarroSeminovo() {
      let reserva = new Reserva();
      reserva.dtHrInicio = new Date();
      reserva.placa = 'BGT-1010';
      reserva.seminovo = true;
      reserva.idCliente = 3;
      locadora.reservarCarro(reserva);
    }

    function reservarCarroJaReservado() {
      const reserva = new Reserva();
      reserva.dtHrInicio = new Date();
      reserva.placa = 'FFF-6070';
      reserva.seminovo = false;
      reserva.idCliente = 4;
      locadora.reservarCarro(reserva);
    }

    function reservarCarro24hrsDepois() {
      const reserva = new Reserva();
      reserva.dtHrInicio = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      reserva.placa = 'FFF-6070';
      reserva.seminovo = false;
      reserva.idCliente = 2;
      locadora.reservarCarro(reserva);
    }

    adicionarCarrosEstoque();
    reservarCarro();
    reservarCarroSeminovo();
    reservarCarroJaReservado();
    reservarCarro24hrsDepois();
    locadora.cancelarReserva('BGT-1010');
  }

}

RentCar.main();