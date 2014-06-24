﻿'use strict'

define(['jquery', 'underscore', 'react', 'app/ranking', 'components/util', 'jsx!components/ranking-item'], function ($, _, React, Ranking, Util, RankingItem) {
  var util = new Util();

  var RankingComponent = React.createClass({
    getInitialState: function () {
      return util.getInitialState();
    },
    componentWillMount: function () {
      util.startPolling(this);
    },
    componentWillUnmount: function () {
      util.stopPolling(this);
    },
    render: function () {
      var ranking = new Ranking(this.state.apostas, this.state.resultados, true);
	  var ultimo = _.last(ranking.itens).posicao;
	  if(ultimo != 1){
		var ultimos = _.where(ranking.itens, {posicao: ultimo});
		_.each(ultimos, function(item){
			item.ultimo = true;
		});
	  }
      var itens = ranking.itens.map(function (item) {
        return <RankingItem key={item.nome} nome={item.nome} posicao={item.posicao} ultimo={item.ultimo} posicaoAnterior={item.posicaoAnterior} pontos={item.pontos} />;
      });
      return (
        <div>
          <h2>Ranking</h2>
          <p className="text-muted">{util.getUltimoPlacar(this)}</p>
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
