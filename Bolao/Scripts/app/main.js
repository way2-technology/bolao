'use strict'

define(['jquery', 'react', 'bootstrap', 'jsx!components/ranking'], function ($, React, bootstrap, RankingComponent) {
  React.renderComponent(RankingComponent({ pollInterval: 60000 }), $('#content')[0]);
});
