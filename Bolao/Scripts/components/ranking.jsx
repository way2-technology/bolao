'strict'

define(['react', 'app/ranking', 'jsx!components/ranking-item'], function (React, Ranking, RankingItem) {
    var RankingComponent = React.createClass({
        render: function () {
			var ranking = new Ranking(this.props.apostas, this.props.results);
			var i = 0;
			var itens = ranking.itens.map(function (item) {
				i++;
				return <RankingItem key={i} nome={item[0]} pontos={item[1]} />;
			});
            return (
                <div>
                    <h3>Ranking</h3>
                    <p className="text-muted">{this.props.lastUpdate}</p>
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