'use strict'

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
      var grupos = [
        <Grupo key="A" apostas={this.state.apostas} resultados={this.state.resultados} placares={[ 1,  2, 17, 18, 33, 34]} />,
        <Grupo key="B" apostas={this.state.apostas} resultados={this.state.resultados} placares={[ 3,  4, 19, 20, 35, 36]} />,
        <Grupo key="C" apostas={this.state.apostas} resultados={this.state.resultados} placares={[ 5,  6, 21, 22, 37, 38]} />,
        <Grupo key="D" apostas={this.state.apostas} resultados={this.state.resultados} placares={[ 7,  8, 23, 24, 39, 40]} />,
        <Grupo key="E" apostas={this.state.apostas} resultados={this.state.resultados} placares={[ 9, 10, 25, 26, 41, 42]} />,
        <Grupo key="F" apostas={this.state.apostas} resultados={this.state.resultados} placares={[11, 12, 27, 28, 43, 44]} />,
        <Grupo key="G" apostas={this.state.apostas} resultados={this.state.resultados} placares={[13, 14, 29, 30, 45, 46]} />,
        <Grupo key="H" apostas={this.state.apostas} resultados={this.state.resultados} placares={[15, 16, 31, 32, 47, 48]} />
      ];
      return ( 
              <div>
                <h2>Resultados</h2>
                <p className="text-muted">{util.getUltimoPlacar(this)}</p>
                <h3>1a fase</h3>
                <div className="container">
                  {grupos}
                </div>
              </div>
             );
    }
  });

  return ResultadosComponent;
});
