'use strict'

define(['jquery', 'underscore', 'react', 'emojify', 'app/feed', 'app/aposta', 'app/placar', 'app/ranking', 'jsx!components/ranking-item'], function ($, _, React, emojify, Feed, Aposta, Placar, Ranking, RankingItem) {
  var RankingTable = React.createClass({
    getInitialState: function () {
      var apostas = _.map(APOSTAS, function(aposta) {
        return new Aposta(aposta.nome, _.map(aposta.placares, function (placar) {
          return new Placar(0, '-', '-', placar[0], placar[1]);
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
      feed.worldCupSfgIo(function (results) {
        this.setState({ results: results });
        this.updateLabel();
        emojify.run();
      }.bind(this));
    },
    updateLabel: function () {
      var ultimo = _.find(this.state.results, function (placar) { return placar.ultimo; });
      var d = new Date();
      var s = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      this.setState({ label: s + ' - ' + ultimo.team1 + ' ' + ultimo.score1 + ' x ' + ultimo.score2 + ' ' + ultimo.team2 });
    },
    render: function () {
      var ranking = new Ranking(this.state.apostas, this.state.results, true);
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
