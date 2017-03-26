"use strict";
var appHome = angular.module('appHomeController', []);
appHome.config(function ($routeProvider,$locationProvider) {
    // $locationProvider.html5Mode(true);
});
appHome.controller('appHome', function ($scope) {
    $scope.text = 12;
});

module.exports = 'appHomeController';