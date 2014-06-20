'use strict'

define(['jquery', 'underscore', 'react', 'emojify', 'app/feed', 'app/aposta', 'app/placar', 'app/ranking', 'jsx!components/ranking-item'], function ($, _, React, emojify, Feed, Aposta, Placar, Ranking, RankingItem) {
  var RankingTable = React.createClass({
    getInitialState: function () {
      var apostas = _.map(APOSTAS, function(aposta) {
        return new Aposta(aposta.nome, _.map(aposta.placares, function (placar) {
          return new Placar(placar[0], placar[1]);
        }));
      });
      var results = _.map(RESULTS, function() {
        return new Placar();
      });
      return { apostas: apostas, results: results, label: 'loading...' };
    },
    componentWillMount: function () {
      this.updateResults();
      this.setState({ interval: setInterval(this.updateResults, this.props.pollInterval) });
    },
    componentWillUnmount: function () {
      clearInterval(this.state.interval);
    },
    updateResults: function () {
      var feed = new Feed();
      feed.worldCupSfgIo(function (results, lastUpdate) {
        this.setState({ results: results, lastUpdate: lastUpdate });
        this.updateLabel();
        emojify.run();
      }.bind(this));
    },
    updateLabel: function () {
      var d = new Date();
      var s = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      this.setState({ label: s + ' - ' + this.state.lastUpdate.team1 + ' ' + this.state.lastUpdate.score1 + ' x ' + this.state.lastUpdate.score2 + ' ' + this.state.lastUpdate.team2 });
    },
    render: function () {
      var ranking = new Ranking(this.state.apostas, this.state.results, this.state.lastUpdate);
      var itens = ranking.itens.map(function (item) {
        return <RankingItem key={item.nome} position={item.position} previousPosition={item.previousPosition} pontos={item.pontos} />;
      });
      return (
        <div>
          <h2>Ranking</h2>
          <p className="text-muted">{this.state.label}</p>
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
