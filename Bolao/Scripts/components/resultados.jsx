﻿'use strict'

define(['underscore', 'react', 'components/util', 'jsx!components/grupo'], function (_, React, Util, Grupo) {
  var util = new Util();

  var ResultadosComponent = React.createClass({
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
      return (
        <div>
          <h2>Resultados</h2>
          <p className="text-muted">{util.getUltimoPlacar(this)}</p>
          <h3>1a fase</h3>
          <Grupo key="GRUPO A" apostas={this.state.apostas} resultados={this.state.resultados} placares={[1, 2, 17, 18, 33, 34]} titulo={true} />
          <Grupo key="GRUPO B" apostas={this.state.apostas} resultados={this.state.resultados} placares={[3, 4, 19, 20, 35, 36]} titulo={false} />
          <Grupo key="GRUPO C" apostas={this.state.apostas} resultados={this.state.resultados} placares={[5, 6, 21, 22, 37, 38]} titulo={false} />
          <Grupo key="GRUPO D" apostas={this.state.apostas} resultados={this.state.resultados} placares={[7, 8, 23, 24, 39, 40]} titulo={false} />
          <Grupo key="GRUPO E" apostas={this.state.apostas} resultados={this.state.resultados} placares={[9, 10, 25, 26, 41, 42]} titulo={false} />
          <Grupo key="GRUPO F" apostas={this.state.apostas} resultados={this.state.resultados} placares={[11, 12, 27, 28, 43, 44]} titulo={false} />
          <Grupo key="GRUPO G" apostas={this.state.apostas} resultados={this.state.resultados} placares={[13, 14, 29, 30, 45, 46]} titulo={false} />
          <Grupo key="GRUPO H" apostas={this.state.apostas} resultados={this.state.resultados} placares={[15, 16, 31, 32, 47, 48]} titulo={false} />
        </div>
      );
    }
  });

  return ResultadosComponent;
});
