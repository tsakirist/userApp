const editCtrl = ['AuthService', '$state', 'Session', function(AuthService, $state, Session) {

    const self = this;

    self.Session = Session;

    let prev_username = Session.username;
    let prev_password = Session.password;
    let prev_email = Session.email;

    self.getUsername = () => {
        return Session.username;
    };

    self.getPassword = () => {
        return Session.password;
    };

    self.getEmail = () => {
        return Session.email;
    };

    self.setFieldsOnError = () => {
        let data = {
            username: prev_username,
            password: prev_password,
            email: prev_email
        };
        Session.set(data);
    };

    self.edit = () => {
        AuthService.edit(Session.username, Session.password, Session.email, Session.id)
            .then(() => {
                $state.go('profile');
            }, () => {
                alert('Some error occurred');
                self.setFieldsOnError();
            });
    };
}];

angular.module('privateApp')
    .component('editComp', {
        templateUrl: '/private/edit/edit_template.html',
        controller: editCtrl
    });