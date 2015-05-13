angular.module('archivierungs', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'HomeCtrl',
    templateUrl: 'views/home.html'
  })
  .when('/search', {
    controller: 'SearchCtrl',
    templateUrl: 'views/search.html'
  });
})
.controller('HomeCtrl', function($scope, $location) {
  $scope.movies = [{
    title: 'The Rock',
    year: 1995
  }, {
    title: 'Air Force One',
    year: 1992
  }];
  $scope.search = function() {
    $location.path('/search').search({
      query: $scope.query
    });
  };
})
.controller('SearchCtrl', function($scope, $location) {
  var params = $location.search();
  $scope.query = params.query;
});
