(function() {
  var app = angular.module('frontEnd',[]);

  app.controller('tableController', ['$scope', '$http', function($scope, $http){
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchUser   = '';     // set the default search/filter term

    $scope.addRow = function(){	
      if (!$scope.name|| !$scope.dob || !$scope.gender)
      return;
      
      $scope.users.push({ 'name':$scope.name, 'dob': $scope.dob, 'gender':$scope.gender });
      $scope.name='';
      $scope.dob='';
      $scope.gender='';
    };

    $http.get('users.json').then(function(response){
      $scope.users = response.data;
    });

    $scope.master = {};
    $scope.reset = function() {
      $scope.adicionar.$setPristine();
      $scope.adicionar.$setValidity();
      $scope.adicionar.$setUntouched();
      //$scope.$apply();
    };

    app.directive('bDatepicker', function () {
      return {
          restrict: 'A',
          link: function (scope, el, attr) {
              el.datepicker({});
              var component = el.siblings('[data-toggle="datepicker"]');
              if (component.length) {
                  component.on('click', function () {
                      el.trigger('focus');
                  });
              };
          }
      };
    });

  }]);
  
})();