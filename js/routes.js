(function() {
    "use strict";

    angular.module("MenuApp")
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
        .otherwise("/home");

        $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "home.state.html"           
        })
        .state("categories", {
            url: "/categories",
            templateUrl: "categories.state.html",
            controller: "CategoriesController as $ctrl",
            resolve: {
                list: ["MenuDataService", function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        });
        /*.state("items", {
            url: "/items/{category}",
            templateUrl: "items.state.html",
            //controller: "ItemsController as $ctrl"
        });*/
    };
})();