'use strict'

define(['jquery'], function ($) {

  var getIndex = function (match) {
    for (var i = 0; i < INDEXES.length; i++) {
      if (INDEXES[i] === match) {
        return i;
      }
    }
  };

  var Feed = function () { };

  Feed.prototype.dummy = function (callback) {
    callback(RESULTS, '-');
  };

  Feed.prototype.footballPool = function (callback) {
    var getScore = function (sScore) {
      var a = sScore.split('-');
      return [parseInt(a[0]), parseInt(a[1])];
    };
    $.ajax({
      type: 'GET',
      url: BASE_URL + 'FootballPool',
      dataType: 'json',
      success: function (data) {
        var results = [];
        var lastUpdate = '-';
        _.each(data, function (value) {
          if (value.sResult !== 'U') {
            results[getIndex(value.iId)] = getScore(value.sScore);
            lastUpdate = value.iId + ' - ' + value.Team1.sName + ' x ' + value.Team2.sName + ' (' + value.sScore + ')';
          } else {
            results[getIndex(value.iId)] = [];
          }
        });
        callback(results, lastUpdate);
      }.bind(this)
    });
  };

  return Feed;
});
