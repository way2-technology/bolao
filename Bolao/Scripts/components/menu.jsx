'use strict'

define(['react', 'jsx!components/menu-item'], function (React, MenuItem) {
  var Menu = React.createClass({
    getInitialState: function () {
      return {};
    },
    render: function () {
      var active = this.state.active || this.props.currentPage;
      return (
        <nav className="blog-nav">
          <MenuItem key='ranking' active={active}>Ranking</MenuItem>
          <MenuItem key='resultados' active={active}>Resultados</MenuItem>
          <MenuItem key='regras' active={active}>Regras</MenuItem>
          <MenuItem key='premio' active={active}>Prêmio</MenuItem>
        </nav>
      );
    }
  });

  return Menu;
});
