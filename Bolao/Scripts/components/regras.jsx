'use strict'

define(['react'], function (React) {
  var RegrasComponent = React.createClass({
    render: function () {
      return ( 
              <div>
                <h2>Regras</h2>
                <h3>Envio dos jogos</h3>
                <p>Deverão ser preenchidos os placares de todos os jogos da Copa do Mundo, divididos em 5 fases, e enviados para <u>bolao@way2.com.br</u>.</p>
                <p>Antes de enviar as apostas, verifique se a planilha foi salva com a seguinte nomenclatura: <em>xxxx yyyy</em>
                  <ul>
                    <li><em>xxxx</em>: fase (1a fase / 2a fase / 3a fase / 4a fase / 5a fase)</li>
                    <li><em>yyyy</em>: primeiro nome do participante (usar o mesmo nome em todas as fases)</li>
                  </ul>
                </p>
                <p>Deverão ser respeitadas as datas de entrega dos jogos de cada fase, conforme tabela abaixo:</p>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Fase</th>
                      <th>Número de jogos</th>
                      <th>Data de entrega</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1a fase + bônus</td>
                      <td>48</td>
                      <td>11/06/2014 às 18h</td>
                    </tr>
                    <tr>
                      <td>2a fase (oitavas)</td>
                      <td>8</td>
                      <td>27/06/2014 às 18h</td>
                    </tr>
                    <tr>
                      <td>3a fase (quartas)</td>
                      <td>4</td>
                      <td>02/07/2014 às 18h</td>
                    </tr>
                    <tr>
                      <td>4a fase (semi)</td>
                      <td>2</td>
                      <td>06/07/2014 às 18h</td>
                    </tr>
                    <tr>
                      <td>5a fase (finais)</td>
                      <td>2</td>
                      <td>10/07/2014 às 18h</td>
                    </tr>
                  </tbody>
                </table>
                <h3>Regras de pontuação</h3>
                <p>Serão somados pontos para cada placar ou resultado correto:</p>
                <ul>  
                  <li>Placar correto: acertou o placar do jogo*</li>
                  <li>Resultado correto: errou o placar mas acertou o resultado, ou seja, quem ganhou a partida ou se houve um empate</li>
                </ul>
                <p>A pontuação terá um peso em cada fase, a fim de manter a disputa até as finais:</p>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Fase</th>
                      <th>Placar correto</th>
                      <th>Resultado correto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1a fase</td>
                      <td>3</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>2a fase (oitavas)</td>
                      <td>6</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>3a fase (quartas)</td>
                      <td>9</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>4a fase (semi)</td>
                      <td>15</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>5a fase (finais)</td>
                      <td>15</td>
                      <td>5</td>
                    </tr>
                  </tbody>
                </table>
                <p>* A partir da 2a fase, o placar correto é o resultado da partida no tempo normal e prorrogação.</p>
                <h4>Bônus</h4>
                <p>Na planilha da 1a fase deverão ser preenchidas duas alternativas para o campeão da Copa, não podendo repetir o mesmo time nas duas alternativas:</p>
                <ul>
                  <li>Acerto do campeão com a 1a alternativa: 20 pontos</li>
                  <li>Acerto do campeão com a 2a alternativa: 10 pontos</li>
                </ul>
                <h4>Exceções</h4>
                <p>Será permitida a entrada de um novo participante em qualquer fase do Bolão, porém sua pontuação inicial será ZERO.</p>
                <p>Os apostadores "Macacos" não participam do Bolão, eles existem apenas para animar a disputa. Caso um deles seja o vencedor, o prêmio será entregue para o participante que tiver a segunda maior pontuação.</p>
                <p>Qualquer outra situação não coberta por este regulamento será avaliada sob demanda.</p>
                <h3>Estatísticas</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Fase</th>
                      <th></th>
                      <th>Número de jogos</th>
                      <th></th>
                      <th>Pontuação máxima</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1a fase</td>
                      <td></td>
                      <td>48</td>
                      <td>(75%)</td>
                      <td>144</td>
                      <td>(50%)</td>
                    </tr>
                    <tr>
                      <td>2a à 5a fase</td>
                      <td></td>
                      <td>48</td>
                      <td>(75%)</td>
                      <td>144</td>
                      <td>(50%)</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>2a fase</td>
                      <td>8</td>
                      <td>(12,50%)</td>
                      <td>48</td>
                      <td>(16,67%)</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>3a fase</td>
                      <td>4</td>
                      <td>(6,25%)</td>
                      <td>36</td>
                      <td>(12,50%)</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>4a fase</td>
                      <td>2</td>
                      <td>(3,13%)</td>
                      <td>30</td>
                      <td>(10,42%)</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>5a fase (finais)</td>
                      <td>2</td>
                      <td>(3,13%)</td>
                      <td>30</td>
                      <td>(10,42%)</td>
                    </tr>
                  </tbody>
                </table>
                </div>
             );
    }
  });

  return RegrasComponent;
});
