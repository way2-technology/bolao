'use strict'

define(['jquery', 'underscore', 'app/placar'], function ($, _, Placar) {
  var Feed = function () {
    this.results = [];
  };

  Feed.prototype.footballPool = function (callback) {
    $.getJSON(BASE_URL + 'Proxy/FootballPool', function (data) {
      var ultimo = 1;
      _.each(data, function (match) {
        if (match.sResult !== 'U') {
          var sScore = match.sScore.split('-');
          var score1 = parseInt(sScore[0]);
          var score2 = parseInt(sScore[1]);
          var placar = new Placar(match.iId, match.Team1.sName, match.Team2.sName, score1, score2);
          this.results[match.iId - 1] = placar;
          ultimo = match.iId;
        } else {
          this.results[match.iId - 1] = new Placar();
        }
      }.bind(this));
      _.each(this.results, function (placar) {
        placar.ultimo = placar.id === ultimo;
      });
      callback(this.results);
    }.bind(this));
  };

  Feed.prototype.worldCupSfgIo = function (callback) {
    $.getJSON(BASE_URL + 'Proxy/WorldCupSfgIo', function (data) {
      var ultimo = 1;
      var sorted = _.sortBy(data, function (match) { return match.datetime; });
      _.each(sorted, function (match) {
        if (match.status !== 'future') {
          var placar = new Placar(match.match_number, match.home_team.country, match.away_team.country, match.home_team.goals, match.away_team.goals);
          this.results[match.match_number - 1] = placar;
          ultimo = match.match_number;
        } else {
          this.results[match.match_number - 1] = new Placar();
        }
      }.bind(this));
      _.each(this.results, function (placar) {
        placar.ultimo = placar.id === ultimo;
      });
      callback(this.results);
    }.bind(this));
  };

  return Feed;
});
