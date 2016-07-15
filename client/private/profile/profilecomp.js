const profileCtrl = ['Session', function(Session) {

    const self = this;

    self.Session = Session;

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
    .component('profileComp', {
        templateUrl: '/private/profile/profile_template.html',
        controller: profileCtrl
});