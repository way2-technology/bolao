'use strict'

define(['react'], function (React) {
  var MenuItem = React.createClass({
    handleClick: function() {
      this.props.onItemClick(this);
    },
    render: function () {
      var className = this.props.key === this.props.active ? 'blog-nav-item active' : 'blog-nav-item'; 
      return ( 
              <a href={BASE_URL + '#' + this.props.key} className={className} onClick={this.handleClick}>{this.props.children}</a>
             );
    }
  });

  return MenuItem;
});
