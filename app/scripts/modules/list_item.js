/* global define */
define(function() {
    'use strict';
    var ListItemModule = function(sb){
        var list = sb.dom.find('#listItemsWidget ul');
        function _addItemCallback(item) {
            sb.dom.wrap('<li>' + item + '</li>').appendTo(list);
        }

        return {
            create: function(){
                sb.subscribe('addItem', _addItemCallback);
            },
            destroy: function(){}
        };
    };

    return ListItemModule;
});

