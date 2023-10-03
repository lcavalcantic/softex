// Classe Hospedes
class Pessoas {
  constructor(quantidade) {
    this.quantidade = quantidade;
  }

  getQuantidade() {
    return this.quantidade;
  }

  setQuantidade(quantidade) {
    this.quantidade = quantidade;
  }}

  class Data {
    constructor(dia, mes, ano) {
     this.dia = dia;
     this.mes = mes;
     this.ano = ano;
    }
    getDia() {
        return this.dia;
    }
    getMes() {
        return this.mes;
    }
    getAno() {
        return this.ano;
    }
    set(dia) {
        this.dia = dia;
    }
    set(mes) {
        this.mes = mes;
    }
    set(ano) {
        this.ano = ano;
    }
  }

  class Dias{
    constructor(numeroDias) {
        this.numeroDias;
    }
    getNumeroDias() {
        return this.numeroDias;
    }
    setNumeroDias(numeroDias) {
        this.numeroDias = numeroDias;
    }
  }
