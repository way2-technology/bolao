'use strict'

define(['underscore'], function (_) {
  var totalize = function (apostas, results) {
    _.each(apostas, function (a) {
      a.totalize(results);
    });
  };

  var Ranking = function (apostas, results) {
    totalize(apostas, results);

    var sorted = _(apostas).chain().sortBy(function (a) {
      return a.nome;
    }).reverse().sortBy(function (a) {
      return a.total;
    }).value().reverse();

    this.itens = _.map(sorted, function (a) {
      return [a.nome, a.total];
    });
  };

  return Ranking;
});
