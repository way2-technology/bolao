'use strict'

define(['underscore', 'app/aposta', 'app/placar'], function (_, Aposta, Placar) {
  var Ranking = function (apostas, resultados, calculePosicaoAnterior) {
    this.apostas = apostas;
    this.resultados = resultados;
    this.inicie(calculePosicaoAnterior);
  };

  Ranking.prototype.inicie = function (calculePosicaoAnterior) {
    this.totalize();
    this.ordene();

    var pontos = 500;
    var i = 0;
    var j = 1;

    this.itens = _.map(this.apostas, function (aposta) {
      if (aposta.pontos < pontos) {
        pontos = aposta.pontos;
        i += j;
        j = 1;
      } else {
        j++;
      }
      return {
        posicao: i,
        posicaoAnterior: calculePosicaoAnterior ? this.getPosicaoAnterior(aposta) : i,
        nome: aposta.nome,
        pontos: aposta.pontos,
        ultimo: false
      };
    }.bind(this));
  };

  Ranking.prototype.totalize = function () {
    _.each(this.apostas, function (aposta) {
      aposta.totalize(this.resultados);
    }.bind(this));
  };

  Ranking.prototype.ordene = function () {
    this.apostas = _(this.apostas).chain().sortBy(function (aposta) {
      return aposta.nome;
    }).reverse().sortBy(function (aposta) {
      return aposta.pontos;
    }).value().reverse();
  };

  Ranking.prototype.getResultadosExcetoUltimo = function () {
    return _.map(this.resultados, function (placar) {
      return !placar.ehUltimo ? placar : new Placar();
    });
  };

  Ranking.prototype.getPosicaoAnterior = function (aposta) {
    var copy = _.map(this.apostas, function (aposta) {
      return new Aposta(aposta.nome, aposta.placares);
    });
    var ranking = new Ranking(copy, this.getResultadosExcetoUltimo(), false);
    return _.find(ranking.itens, function (item) {
      return item.nome === aposta.nome;
    }).posicao;
  };

  return Ranking;
});
