'use strict'

define(['react', 'jsx!components/menu-item'], function (React, MenuItem) {
  var Menu = React.createClass({
    getInitialState: function() {
      return { };
    },
    handleClick: function(item) {
      this.setState( { active: item.props.key } );
    },
    render: function () {
      var active = this.state.active || this.props.currentPage;
      return (
        <nav className="blog-nav">
          <MenuItem key='ranking' active={active} handleClick={this.handleClick}>Ranking</MenuItem>
          <MenuItem key='resultados' active={active} handleClick={this.handleClick}>Resultados</MenuItem>
          <MenuItem key='regras' active={active} handleClick={this.handleClick}>Regras</MenuItem>
          <MenuItem key='premio' active={active} handleClick={this.handleClick}>Prêmio</MenuItem>
        </nav>
      );
    }
  });

  return Menu;
});
