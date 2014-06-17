requirejs.config({
    baseUrl: './Scripts/lib',
    paths: {
        app: '../app',
        bootstrap: 'bootstrap.min',
        emojify: 'emojify.min',
        jquery: 'jquery-2.1.1.min',
        underscore: 'underscore-min'
    },
    shim: {
        bootstrap: ['jquery'],
        underscore: {
            exports: '_'
        }
    }
});

requirejs(['app/main']);