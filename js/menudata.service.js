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
            return $http.get(CategoriesUrl).then(function(response) {
                return response.data;
            });
        };
        
        service.getItemsForCategory = function(categoryShortName) {
            return $http.get(MenuItemsUrl, {
                params: {
                    category: categoryShortName
                }
            }).then(function(response) {
                return response.data.menu_items;
            });
        };
    };
})();