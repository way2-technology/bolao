'use strict'

define(['jquery', 'underscore', 'react', 'emojify', 'app/feed', 'app/aposta', 'app/ranking', 'jsx!components/ranking-item'], function ($, _, React, emojify, Feed, Aposta, Ranking, RankingItem) {
  var toString = function (lastUpdate) {
    var d = new Date();
    var s = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    return s + ' - ' + lastUpdate.team1 + ' ' + lastUpdate.score1 + ' x ' + lastUpdate.score2 + ' ' + lastUpdate.team2;
  };
  
  var RankingTable = React.createClass({
    updateResults: function() {
      var feed = new Feed();
      feed.worldCupSfgIo(function (results, lastUpdate) {
        this.setState({ results: results, lastUpdate: lastUpdate });
        emojify.run();
      }.bind(this));
    },
    getInitialState: function() {
      var apostas = _.map(APOSTAS, function(a) {
        return new Aposta(a.nome, a.placares)
      });
      var results = _.map(RESULTS, function() {
        return [];
      });
      return { apostas: apostas, results: results };
    },
    componentWillMount: function() {
      this.updateResults();
      if (this.props.pollInterval) {
        setInterval(this.updateResults, this.props.pollInterval);
      }
    },
    render: function () {
      var lastUpdate = this.state.lastUpdate ? toString(this.state.lastUpdate) : 'loading...';
      var ranking = new Ranking(this.state.apostas, this.state.results, this.state.lastUpdate);
      var i = 0;
      var itens = ranking.itens.map(function (item) {
        i++;
        return <RankingItem key={i} nome={item[0]} pontos={item[1]} />;
      });
      return (
        <div>
          <h3>Ranking</h3>
          <p className="text-muted">{lastUpdate}</p>
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

  return RankingTable;
});
