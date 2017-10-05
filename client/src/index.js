const angular = require('angular');

angular.module('eventHUD', ['ngRoute'])
  .config(($routeProvider, $locationProvider) => {
    $routeProvider
      .when('/', {
        template: '<sign-in class="sign-in" sign-in="$resolve.signIn"></sign-in>',
        resolve: {
          signIn: signin => signin.submit()
        }
      })
      .when('/organizer', {
        template: '<manage-event user="$resolve.user"></manage-event>',
        resolve: {
          user: signin => signin.getUser()
        }
      })
      .when('/staff', {
        template: '<staff-view user="$resolve.user"></staff-view>',
        resolve: {
          user: signin => signin.getUser()
        }
      })
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

require('./components');
require('./services');
