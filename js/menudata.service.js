(function() {
    "use strict";
    
    angular.module("data")
    .service("MenuDataService", MenuDataService)
    .constant('CategoriesUrl', "https://davids-restaurant.herokuapp.com/categories.json")
    .constant('MenuItemsUrl', "https://davids-restaurant.herokuapp.com/menu_items.json");
    
    function MenuDataService() {
        
    }
})();