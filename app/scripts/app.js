'use strict';

angular.module('mediApp', ['ui.router', 'ngResource'])
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
            .state('app', {
                url:'/',
                views: {
					'header': {
                        templateUrl : 'views/header.html'		
					},
                    'content': {
                        templateUrl : 'views/main.html',
                        controller  : 'MainCtrl'
                    },
					'footer': {
                        templateUrl : 'views/footer.html'
                    }
				}
            })
			.state('app.aboutus', {
                url: 'aboutus',
                views: {
                    'content@': {
                        template : '<h1> about us!</H1>'
                    }
				}
            })
			.state('app.contactus', {
                url: 'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contact.html'
                    }
				}
            })
            .state('app.medication', {
                url: 'medication',
                views: {
                    'content@': {
                        templateUrl : 'views/medication.html',
                        controller  : 'MedicationCtrl'
                    }
				}
            });
	
        $urlRouterProvider.otherwise('/');
})
;
