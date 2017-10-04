angular.module('eventHUD', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        template: '<sign-in class="sign-in"></sign-in>'
      })
      .when('/organizer', {
        template: '<manage-event></manage-event>'
      })
      .otherwise('/');

      $locationProvider.html5Mode(true);
  });

require('./components');
require('./services');
