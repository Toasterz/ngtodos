(function(){

  angular.module('ngtodos') //Getter
        .controller('MainController', MainController);

    MainController.$inject = [];
    function MainController()
    {
      console.log('main');
    }
})();
