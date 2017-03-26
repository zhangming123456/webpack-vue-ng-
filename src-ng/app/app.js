'use strict';
// require('../../node_modules/font-awesome/css/font-awesome.min.css');

angular.module('app', [
    require('angular-route'),
    require('./routing.js'),
])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/home', {
                template: require('../components/home/home.html'),
                controller: 'appHome'
            })
            .when('/main', {
                template: require('../components/main/main.html'),
                controller: 'appMain'
            })
            .otherwise("/home");
        $locationProvider.html5Mode(true);
    });
