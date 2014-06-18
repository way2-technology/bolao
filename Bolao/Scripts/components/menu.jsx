'use strict'

define(['react', 'jsx!components/menu-item'], function (React, MenuItem) {
  var Menu = React.createClass({
    getInitialState: function() {
      return { active: 'ranking' };
    },
    handleItemClick: function(item) {
      this.setState( { active: item.props.key } );
    },
    render: function () {
      return (
        <nav className="blog-nav">
          <MenuItem key='ranking' active={this.state.active} onItemClick={this.handleItemClick}>Ranking</MenuItem>
          <MenuItem key='resultados' active={this.state.active} onItemClick={this.handleItemClick}>Resultados</MenuItem>
          <MenuItem key='regras' active={this.state.active} onItemClick={this.handleItemClick}>Regras</MenuItem>
          <MenuItem key='premio' active={this.state.active} onItemClick={this.handleItemClick}>Prêmio</MenuItem>
        </nav>
      );
    }
  });

  return Menu;
});
