angular.module('eventHUD', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        template: '<sign-in class="sign-in" sign-in="$resolve.signIn"></sign-in>',
        resolve: {
          signIn: (signin) => {
            return signin.submit();
          }
        }
      })
      .when('/organizer', {
        template: '<manage-event user="$resolve.user"></manage-event>',
        resolve: {
          user: (signin) => {
            return signin.getUser();
          }
        }
      })
      .otherwise('/');

      $locationProvider.html5Mode(true);
  });

require('./components');
require('./services');
