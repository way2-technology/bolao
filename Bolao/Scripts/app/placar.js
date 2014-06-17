'use strict'

define(function () {
  var Placar = function (data) {
    if (data.length === 0) {
      return;
    }

    this.v1 = data[0];
    this.v2 = data[1];

    if (this.v1 === this.v2) {
      this.vencedor = 0;
    } else if (this.v1 > this.v2) {
      this.vencedor = 1;
    } else {
      this.vencedor = 2;
    }
  };

  Placar.prototype.acertou = function (data) {
    var p = new Placar(data);
    return this.v1 !== undefined && this.v1 === p.v1 && this.v2 === p.v2;
  };

  Placar.prototype.acertouVencedor = function (data) {
    var p = new Placar(data);
    return this.vencedor !== undefined && this.vencedor === p.vencedor;
  };

  return Placar;
});
