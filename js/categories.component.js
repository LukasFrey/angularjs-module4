(function() {
    "use strict";

    angular.module("MenuApp")
    .controller("CategoriesController", CategoriesController)
    .component("categories", {
        templateUrl: "categories.component.html",
        //controller: CategoriesController,
        bindings: {
            list: "<"
        }
    });
    
    CategoriesController.$inject = ["$element", "MenuDataService"];
    function CategoriesController($element, MenuDataService) {
        var $ctrl = this;
        
        var promise = MenuDataService.getAllCategories();
        promise.then(function(result) {
            $ctrl.list = result.data;
        });
        
    };
    
})();