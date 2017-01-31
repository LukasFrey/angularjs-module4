(function() {
    "use strict";

    angular.module("MenuApp")
    .controller("ItemsController", ItemsController)
    .component("items", {
        templateUrl: "items.component.html",
        bindings: {
            list: "<"
        }
    });

    ItemsController.$inject = ["MenuDataService", "$state"];
    function ItemsController(MenuDataService, $state) {
        var $ctrl = this;
        var promise = MenuDataService.getItemsForCategory($state.params.category);
        promise.then(function(result) {
          console.log(result.data);
            $ctrl.cat = $state.params.category;
            $ctrl.list = result.data.menu_items;
        });
    };

})();
