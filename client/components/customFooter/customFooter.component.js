/* eslint-disable linebreak-style */
'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class FooterComponent {


  /* initialize variables in the constructor*/
  constructor() {
    'ngInject';
  }
  /* if route is active return path location */

}

export default angular.module('directives.footer', [])
  .component('footer', {
  template: require('./footer.html'),
  controller: FooterComponent
}).name;
