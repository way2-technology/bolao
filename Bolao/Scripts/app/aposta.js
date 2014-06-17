'use strict'

define(['app/placar'], function (Placar) {
  var Aposta = function (nome, placares) {
    this.nome = nome;
    this.placares = [];
    this.total = 0;

    for (var i = 0; i < placares.length; i++) {
      this.placares.push(new Placar(placares[i]));
    }
  };

  Aposta.prototype.totalize = function (results) {
    this.total = 0;
    for (var i = 0; i < this.placares.length; i++) {
      if (this.placares[i].acertou(results[i])) {
        this.total += 3;
      } else if (this.placares[i].acertouVencedor(results[i])) {
        this.total += 1;
      }
    }
  };

  return Aposta;
});
