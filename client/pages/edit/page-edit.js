angular
  .module('fridge').controller('PageEditCtrl', ['$scope', '$meteor', '$stateParams',
    function ($scope, $meteor, $stateParams) {
      
      // Bind 'page' to the page specified in the route; set 3rd parameter to false to prevent real-time updating
      $scope.page = $meteor.object(Pages, $stateParams.pageId, false).subscribe('page', $stateParams.pageId);

      $scope.dropHandler = function (file, insertAction) {
        console.log(file);
      };
      
      $scope.save = function() {
        $scope.page.save();
      };
 
      $scope.reset = function() {
        $scope.page.reset();
      };

    }
  ])
  .config(function ($provide) {
    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function (taRegisterTool, taOptions) {
      // $delegate is the taOptions we are decorating
      // register the tool with textAngular
      taRegisterTool('colourRed', {
        iconclass: "fa fa-square red",
        action: function () {
          this.$editor().wrapSelection('forecolor', 'red');
        }
      });
      // add the button to the default toolbar definition
      taOptions.toolbar[1].push('colourRed');
      return taOptions;
    }]);
  });