'use strict'

define(function () {
  var Placar = function (id, team1, team2, score1, score2, ultimo) {
    if (id === undefined) {
      return;
    }

    this.id = id;
    this.team1 = team1;
    this.team2 = team2;
    this.score1 = score1;
    this.score2 = score2;
    this.ultimo = ultimo;

    if (this.score1 === this.score2) {
      this.vencedor = 0;
    } else if (this.score1 > this.score2) {
      this.vencedor = 1;
    } else {
      this.vencedor = 2;
    }
  };

  Placar.prototype.acertou = function (placar) {
    return this.score1 !== undefined && this.score1 === placar.score1 && this.score2 === placar.score2;
  };

  Placar.prototype.acertouVencedor = function (placar) {
    return this.vencedor !== undefined && this.vencedor === placar.vencedor;
  };

  return Placar;
});
