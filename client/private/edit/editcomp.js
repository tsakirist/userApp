const editCtrl = ['AuthService', '$state', 'Session', function(AuthService, $state, Session) {

    const self = this;

    self.username = Session.username;
    self.password = Session.password;
    self.email = Session.email;

    self.getUsername = () => {
        return Session.username;
    };

    self.getPassword = () => {
        return Session.password;
    };

    self.getEmail = () => {
        return Session.email;
    };
}];

angular.module('privateApp')
    .component('editComp', {
        templateUrl: '/private/edit/edit_template.html',
        controller: editCtrl
    });