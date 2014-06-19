'use strict'

define(function () {
  var Aposta = function (nome, placares) {
    this.nome = nome;
    this.placares = placares;
    this.pontos = 0;
  };

  Aposta.prototype.totalize = function (results) {
    this.pontos = 0;
    for (var i = 0; i < this.placares.length; i++) {
      if (this.placares[i].acertou(results[i])) {
        this.pontos += 3;
      } else if (this.placares[i].acertouVencedor(results[i])) {
        this.pontos += 1;
      }
    }
  };

  return Aposta;
});
