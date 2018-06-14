'use strict'

define(['react'], function (React) {
  var PremioComponent = React.createClass({
    render: function () {
      return (
        <div>
          <h2>Premiação:</h2>
          <ol>
            <li>70% da arrecadação</li>
            <li>20% da arrecadação</li>
            <li>10% da arrecadação</li>
          </ol>
        </div>
      );
    }
  });

  return PremioComponent;
});
