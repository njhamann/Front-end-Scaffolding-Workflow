/* global define */
define(['vendor/inheritance'], function(Class) {
    'use strict';
    return function(){
        var Sandbox = Class.extend({
            initialize: function(core) {
                this.publish = core.publish;
                this.subscribe = core.subscribe;
                this.dom = core.dom;
            }
        });
        return Sandbox;
    };
});

