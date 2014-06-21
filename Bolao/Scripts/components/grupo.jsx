'use strict'

define(['underscore', 'react', 'jsx!components/grupo-item'], function (_, React, GrupoItem) {
  var GrupoComponent = React.createClass({
    render: function () {
      var itens = this.props.placares.map(function (i) {
        return <GrupoItem key={this.props.resultados[i- 1].id} apostas={this.props.apostas} placar={this.props.resultados[i - 1]} />;
      }.bind(this));
      var titulo = this.props.key === 'A' ? 'Acertaram o placar' : '';
      return ( 
              <table className="table table-condensed">
                <thead>
                  <tr>
                    <th colSpan="6" className="col-md-6">{'GRUPO ' + this.props.key}</th>
                    <th className="col-md-6">{titulo}</th>
                  </tr>
                </thead>
                <tbody>
                  {itens}
                </tbody>
              </table>
             );
    }
  });

  return GrupoComponent;
});
