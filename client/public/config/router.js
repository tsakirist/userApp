angular.module('pubApp')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        //For any unmatched url, redirect to our login page

        $urlRouterProvider.otherwise("/login");

        $locationProvider.html5Mode(true);  //Remove the # from the URL's

        $stateProvider
            .state('login', {
                url: '/login',
                component: 'loginComp'
            })
            .state('register', {
                url: '/register',
                component: 'regComp'
            })
    }]);