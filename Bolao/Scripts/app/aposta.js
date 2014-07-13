'use strict'

define(function () {
  var Aposta = function (nome, placares, campeao1, campeao2) {
    this.nome = nome;
    this.placares = placares || [];
    this.campeao1 = campeao1 || '-';
    this.campeao2 = campeao2 || '-';
    this.pontos = 0;
  };

  var getPeso = function (jogo) {
    if (jogo <= 48) {
      return 1;
    } else if (jogo <= 56) {
      return 2;
    } else if (jogo <= 60) {
      return 3;
    }
    return 5;
  };

  Aposta.prototype.totalize = function (results) {
    this.pontos = 0;
    for (var i = 0; i < this.placares.length; i++) {
      if (this.placares[i].acertou(results[i])) {
        this.pontos += 3 * getPeso(i + 1);
      } else if (this.placares[i].acertouVencedor(results[i])) {
        this.pontos += 1 * getPeso(i + 1);
      }
    }
    if (this.campeao1 === results['campeao']) {
      this.pontos += 20;
    } else if (this.campeao2 === results['campeao']) {
      this.pontos += 10;
    }
  };

  return Aposta;
});
