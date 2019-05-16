/* eslint-disable linebreak-style */
'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {

  isNavCollapsed = true; //menu will collapse

  /* initialize variables in the constructor*/
  constructor() {
    'ngInject';
  }
  /* if route is active return path location */

}

export default angular.module('directives.navbar', [])
  .component('navbar', {
  template: require('./navbar.html'),
  controller: NavbarComponent
}).name;
