// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

        .config(['$httpProvider', function ($httpProvider) {
                $httpProvider.defaults.headers.common = {};
                $httpProvider.defaults.headers.post = {};
                $httpProvider.defaults.headers.put = {};
                $httpProvider.defaults.headers.patch = {};
            }
        ])
        
       .run(function ($ionicPlatform) {

            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider

                    .state('app', {
                        url: '/app',
                        abstract: true,
                        templateUrl: 'templates/menu.html',
                        controller: 'AppCtrl'
                    })

                    .state('app.map', {
                        url: '/map',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/map.html',
                                controller: 'MapCtrl'
                            }
                        }
                    })

                    .state('app.lista', {
                        url: '/lista',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/lista.html',
                                controller: 'ListaCtrl'
                            }
                        }
                    })
                    .state('app.promos', {
                        url: '/promos',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/promos.html',
                                controller: 'PromosCtrl'
                            }
                        }
                    })
                    .state('app.specificInfo', {
                        url: '/lista/:specificInfo',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/specificInfo.html',
                                controller: 'SpecificInfoCtrl'
                            }
                        }
                    })

                    .state('app.profile', {
                        url: '/profile',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/profile.html',
                                controller: 'ProfileCtrl'
                            }
                        }
                    })
                    
                    .state('app.login', {
                        url: '/login',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/login.html',
                                controller: 'LoginCtrl'
                            }}
                    })
                  
                    .state('app.register', {
                        url: '/register',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/registrar.html',
                                controller: 'RegisterCtrl'
                            }}
                    })
            ;



            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/login');
        });
