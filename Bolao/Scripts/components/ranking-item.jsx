'use strict'

define(['react'], function (React) {
  var RankingItem = React.createClass({
    render: function () {
      var diferenca = this.props.posicaoAnterior - this.props.posicao;
      var avanco = diferenca > 0 ? '(+' + diferenca + ')' : '(' + diferenca + ')';
      if (diferenca === 0) {
        avanco = '';
      }
      return (
        <tr className={this.props.nome.indexOf('Macaco') > -1 || this.props.nome.indexOf('Pônei') > -1 ? 'warning' : ''}>
          <td>{this.props.posicao}</td>
          <td>{this.props.nome} {this.props.ehLanterna ? ':flashlight:' : ''}<span className="small text-muted">{avanco}</span></td>
          <td>{this.props.pontos}</td>
        </tr>
      );
    }
  });

  return RankingItem;
});
