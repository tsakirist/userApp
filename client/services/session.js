angular.module('myApp')
    .service('Session', function() {

        this.create = (data) => {
            this.username = data.username;
            this.password = data.password;
            this.email = data.email;
            console.log('Created session with: ', [this.username, this.password, this.email]);
        };

        this.destroy = () => {
            this.username = null;
            this.password = null;
            this.email = null;
        };
    });