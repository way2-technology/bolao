'strict'

define(['jquery', 'underscore', 'react', 'bootstrap', 'emojify', 'app/aposta', 'jsx!components/ranking'], function ($, _, React, bootstrap, emojify, Aposta, RankingComponent) {
    this.apostas = [];
    this.results = [];
    this.lastUpdate = '-';

    var getApostas = function () {
        var self = this;
        return $.ajax({
            type: 'GET',
            url: CONTENT_URL + 'apostas.json',
            dataType: 'json'
        }).done(function (data) {
            for (var i = 0; i < data.length; i++) {
                self.apostas.push(new Aposta(data[i].nome, data[i].placares));
            }
        });
    };

    var getResults = function () {
        var self = this;
        return $.ajax({
            type: 'GET',
            url: CONTENT_URL + 'results.json',
            dataType: 'json'
        }).done(function (data) {
            self.results = data;
        });
    };

    var footballpool = function () {
        var self = this;
        var toString = function (v) {
            return v.iId + ' - ' + v.Team1.sName + ' x ' + v.Team2.sName + ' (' + v.sScore + ')';
        };
        var getIndex = function (index) {
            for (var i = 0; i < INDEXES.length; i++) {
                if (INDEXES[i] === index) {
                    return i;
                }
            }
        };
        var getScore = function (score) {
            var a = score.split('-');
            return [parseInt(a[0]), parseInt(a[1])];
        };
        return $.ajax({
            type: 'GET',
            url: BASE_URL + 'FootballPool',
            dataType: 'json'
        }).done(function (data) {
            _.each(data, function (v) {
                if (v.sResult !== 'U') {
                    self.results[getIndex(v.iId)] = getScore(v.sScore);
                    self.lastUpdate = toString(v);
                }
            });
        });
    };

    var renderRanking = function () {
        var self = this;
        footballpool().done(function () {
            var data = { apostas: self.apostas, results: self.results, lastUpdate: self.lastUpdate };
            React.renderComponent(RankingComponent(data), $('#content')[0]);
            emojify.run();
        });
    };

    $.ajaxSetup({ cache: false });

    $.when(getApostas(), getResults()).done(function () {
        renderRanking();
        setInterval(function () {
            renderRanking();
        }, 60000);
    });
});