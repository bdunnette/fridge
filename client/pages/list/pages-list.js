angular
  .module('fridge').controller('PagesListCtrl', ['$scope', '$meteor',
    function ($scope, $meteor) {
      $scope.pages = $meteor.collection(Pages);
    }
  ]);