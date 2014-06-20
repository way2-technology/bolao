'use strict'

define(['react'], function (React) {
  var MenuItem = React.createClass({
    render: function () {
      var className = this.props.key === this.props.active ? 'blog-nav-item active' : 'blog-nav-item'; 
      return ( 
              <a href={BASE_URL + '#/' + this.props.key} className={className} onClick={this.props.handleClick}>{this.props.children}</a>
             );
    }
  });

  return MenuItem;
});
