require.config({
    baseUrl: 'scripts/apps',
    paths: {
        core: '../core',
        sandbox: '../sandbox',
        vendor: '../vendor',
        modules: '../modules',
        jquery: '../../bower_components/jquery/jquery'
    }
});

require([
    'core',
    'sandbox',
    //modules
    'modules/add_item',
    'modules/list_item'
], function(
    Core,
    Sandbox,
    //modules
    AddItem,
    ListItem
) {
    'use strict';
    var App = App || {};
    App.Sandbox = new Sandbox() || {};
    App.Core = new Core(App.Sandbox) || {};
    App.Core.register('AddItemModule', AddItem);
    App.Core.register('ListItemModule', ListItem);
    App.Core.startAll();

});
