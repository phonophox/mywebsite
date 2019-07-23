import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './art.routes';

//creates the maincontroller class and the constructor for it
export class ArtController {
  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
    this.load = false;
    this.toggle=0;
        this.hovered = [false,false,false,false,false,false,false,false,false,false,false,false];
        this.visited = [false,false,false,false,false,false,false,false,false,false,false,false];
    this.galleryMode = false;
    this.selectedPic =0;
    this.pics=[
    {src:"../../assets/images/painting/throne.jpg", number:1, expanded:false, title:"Before the Throne", materials: "3'x4' Oil on Canvas"},
    {src:"../../assets/images/painting/hands.jpg", number:2, expanded:false, title:"Hands", materials: "4'x3' Oil on Canvas"},
    {src:"../../assets/images/painting/laying.jpg", number:3, expanded:false, title:"Tension", materials: "4'x2.5' Oil on Canvas"},
    {src:"../../assets/images/painting/skull.jpg", number:4, expanded:false, title:"The Advisor", materials: "1.5'x2' Oil on Board"},
    {src:"../../assets/images/painting/view.jpg", number:5, expanded:false, title:"Lying Together", materials: "4'x4' Oil on Canvas"},
    {src:"../../assets/images/painting/death.jpg", number:6, expanded:false, title:"Death", materials: "2'x3' Oil on Canvas"},
    {src:"../../assets/images/painting/famine.jpg", number:7, expanded:false, title:"Famine", materials: "2'x3' Oil on Canvas"},
    {src:"../../assets/images/painting/conquest.jpg", number:8, expanded:false, title:"Conquest", materials: "2'x3' Oil on Canvas"},
    {src:"../../assets/images/painting/scratchboard.jpg", number:9, expanded:false, title:"Self Portrait", materials: "1'x2' Scratchboard"},
    {src:"../../assets/images/painting/denim.jpg", number:10, expanded:false, title:"Dijon and Denim", materials: "2'x3' Oil on Board"},
    {src:"../../assets/images/painting/demon.jpg", number:11, expanded:false, title:"Dijon Demon", materials: "2'x3' Oil on Paper"},
    {src:"../../assets/images/painting/charging.jpg", number:12, expanded:false, title:"Charged", materials: "3'x4' Mixed Media"}

    ];
    this.pics2=[
    {src:"../../assets/images/fox-icon-1-01.png", number:13, expanded:false, title:"Geometric Fox Icon", materials: "Digital, Illustrator"},
    {src:"../../assets/images/fox-icon-2-01.png", number:14, expanded:false, title:"Modern Fox Icon", materials: "Digital, Illustrator"}
    ];
    this.icons=[
    {src:"../../assets/images/myLogoMain.svg", number:15, expanded:false, title:"Geometric Fox Icon", materials: "Digital, Illustrator"},
    {src:"../../assets/images/myLogoSimple.svg", number:15, expanded:false, title:"Modern Fox Icon", materials: "Digital, Illustrator"},
    {src:"../../assets/images/myLogoBrush.svg", number:15, expanded:false, title:"Modern Fox Icon", materials: "Digital, Illustrator"},
    {src:"../../assets/images/myLogoNegative.svg", number:15, expanded:false, title:"Modern Fox Icon", materials: "Digital, Illustrator"},
    ];
  }
  hover(value){
    this.hovered[value]=true;
    this.visited[value]=true;
    console.log(this.hovered);
   }
  noHover(value){
      this.hovered[value]=false;
  }
  toggleTab(value){
  this.toggle=value;
  }
  $onInit() {
  this.load = true;
  }
  expandPicture(value){
  if(this.galleryMode == true){
  this.galleryMode = false;
  this.selectedPic =0;
  }
  else{
  this.galleryMode = true;
  this.selectedPic = value;
  }
  }
  returnSelected(value){
  if(this.selectedPic==value){
  return true;
  }
  else{
  return false;
  }
  }

}
//imports the ngroute into the 'webProjectsAppl.main' module and creates the config and name as well as the template and controller components
export default angular.module('mywebsiteApp.art', [ngRoute])
  .config(routing)
  .component('art', {
    template: require('./art.html'),
    controller: ArtController,
    controllerAs: 'artController'
  })
  .name;
