angular
  .module('fridge').controller('PageViewCtrl', ['$scope', '$stateParams', '$meteor',
    function ($scope, $stateParams, $meteor) {
      $scope.page = $meteor.object(Pages, $stateParams.pageId).subscribe('page', $stateParams.pageId);
    }
  ]);