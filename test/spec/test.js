/* global mocha */
require.config({
    baseUrl: 'scripts/apps',
    paths: {
        testBase: '../..',
        core: '../core',
        sandbox: '../sandbox',
        vendor: '../vendor',
        modules: '../modules',
        jquery: '../../bower_components/jquery/jquery'
    }
});

mocha.setup({
    ui: 'bdd',
    globals:['$', 'jQuery', 'mixin']
});

require([
    'testBase/spec/modules/add_item_test'
], function(){
    'use strict';
    //console.log("module: ", AddItemTest);
    mocha.run();
});
