'use strict'

define(['jquery', 'underscore', 'app/placar'], function ($, _, Placar) {
  var Feed = function () {
    this.results = [];
    this.lastUpdate = [];
  };

  Feed.prototype.footballPool = function (callback) {
    $.getJSON(BASE_URL + 'Proxy/FootballPool', function (data) {
      _.each(data, function (match) {
        if (match.sResult !== 'U') {
          var sScore = match.sScore.split('-');
          var score1 = parseInt(sScore[0]);
          var score2 = parseInt(sScore[1]);
          this.results[match.iId - 1] = new Placar(score1, score2);
          this.lastUpdate = { id: match.iId, team1: match.Team1.sName, team2: match.Team2.sName, score1: score1, score2: score2 };
        } else {
          this.results[match.iId - 1] = new Placar();
        }
      }.bind(this));
      callback(this.results, this.lastUpdate);
    }.bind(this));
  };

  Feed.prototype.worldCupSfgIo = function (callback) {
    $.getJSON(BASE_URL + 'Proxy/WorldCupSfgIo', function (data) {
      var sorted = _.sortBy(data, function (match) { return match.datetime; });
      _.each(sorted, function (match) {
        if (match.status !== 'future') {
          this.results[match.match_number - 1] = new Placar(match.home_team.goals, match.away_team.goals);
          this.lastUpdate = { id: match.match_number, team1: match.home_team.country, team2: match.away_team.country, score1: match.home_team.goals, score2: match.away_team.goals };
        } else {
          this.results[match.match_number - 1] = new Placar();
        }
      }.bind(this));
      callback(this.results, this.lastUpdate);
    }.bind(this));
  };

  return Feed;
});
