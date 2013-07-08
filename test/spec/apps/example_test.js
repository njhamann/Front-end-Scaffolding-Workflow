/*global describe, it */
'use strict';

require.config({
    baseUrl: 'test/spec/app',
    paths: {
        lib: '../../lib',
        core: '../../scripts/core',
        sandbox: '../../scripts/sandbox',
        vendor: '../../scripts/vendor',
        modules: '../../scripts/modules',
        jquery: '../../bower_components/jquery/jquery'
    }
});

require(['require', 'lib/chai', 'lib/mocha'], function(require){
    mocha.setup('bdd');
    // require(['spec/test.module', 'spec/test.script'], function(module){
    require(['spec/test.module'], function(module){
        console.log("module: ", module);
        mocha.run();
    });
});

