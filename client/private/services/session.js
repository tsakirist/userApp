angular.module('privateApp')
    .service('Session', function() {

        this.create = (data) => {
            this.username = data.username;
            this.password = data.password;
            this.email = data.email;
            this.id = data._id;
        };

        this.set = (data) => {
            this.username = data.username;
            this.password = data.password;
            this.email = data.email;
        };

        this.destroy = () => {
            this.username = null;
            this.password = null;
            this.email = null;
            this.id = null;
        };
    });