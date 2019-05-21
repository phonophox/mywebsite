'use strict';
import angular from 'angular';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

const ngRoute = require('angular-route');

import uiBootstrap from 'angular-ui-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import navbar from '../components/navbar/navbar.component';
import customFooter from '../components/customFooter/customFooter.component';
import { routeConfig } from './app.config';

import main from './main/main.component';
import about from './about/about.component';
import art from './art/art.component';
import contact from './contact/contact.component';
import constants from './app.constants';

import './app.scss';

angular
  .module('mywebsiteApp', [
    navbar,
    customFooter,
    ngCookies,
    ngResource,
    ngSanitize,
    ngRoute,
    uiBootstrap,

    main,
    about,
    art,
    contact,
    constants
])
.config(routeConfig)
.run(function(){
'ngInject';
});

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['mywebsiteApp'], {
      strictDi: true
    });
  });
