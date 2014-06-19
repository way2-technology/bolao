'use strict'

define(function () {
  var Placar = function (v1, v2) {
    if (v1 === undefined) {
      return;
    }

    this.v1 = v1;
    this.v2 = v2;

    if (this.v1 === this.v2) {
      this.vencedor = 0;
    } else if (this.v1 > this.v2) {
      this.vencedor = 1;
    } else {
      this.vencedor = 2;
    }
  };

  Placar.prototype.acertou = function (placar) {
    return this.v1 !== undefined && this.v1 === placar.v1 && this.v2 === placar.v2;
  };

  Placar.prototype.acertouVencedor = function (placar) {
    return this.vencedor !== undefined && this.vencedor === placar.vencedor;
  };

  return Placar;
});
