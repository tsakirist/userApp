angular.module('privateApp')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        //For any unmatched url, redirect to our login page

        $urlRouterProvider.otherwise("/private/profile");

        $locationProvider.html5Mode(true);  //Remove the # from the URL's

        $stateProvider
            .state('logout', {
                url: '/private/logout',
                component: 'logoutComp'
            })
            .state('profile', {
                url: '/private/profile',
                component: 'profileComp',
                onEnter: ($http, Session) => {
                    console.log('ghi');
                    $http.get('/api/profile/user')
                        .then(function(res) {
                            Session.create(res.data);
                        }, function (err) {
                            console.log('error');
                        });
                }
            })
            .state('edit', {
                url: '/private/profile/edit',
                component: 'editComp'
            })
    }]);