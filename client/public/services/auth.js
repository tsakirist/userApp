angular.module('pubApp')
    .factory('AuthService', ['$q', '$http', function($q, $http) {

        return ({
            login: login,
            register: register
        });

        function login(username, password) {
            let deferred = $q.defer();
            $http.post('/api/login', {username: username , password: password})
                .then((res) => {
                        console.log('Logged in ', res.data);
                        deferred.resolve();
                    },
                    (err) => {
                        alert("Wrong username or Password");
                        deferred.reject();
                    });

            return deferred.promise;
        }

        function register(username, password, email) {
            let deferred = $q.defer();
            $http.post('/api/users', {username: username, password: password, email: email})
                .then((res) => {
                        console.log("Successful registration!");
                        deferred.resolve();
                    },
                    (err) => {
                        console.log('Error registration' , err.message);
                        alert("Error occurred, try again!");
                        deferred.reject();
                    });

            return deferred.promise;
        }
    }]);