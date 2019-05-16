'use strict';
//this function takes the $routeProvider and sets the template of it
export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/contact', {
    template: '<contact></contact>'
  });
}
