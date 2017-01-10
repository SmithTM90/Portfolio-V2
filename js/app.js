var portApp = angular.module('portApp', ['ngRoute', 'navBar', 'footerBar']);

portApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  //define routes
  $routeProvider
  .when('/', {
    templateUrl: 'views/index.html',
    controller: 'HomeCtrl'
  })
  .when('/Portfolio-V2/#!/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/Portfolio-V2/#!/portfolio', {
  	templateUrl: 'views/portfolio.html',
  	controller: 'PortfolioCtrl'
  })
  .when('/Portfolio-V2/#!/contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl'
  })
  .otherwise({
    templateUrl: 'views/404.html'
  });

  $locationProvider.html5Mode(false).hashPrefix('!');

}]);