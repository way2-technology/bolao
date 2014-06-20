'use strict'

define(['underscore', 'app/aposta', 'app/placar'], function (_, Aposta, Placar) {
  var Ranking = function (apostas, results, previousPosition) {
    this.apostas = apostas;
    this.results = results;
    this.previousPosition = previousPosition;
    this.init();
  };

  Ranking.prototype.init = function () {
    this.totalize();
    this.sort();

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
        position: i,
        previousPosition: this.previousPosition ? this.getPreviousPosition(aposta) : i,
        nome: aposta.nome,
        pontos: aposta.pontos
      };
    }.bind(this));
  };

  Ranking.prototype.totalize = function () {
    _.each(this.apostas, function (aposta) {
      aposta.totalize(this.results);
    }.bind(this));
  };

  Ranking.prototype.sort = function () {
    this.apostas = _(this.apostas).chain().sortBy(function (aposta) {
      return aposta.nome;
    }).reverse().sortBy(function (aposta) {
      return aposta.pontos;
    }).value().reverse();
  };

  Ranking.prototype.getPreviousResults = function () {
    return _.map(this.results, function (placar) {
      return !placar.ultimo ? placar : new Placar();
    });
  };

  Ranking.prototype.getPreviousPosition = function (aposta) {
    var copy = _.map(this.apostas, function (aposta) {
      return new Aposta(aposta.nome, aposta.placares);
    });
    var ranking = new Ranking(copy, this.getPreviousResults(), false);
    return _.find(ranking.itens, function (item) {
      return item.nome === aposta.nome;
    }).position;
  };

  return Ranking;
});
