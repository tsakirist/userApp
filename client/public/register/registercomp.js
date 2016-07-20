const registerCtrl = ['$state', 'AuthService', '$mdToast', function($state, AuthService, $mdToast) {

    const self = this;

    self.username = '';
    self.password = '';
    self.email = '';

    self.register =  () => {
        if(self.username=='' || self.password=='' || self.email=='') {
            $mdToast.show(
                $mdToast.simple('Empty fields! Try again.')
                    .position('top')
                    .hideDelay(3000)
            );
            return;
        }
        AuthService.register(self.username, self.password, self.email)
            .then(() => {
                    $state.go('login');
                },
                () => {
                    self.clearFields();
                });
    };

    self.clearFields = () => {
        self.username   = '';
        self.password   = '';
        self.email      = '';
    };
}];

angular.module('pubApp')
    .component('regComp', {
        templateUrl: '/public/register/register_template.html',
        controller: registerCtrl
});