(function() {
    "use strict";

    angular.module("MenuApp")
    .controller("ItemsController", ItemsController);

    ItemsController.$inject = ["entries", "cat"];
    function ItemsController(entries, cat) {
        var $ctrl = this;
        console.log(entries);
        console.log(cat);
        $ctrl.entries = entries;
        $ctrl.cat = cat;
    };
    
})();
