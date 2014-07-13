'use strict'

define(['underscore', 'react'], function (_, React) {
  var getAcertadores = function (apostas, campeao, alternativa) {
    return _(apostas).chain().filter(function (aposta) {
      var c = alternativa === 1 ? aposta.campeao1 : aposta.campeao2;
      return c === campeao;
    }).map(function (aposta) {
      return aposta.nome;
    }).join(', ');
  };

  var Campeao = React.createClass({
    render: function () {
      var campeao = this.props.campeao ? this.props.campeao + ' :trophy:' : '';
      var alternativa1 = getAcertadores(this.props.apostas, this.props.campeao, 1)
      var alternativa2 = getAcertadores(this.props.apostas, this.props.campeao, 2);
      return ( 
              <table className="table table-condensed">
                <thead>
                  <tr>
                    <th></th>
                    <th className="col-md-2">CAMPEÃO</th>
                    <th className="col-md-10">{campeao}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>&nbsp;</td>
                    <td>1a alternativa</td>
                    <td>{alternativa1}</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>2a alternativa</td>
                    <td>{alternativa2}</td>
                  </tr>
                </tbody>
              </table>
             );
    }
  });

  return Campeao;
});
