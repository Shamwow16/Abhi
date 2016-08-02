angular
    .module('abhiApp')
    .controller('dashboardCtrl', DashboardController);

DashboardController.$inject = ['restaurantDataService'];

function DashboardController(restaurantDataService) {
    var vm = this;
    vm.search = '';
    vm.restaurantList = [];
    vm.filteredList = [];
    restaurantDataService.getRestaurantList().then(function (restaurants) {
        console.log(restaurants);
       vm.restaurantList = restaurants;

    }, function (error) {
        console.error(error);
    });

    vm.filterList = function () {
        var search = vm.search.toLowerCase();
        vm.filteredList = [];
        if (search === '') {
            vm.filteredList = vm.restaurantList;
        }

        else {
            angular.forEach(vm.restaurantList, function (restaurant) {
                if (restaurant.restaurantName.toLowerCase().indexOf(search) >= 0) {
                    vm.filteredList.push(restaurant);
                }
            })
        }
    }

}
