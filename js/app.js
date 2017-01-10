var portApp = angular.module('portApp', ['ngRoute', 'navBar', 'footerBar']);

portApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  //define routes
  $routeProvider
  .when('https://smithtm90.github.io/Portfolio-V2/#!/', {
    templateUrl: 'views/index.html',
    controller: 'HomeCtrl'
  })
  .when('https://smithtm90.github.io/Portfolio-V2/#!/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('https://smithtm90.github.io/Portfolio-V2/#!/portfolio', {
  	templateUrl: 'views/portfolio.html',
  	controller: 'PortfolioCtrl'
  })
  .when('https://smithtm90.github.io/Portfolio-V2/#!/contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl'
  })
  .otherwise({
    templateUrl: 'views/404.html'
  });

  $locationProvider.html5Mode(false).hashPrefix('!');

}]);