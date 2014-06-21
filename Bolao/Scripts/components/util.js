'use strict'

define(['jquery', 'underscore', 'emojify', 'app/data', 'app/feed'], function ($, _, emojify, Data, Feed) {
  var Util = function () { };

  Util.prototype.getInitialState = function () {
    return { apostas: Data.apostas, resultados: Data.resultados };
  };

  Util.prototype.updateData = function (component) {
    Feed.worldCupSfgIo(function (resultados) {
      var ultimo = _.find(resultados, function (placar) {
        return placar.ultimo;
      });
      component.setState({ resultados: resultados });
      emojify.run();
    });
  };

  Util.prototype.startPolling = function (component) {
    this.updateData(component);
    component.setState({ interval: setInterval(this.updateData.bind(this, component), component.props.pollInterval) });
  };

  Util.prototype.stopPolling = function (component) {
    clearInterval(component.state.interval);
  };

  Util.prototype.getUltimoPlacar = function (component) {
    var ultimo = _.find(component.state.resultados, function (placar) {
      return placar.ehUltimo;
    });
    return ultimo ? ultimo.toString() : 'Loading...';
  };

  return Util;
});
