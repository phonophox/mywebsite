import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './about.routes';

//creates the maincontroller class and the constructor for it
export class AboutController {
  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
    this.load = false;
    this.selected1 = true;
    this.selected2 = false;
    this.selected3 = false;
    this.selected4 = false;
  }

  $onInit() {
  this.load = true;
  }
  switchSelected(value){
  if(value==1){
      this.selected1 = true;
      this.selected2 = false;
      this.selected3 = false;
      this.selected4 = false;
  }
  else if(value==2){
        this.selected1 = false;
        this.selected2 = true;
        this.selected3 = false;
        this.selected4 = false;

  }
  else if(value==3){
          this.selected1 = false;
          this.selected2 = false;
          this.selected3 = true;
          this.selected4 = false;

    }
    else if(value==4){
            this.selected1 = false;
            this.selected2 = false;
            this.selected3 = false;
            this.selected4 = true;

      }
  }
}
//imports the ngroute into the 'webProjectsAppl.main' module and creates the config and name as well as the template and controller components
export default angular.module('mywebsiteApp.about', [ngRoute])
  .config(routing)
  .component('about', {
    template: require('./about.html'),
    controller: AboutController,
    controllerAs: 'aboutController'
  })
  .name;
