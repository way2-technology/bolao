﻿'use strict'

define(['jquery', 'underscore', 'app/placar'], function ($, _, Placar) {
  var marqueUltimoPlacar = function (resultados, ultimo) {
    _.each(resultados, function (placar) {
      placar.ehUltimo = placar.id === ultimo;
    });
  };

  return {
    worldCupSfgIo: function (callback) {
      $.getJSON('http://worldcup.sfg.io/matches?callback=?', function (data) {
        var resultados = [];
        var ultimo = 1;
        var i = 1;
        _(data).chain().sortBy(function (match) {
          return match.datetime;
        }).each(function (match) {
          if (match.status !== 'future') {
            resultados[i - 1] = new Placar(i, match.home_team.country, match.away_team.country, match.home_team.goals, match.away_team.goals);
            ultimo = i;
          } else {
            resultados[i - 1] = new Placar(i, match.home_team.country, match.away_team.country);
          }
          if (i === 64) {
            resultados['campeao'] = match.winner;
          }
          i++;
        });
        marqueUltimoPlacar(resultados, ultimo);
        callback(resultados);
      });
    },
    footballDataOrg: function (callback) {
      var getGoalsHomeTeam = function (result) {
        return result.extraTime
          ? result.extraTime.goalsHomeTeam
          : result.goalsHomeTeam;
      };

      var getGoalsAwayTeam = function (result) {
        return result.extraTime
          ? result.extraTime.goalsAwayTeam
          : result.goalsAwayTeam;
      };

      var getWinner = function (homeTeamName, awayTeamName, result) {
        if (result.penaltyShootout) {
          return result.penaltyShootout.goalsHomeTeam >= result.penaltyShootout.goalsAwayTeam
            ? homeTeamName
            : awayTeamName;
        }
        var goalsHomeTeam = getGoalsHomeTeam(result);
        var goalsAwayTeam = getGoalsAwayTeam(result);
        if (goalsHomeTeam === goalsAwayTeam) {
          return '';
        }
        return goalsHomeTeam >= goalsAwayTeam
          ? homeTeamName
          : awayTeamName;
      };

      $.getJSON(BASE_URL + 'proxy/FootballData', function (data) {
        var resultados = [];
        var ultimo = 1;
        var i = 1;
        _(data.fixtures).chain().sortBy(function (match) {
          return match.date;
        }).each(function (match) {
          if (match.status === 'SCHEDULED') {
            return;
          }
          if (match.status !== 'TIMED') {
            resultados[i - 1] = new Placar(i, match.homeTeamName, match.awayTeamName, getGoalsHomeTeam(match.result), getGoalsAwayTeam(match.result));
            ultimo = i;
          } else {
            resultados[i - 1] = new Placar(i, match.homeTeamName, match.awayTeamName);
          }
          if (i === 64 && match.status !== 'TIMED') {
            resultados['campeao'] = getWinner(match.homeTeamName, match.awayTeamName, match.result);
          }
          i++;
        });
        marqueUltimoPlacar(resultados, ultimo);
        callback(resultados);
      });
    }
  };
});
