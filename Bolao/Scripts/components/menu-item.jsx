'use strict'

define(['react'], function (React) {
  var MenuItem = React.createClass({
    render: function () {
      var c = 'blog-nav-item';
      if (this.props.active) {
        c += ' active';
      }
      return (
        <a className={c}>{this.props.children}</a>
      );
    }
  });

  return MenuItem;
});
