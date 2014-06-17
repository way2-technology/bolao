define(['react'], function (React) {
    var RankingItem = React.createClass({
        render: function () {
			var c = this.props.nome.indexOf('Macaco') > -1 ? 'warning' : '';
            return (
                <tr className={c}>
					<td>{this.props.key}</td>
					<td>{this.props.nome}</td>
					<td>{this.props.pontos}</td>
				</tr>
            );
        }
    });

    return RankingItem;
});