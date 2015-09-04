angular
  .module('fridge').controller('PageEditCtrl', ['$scope', '$meteor',
    function ($scope, $meteor) {
      $scope.pages = $meteor.collection(Pages);
      
      $scope.dropHandler = function(file, insertAction){
        console.log(file);
      };
    }
  ]);