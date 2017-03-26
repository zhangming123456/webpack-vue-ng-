"use strict";
var appHome = angular.module('appmainController', []);
appHome.config(function ($routeProvider,$locationProvider) {
    // $locationProvider.html5Mode(true);
    // $routeProvider.when('/main', {
    //     template: require('./main.html'),
    //     controller: 'appMain'
    // })
});
appHome.controller('appMain', function ($scope) {
    $scope.text = 14;
});

module.exports = 'appmainController';