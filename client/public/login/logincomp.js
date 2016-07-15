const loginCtrl = ['AuthService', '$window', function(AuthService, $window) {

    const self = this;

    self.username   = '';
    self.pasword    = '';
    self.email      = '';

    self.login = () => {
        if(self.username=='' || self.password=='') {
            return;
        }
        AuthService.login(self.username, self.password)
            .then(() => {
                $window.location.href = "/private/profile";
                },
                () => {
                    self.clearFields();
                });
    };

    self.clearFields = () => {
        self.username   = '';
        self.password   = '';
    };
}];

angular.module('pubApp')
    .component('loginComp', {
        templateUrl: '/public/login/login_template.html',
        controller: loginCtrl
});