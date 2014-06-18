'use strict'

define(['jquery'], function ($) {

  var getIndex = function (match) {
    for (var i = 0; i < INDEXES.length; i++) {
      if (INDEXES[i] === match) {
        return i;
      }
    }
  };

  var getDate = function () {
    var now = new Date();
    return now.getDate() + '/' + now.getMonth() + '/' + now.getFullYear() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
  };

  var Feed = function () {
    this.results = [];
    this.lastUpdate = [];
  };

  Feed.prototype.dummy = function (callback) {
    callback(RESULTS, '-');
  };

  Feed.prototype.footballPool = function (callback) {
    $.getJSON(BASE_URL + 'Proxy/FootballPool', function (data) {
      _.each(data, function (match) {
        if (match.sResult !== 'U') {
          var score = match.sScore.split('-');
          this.results[getIndex(match.iId)] = [parseInt(score[0]), parseInt(score[1])];
          this.lastUpdate = match.iId + ' - ' + match.Team1.sName + ' x ' + match.Team2.sName + ' (' + match.sScore + ')';
        } else {
          this.results[getIndex(match.iId)] = [];
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
          this.results[getIndex(match.match_number)] = [match.home_team.goals, match.away_team.goals];
          this.lastUpdate = getDate() + ' - ' + match.home_team.country + ' ' + match.home_team.goals + ' x ' + match.away_team.goals + ' ' + match.away_team.country;
        } else {
          this.results[getIndex(match.match_number)] = [];
        }
      }.bind(this));
      callback(this.results, this.lastUpdate);
    }.bind(this));
  };

  return Feed;
});
