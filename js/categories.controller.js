(function() {
    "use strict";

    angular.module("MenuApp")
    .controller("CategoriesController", CategoriesController);

    CategoriesController.$inject = ["entries"];
    function CategoriesController(entries) {
        var $ctrl = this;
        $ctrl.entries = entries;
    };
    
})();
