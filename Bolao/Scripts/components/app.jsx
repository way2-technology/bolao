'use strict'

define(['react', 'director', 'jsx!components/menu', 'jsx!components/ranking', 'jsx!components/resultados', 'jsx!components/regras', 'jsx!components/premio'], function (React, Director, Menu, Ranking, Resultados, Regras, Premio) {
  var App = React.createClass({
    getInitialState: function () {
      return { };
    },
    componentDidMount: function () {
      var router = Router({
        '/': this.setState.bind(this, { currentPage: 'ranking' }),
        '/ranking': this.setState.bind(this, { currentPage: 'ranking' }),
        '/resultados': this.setState.bind(this, { currentPage: 'resultados' }),
        '/regras': this.setState.bind(this, { currentPage: 'regras' }),
        '/premio': this.setState.bind(this, { currentPage: 'premio' })
      });
      router.init('/');
    },
    render: function () {
      var partial;
      if (this.state.currentPage === 'ranking') {
        partial = <Ranking pollInterval={60000} />;
      } else if (this.state.currentPage === 'resultados') {
        partial = <Resultados pollInterval={60000} />
      } else if (this.state.currentPage === 'regras') {
        partial = <Regras />;
      } else if (this.state.currentPage === 'premio') {
        partial = <Premio />;
      }
      return (
        <div>
          <div className="blog-masthead">
            <div className="container">
              <Menu currentPage={this.state.currentPage} />
            </div>
          </div>
          <div className="container">
            <img className="header" src={BASE_URL + 'images/header.png'} />
            {partial}
          </div>
        </div>
      );
    }
  });

  return App;
});
