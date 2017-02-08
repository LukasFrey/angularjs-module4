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
            url: "/home",
            templateUrl: "home.state.html"
        })
        .state("categories", {
            url: "/categories",
            templateUrl: "categories.state.html",
            controller: "CategoriesController as $ctrl",
            resolve: {
                entries: ["MenuDataService", function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state("items", {
            url: "/items/{category}",
            templateUrl: "items.state.html",
            controller: "ItemsController as $ctrl",
            resolve: {
                entries: ["MenuDataService", "$stateParams", function(MenuDataService, $stateParams) {
                    return MenuDataService.getItemsForCategory($stateParams.category);
                }], 
                cat: ["$stateParams", function($stateParams) {
                    return $stateParams.category;
                }]
            }
        });
    };
})();
