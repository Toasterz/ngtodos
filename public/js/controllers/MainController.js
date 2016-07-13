(function(){

  angular.module('ngtodos') //Getter
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'TodoService'];
    function MainController($scope, TodoService)
    {
      $scope.message = 'testy testing test';
      console.log(TodoService);
      var todos = TodoService.todos;
      TodoService.readAll()
                  .then(function(response)
                {
                  console.log(todos);
                });
    }
})();
