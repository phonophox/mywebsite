/* eslint-disable linebreak-style */
'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class CustomFooterComponent {


  /* initialize variables in the constructor*/
  constructor() {
    'ngInject';
  }
  /* if route is active return path location */

}

export default angular.module('directives.customFooter', [])
  .component('customFooter', {
  template: require('./customFooter.html'),
  controller: CustomFooterComponent
}).name;
