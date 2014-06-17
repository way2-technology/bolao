define(['jquery', 'underscore', 'bootstrap', 'emojify', 'app/aposta', 'app/ranking'], function ($, _, bootstrap, emojify, Aposta, Ranking) {
    this.apostas = [];
    this.results = [];
    this.last = '';

    $.ajaxSetup({ cache: false });

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
                    self.last = toString(v);
                }
            });
        });
    };

    var renderRanking = function () {
        $('#body').html('<h3>Ranking</h3><p class="text-muted">' + this.last + '</p><div class="table"><table id="ranking" class="table"><thead><tr><th>#</th><th>Nome</th><th>Pontos</th></tr></thead><tbody></tbody></table></div>');
        var rows = $('#ranking').find('tbody');
        var ranking = new Ranking(this.apostas, this.results);
        var i = 1;
        _.each(ranking.values, function (v) {
            if (v[0].indexOf('Macaco') > -1) {
                rows.append('<tr class="warning"><td>' + i + '</td><td>' + v[0] + '</td><td>' + v[1] + '</td></tr>');
            } else {
                rows.append('<tr><td>' + i + '</td><td>' + v[0] + '</td><td>' + v[1] + '</td></tr>');
            }
            i++;
        });
        emojify.run();
    };

    $(function () {
        $.when(getApostas(), getResults()).done(function () {
            footballpool().done(function () {
                renderRanking();
                setInterval(function () {
                    $.when(footballpool()).done(function () {
                        renderRanking();
                    });
                }, 60000);
            });
        });
    });
});