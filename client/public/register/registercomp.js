const registerCtrl = ['$state', 'AuthService', function($state, AuthService) {

    const self = this;

    self.username   = '';
    self.pasword    = '';
    self.email      = '';

    self.register =  () => {
        if(self.username=='' || self.password=='' || self.email=='') {
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