(function() {
    "use strict";
    
    angular.module("data")
    .service("MenuDataService", MenuDataService)
    .constant('CategoriesUrl', "https://davids-restaurant.herokuapp.com/categories.json")
    .constant('MenuItemsUrl', "https://davids-restaurant.herokuapp.com/menu_items.json");
    
    function MenuDataService() {
        var service = this;
        
        service.getAllCategories = function() {
            
        };
        
        service.getItemsForCategory = function(categoryShortName) {
            
        };
    }
})();