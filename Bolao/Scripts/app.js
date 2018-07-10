requirejs.config({
  baseUrl: './Scripts/lib',
  paths: {
    app: '../app',
    components: '../components',
    bootstrap: 'bootstrap.min',
    director: 'director.min',
    emojify: 'emojify.min',
    jquery: 'jquery-2.1.1.min',
    JSXTransformer: 'JSXTransformer-0.10.0',
    moment: 'moment.min',
    react: 'react.min',
    underscore: 'underscore-min'
  },
  shim: {
    bootstrap: ['jquery'],
    underscore: {
      exports: '_'
    }
  },
  jsx: {
    fileExtension: '.jsx'
  },
  urlArgs: 'ver=1807101415'
});

requirejs(['react', 'bootstrap', 'jsx!components/app'], function (React, bootstrap, App) {
  React.renderComponent(App(null), document.body);
});
