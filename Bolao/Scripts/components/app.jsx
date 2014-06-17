'use strict'

define(['react', 'jsx!components/menu', 'jsx!components/ranking'], function (React, Menu, RankingTable) {
  var App = React.createClass({
    render: function () {
      return (
        <div>
          <div className="blog-masthead">
            <div className="container">
              <Menu />
            </div>
          </div>
          <div className="container">
            <img className="header" src={BASE_URL + 'images/header.png'} />
            <RankingTable pollInterval={60000} />
          </div>
        </div>
      );
    }
  });

  return App;
});
