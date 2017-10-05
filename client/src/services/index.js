const angular = require('angular');

angular.module('eventHUD').service('signin', require('./signin.service'));
angular.module('eventHUD').service('websockets', require('./websockets.service'));
angular.module('eventHUD').service('groups', require('./groups.service'));
