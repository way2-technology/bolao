requirejs.config({
    baseUrl: './Scripts/lib',
    paths: {
        app: '../app',
        components: '../components',
        bootstrap: 'bootstrap.min',
        emojify: 'emojify.min',
        jquery: 'jquery-2.1.1.min',
        JSXTransformer: 'JSXTransformer-0.10.0',
        react: 'react',
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
    }
});

requirejs(['app/main']);