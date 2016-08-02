angular
    .module('abhiApp')
    .factory('restaurantDataService', restaurantDataService);

restaurantDataService.$inject = ['$http','$q'];

function restaurantDataService($http,$q) {
    var self = this;
    return {

        getRestaurantList:function () {
            var deferred = $q.defer(),
                httpPromise = $http.get('/api/restaurants');

            httpPromise.success(function(restaurants){
                deferred.resolve(restaurants);
            })
                .error(function (error) {
                    console.error('Error:' + error);
                });

            return deferred.promise;
        },
        getRestaurantData:function () {
            
        }
    }
}