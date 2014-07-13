'use strict'

define(['jquery', 'underscore', 'app/placar'], function ($, _, Placar) {
  var marqueUltimoPlacar = function (resultados, ultimo) {
    _.each(resultados, function (placar) {
      placar.ehUltimo = placar.id === ultimo;
    });
  };

  return {
    footballPool: function (callback) {
      $.getJSON(BASE_URL + 'Proxy/FootballPool', function (data) {
        var resultados = [];
        var ultimo = 1;
        _.each(data, function (match) {
          if (match.sResult !== 'U') {
            var sScore = match.sScore.split('-');
            var score1 = parseInt(sScore[0]);
            var score2 = parseInt(sScore[1]);
            resultados[match.iId - 1] = new Placar(match.iId, match.Team1.sName, match.Team2.sName, score1, score2);
            ultimo = match.iId;
          } else {
            resultados[match.iId - 1] = new Placar(match.iId, match.Team1.sName, match.Team2.sName);
          }
        });
        marqueUltimoPlacar(resultados, ultimo);
        callback(resultados);
      });
    },
    worldCupSfgIo: function (callback) {
      $.getJSON('http://worldcup.sfg.io/matches?callback=?', function (data) {
        var resultados = [];
        var ultimo = 1;
        _(data).chain().sortBy(function (match) {
          return match.datetime;
        }).each(function (match) {
          if (match.status !== 'future') {
            resultados[match.match_number - 1] = new Placar(match.match_number, match.home_team.country, match.away_team.country, match.home_team.goals, match.away_team.goals);
            ultimo = match.match_number;
          } else {
            resultados[match.match_number - 1] = new Placar(match.match_number, match.home_team.country, match.away_team.country);
          }
          if (match.match_number === 64) {
            resultados['campeao'] = match.winner;
          }
        })
        marqueUltimoPlacar(resultados, ultimo);
        callback(resultados);
      });
    }
  };
});
