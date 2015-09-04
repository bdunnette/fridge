angular.module('fridge', ['angular-meteor', 'textAngular', 'ui.router']);

angular.module('fridge').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){
 
      $locationProvider.html5Mode(true);
 
      $stateProvider
        .state('pages', {
          url: '/',
          templateUrl: 'client/pages/list/pages-list.ng.html',
          controller: 'PagesListCtrl'
        })
        .state('pageView', {
          url: '/page/:pageId',
          templateUrl: 'client/pages/view/page-view.ng.html',
          controller: 'PageViewCtrl'
        });
 
      $urlRouterProvider.otherwise("/");
    }]);