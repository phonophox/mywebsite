import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './main.routes';

//creates the maincontroller class and the constructor for it
export class MainController {
  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
    this.load = false;
    this.hovered = [false,false,false];
    this.visited = [false,false,false];
  }
  hover(value){
  this.hovered[value]=true;
  this.visited[value]=true;

  }
  noHover(value){
    this.hovered[value]=false;
   }
  $onInit() {
  this.load = true;
  this.hovered = [false,false,false];
  console.log("this.hovered");
  console.log(this.hovered);
  }
}
//imports the ngroute into the 'webProjectsAppl.main' module and creates the config and name as well as the template and controller components
export default angular.module('mywebsiteApp.main', [ngRoute])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs: 'mainController'
  })
  .name;
