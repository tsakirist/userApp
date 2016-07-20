const loginCtrl = ['AuthService', '$window', '$mdToast', function(AuthService, $window, $mdToast) {

    const self = this;

    self.username   = '';
    self.pasword    = '';
    self.email      = '';

    self.login = () => {
        if(self.username=='' || self.password=='') {
            $mdToast.show(
                $mdToast.simple('Empty fields! Try again.')
                    .position('top')
                    .hideDelay(3000)
            );
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
    //
    // self.showToast = () => {
    //     console.log('toast');
    //     $mdToast.show(
    //         $mdToast.simple('Register')
    //             .position('top left')
    //             .hideDelay(3000)
    //     );
    // }
}];

angular.module('pubApp')
    .component('loginComp', {
        templateUrl: '/public/login/login_template.html',
        controller: loginCtrl
});