(function() {
    "use strict";
    
    angular.module("data")
    .service("MenuDataService", MenuDataService)
    .constant('CategoriesUrl', "https://davids-restaurant.herokuapp.com/categories.json")
    .constant('MenuItemsUrl', "https://davids-restaurant.herokuapp.com/menu_items.json");
    
    MenuDataService.$inject = ["$http", "CategoriesUrl", "MenuItemsUrl"];
    function MenuDataService($http, CategoriesUrl, MenuItemsUrl) {
        var service = this;
        
        service.getAllCategories = function() {
            return $http({
                url: CategoriesUrl
            });
        };
        
        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                url: MenuItemsUrl,
                params: {
                    category: categoryShortName
                }
            });
        };
    };
})();