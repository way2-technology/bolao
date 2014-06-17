'use strict'

define(['react', 'jsx!components/menu-item'], function (React, MenuItem) {
  var Menu = React.createClass({
    render: function () {
      return (
        <nav className="blog-nav">
          <MenuItem active={true}>Ranking</MenuItem>
          <MenuItem>Resultado</MenuItem>
          <MenuItem>Regras</MenuItem>
          <MenuItem>Prêmio</MenuItem>
        </nav>
      );
    }
  });

  return Menu;
});
