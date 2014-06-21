'use strict'

define(function () {
  var Placar = function (id, time1, time2, placar1, placar2, ehUltimo) {
    this.id = id;
    this.time1 = time1;
    this.time2 = time2;
    this.placar1 = placar1;
    this.placar2 = placar2;
    this.ehUltimo = ehUltimo;

    if (this.placar1 === undefined) {
      return;
    }

    if (this.placar1 === this.placar2) {
      this.vencedor = 0;
    } else if (this.placar1 > this.placar2) {
      this.vencedor = 1;
    } else {
      this.vencedor = 2;
    }
  };

  Placar.prototype.acertou = function (placar) {
    return this.placar1 !== undefined && this.placar1 === placar.placar1 && this.placar2 === placar.placar2;
  };

  Placar.prototype.acertouVencedor = function (placar) {
    return this.vencedor !== undefined && this.vencedor === placar.vencedor;
  };

  Placar.prototype.toString = function () {
    var d = new Date();
    var s = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    return s + ' - ' + this.time1 + ' ' + this.placar1 + ' x ' + this.placar2 + ' ' + this.time2;
  };

  return Placar;
});
