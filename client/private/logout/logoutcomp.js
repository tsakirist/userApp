const logoutCtrl = ['AuthService', '$window', function(AuthService, $window) {

    AuthService.logout()
        .then(() => {
            console.log("Inside logout");
            $window.location.href = "http://" + $window.location.host + "/login";
            },
            () => {
                console.log('Some error at logout');
            });
}];

angular.module('privateApp')
    .component('logoutComp', {
        controller: logoutCtrl
});