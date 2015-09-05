angular.module('fridge').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function ($urlRouterProvider, $stateProvider, $locationProvider) {

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
      })
      .state('pageEdit', {
        url: '/page/:pageId/edit',
        templateUrl: 'client/pages/edit/page-edit.ng.html',
        controller: 'PageEditCtrl'
      });

    $urlRouterProvider.otherwise("/");
  }
]);