angular.module('privateApp')
    .service('Session', function() {

        this.create = (data) => {
            this.username = data.username;
            this.password = data.password;
            this.email = data.email;
            this.id = data._id;
            console.log('Created session with: ', [this.username, this.password, this.email, this.id]);
        };

        this.set = (data) => {
            this.username = data.username;
            this.password = data.password;
            this.email = data.email;
            console.log('Set session with: ', [this.username, this.password, this.email, this.id]);
        };

        this.destroy = () => {
            this.username = null;
            this.password = null;
            this.email = null;
            this.id = null;
        };
    });