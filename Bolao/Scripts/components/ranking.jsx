'use strict'

define(['jquery', 'underscore', 'react', 'emojify', 'app/data', 'app/aposta', 'app/ranking', 'jsx!components/ranking-item'], function ($, _, React, emojify, data, Aposta, Ranking, RankingItem) {
  var getIndex = function (iId) {
    for (var i = 0; i < INDEXES.length; i++) {
      if (INDEXES[i] === iId) {
        return i;
      }
    }
  };
  var getScore = function (sScore) {
    var a = sScore.split('-');
    return [parseInt(a[0]), parseInt(a[1])];
  };
  var toString = function (value) {
    return value.iId + ' - ' + value.Team1.sName + ' x ' + value.Team2.sName + ' (' + value.sScore + ')';
  };

  var RankingComponent = React.createClass({
    footballPool: function() {
      $.ajax({
        type: 'GET',
        url: BASE_URL + 'FootballPool',
        dataType: 'json',
        success: function(data) {
          var results = [];
          var lastUpdate = '-';
          _.each(data, function (value) {
            if (value.sResult !== 'U') {
              results[getIndex(value.iId)] = getScore(value.sScore);
              lastUpdate = toString(value);
            } else {
              results[getIndex(value.iId)] = [];
            }
          });
          var data = { apostas: this.state.apostas, results: results, lastUpdate: lastUpdate };
          this.setState(data);
        }.bind(this)
      }).done(function() {
        emojify.run();
      });
    },
    getInitialState: function() {
      var apostas = [];
      var results = [];
      _.each(APOSTAS, function (a) {
        apostas.push(new Aposta(a.nome, a.placares))
      });
      _.each(RESULTS, function (a) {
        results.push([])
      });
      return { apostas: apostas, results: results };
    },
    componentWillMount: function() {
      this.footballPool();
      setInterval(this.footballPool, this.props.pollInterval);
    },
    render: function () {
      var ranking = new Ranking(this.state.apostas, this.state.results);
      var i = 0;
      var itens = ranking.itens.map(function (item) {
        i++;
        return <RankingItem key={i} nome={item[0]} pontos={item[1]} />;
      });
      return (
        <div>
          <h3>Ranking</h3>
          <p className="text-muted">{this.state.lastUpdate}</p>
          <div className="table">
            <table id="ranking" className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Pontos</th>
                </tr>
              </thead>
              <tbody>
                {itens}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  });

  return RankingComponent;
});
