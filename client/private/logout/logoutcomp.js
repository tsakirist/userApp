const logoutCtrl = ['AuthService', '$window', function(AuthService, $window) {

    AuthService.logout()
        .then(function () {
            console.log("Inside logout");
            $window.location.href = "http://" + $window.location.host + "/login";
            },
            function () {
                console.log('Some error at logout');
            });
}];

angular.module('privateApp')
    .component('logoutComp', {
        controller: logoutCtrl
});