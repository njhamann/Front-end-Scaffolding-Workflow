/* global define */
define(function() {
    'use strict';
    var AddItemModule = function(sb) {
        var inputField = sb.dom.find('#addItemWidget input'),
            addItemButton = sb.dom.find('#addItemWidget a');

        function _notifyActionCallback() {
            sb.publish('addItem', inputField.val());
        }

        return {
            create: function() {
                addItemButton.bind('click', _notifyActionCallback);
            },
            destroy: function() { }
        };
    };

    return AddItemModule;
});

