'use strict'

define(['react'], function (React) {
  var RankingItem = React.createClass({
    render: function () {
      var diff = this.props.previousPosition - this.props.position;
      var description = diff > 0 ? '(+' + diff + ')' : '(' + diff + ')';
      if (diff === 0) {
        description = '';
      }
      return (
        <tr className={this.props.key.indexOf('Macaco') > -1 ? 'warning' : ''}>
          <td>{this.props.position}</td>
          <td>{this.props.key} <span className="small text-muted">{description}</span></td>
          <td>{this.props.pontos}</td>
        </tr>
      );
    }
  });

  return RankingItem;
});
