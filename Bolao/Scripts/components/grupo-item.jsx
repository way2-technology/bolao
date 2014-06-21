'use strict'

define(['underscore', 'react'], function (_, React) {
  var GrupoItem = React.createClass({
    render: function () {
      var acertadores = _(this.props.apostas).chain().filter(function (aposta) {
        return this.props.placar.id && aposta.placares[this.props.placar.id - 1].acertou(this.props.placar);
      }.bind(this)).map(function (aposta) {
        return aposta.nome;
      }).join(', ');
      var className = this.props.placar.id && this.props.placar.placar1 === undefined ? 'text-muted' : '';
      if (this.props.placar.ehUltimo) {
        className = 'warning';
      }
      return ( 
              <tr className={className}>
                <td><span className="text-muted">{this.props.key}</span></td>
                <td><span className="pull-right">{this.props.placar.time1}</span></td>
                <td className="text-center">{this.props.placar.placar1}</td>
                <td className="text-center">x</td>
                <td className="text-center">{this.props.placar.placar2}</td>
                <td><span className="pull-left">{this.props.placar.time2}</span></td>
                <td>{acertadores}</td>
              </tr>
             );
    }
  });

  return GrupoItem;
});
