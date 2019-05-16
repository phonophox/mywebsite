import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './contact.routes';

export class ContactController {
  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
    this.load = false;
  }

  $onInit() {
  this.load = true;
  }
}
export default angular.module('mywebsiteApp.contact', [ngRoute])
  .config(routing)
  .component('contact', {
    template: require('./contact.html'),
    controller: ContactController,
    controllerAs: 'contactController'
  })
  .name;
