'use strict';
angular.module('FriendsWithLetters.controllers', [])

.controller('MainCtrl', function($scope, $state) {
  console.log('HomeTabCtrl');

  $scope.toSignUp = function(){
  	console.log('IndexCtrl2');
    // $scope.taksModal.show();
    $state.go('signup');
  }

  $scope.toSignIn = function(){
  	console.log('sign in');
    $state.go('signin');
  }

})

.controller('SignUpCtrl', function($scope, $state) {
  console.log('Sign Up Ctrl');
  $scope.info = [];

  $scope.exitSignUp = function(){
      $state.go('main');
  }

  $scope.addAccount = function(info){
    console.log('swag');
    $scope.info.push({
      name: info.username,
      email: info.email,
      password: info.password
    });
    console.log($scope.info);
    
    window.localStorage['info_username'] = JSON.stringify($scope.info.username);
    window.localStorage['info_password'] = JSON.stringify($scope.info.password);
    window.localStorage['info_email'] = JSON.stringify($scope.info.email);

    $state.go('gamemain');
  }
})
.controller('SignInCtrl', function($scope, $state){
  console.log('Sign IN Controller');

  $scope.info = [];

  $scope.signIn = function(info){
    $scope.info.push({
      user_email: info.user_email,
      password: info.password
    });

    //CONFRIM LOG IN TO SERVER OR W.E

    //
    window.localStorage['info_user_email'] = JSON.stringify($scope.info.user_email)
  }
})

.controller('GameCtrl', function($scope, $state) {
  console.log('Game Ctrl');

});
