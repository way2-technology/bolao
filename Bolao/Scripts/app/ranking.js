'use strict'

define(['underscore', 'app/aposta', 'app/placar'], function (_, Aposta, Placar) {
  var Ranking = function (apostas, results, lastUpdate) {
    this.apostas = apostas;
    this.results = results;
    this.lastUpdate = lastUpdate;
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
      var previousPosition = this.lastUpdate ? this.getPreviousPosition(aposta) : i;
      return { position: i, previousPosition: previousPosition, nome: aposta.nome, pontos: aposta.pontos };
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
    var results = [];
    for (var i = 0; i < this.results.length; i++) {
      results[i] = i + 1 !== this.lastUpdate.id ? this.results[i] : new Placar();
    }
    return results;
  };

  Ranking.prototype.getPreviousPosition = function (aposta) {
    var copy = _.map(this.apostas, function (aposta) {
      return new Aposta(aposta.nome, aposta.placares);
    });
    var ranking = new Ranking(copy, this.getPreviousResults());
    return _.find(ranking.itens, function (item) {
      return item.nome === aposta.nome;
    }).position;
  };

  return Ranking;
});
