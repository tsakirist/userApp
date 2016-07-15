angular.module('myApp')
    .factory('AuthService', ['$q', '$http', 'Session', function($q, $http, Session) {

        let userLogged = false;

        //Return available functions
        return ({
            isLoggedIn: isLoggedIn,
            getUserStatus: getUserStatus,
            login: login,
            logout: logout,
            register: register
        });

        function isLoggedIn() {
            return userLogged;
        }

        function getUserStatus() {
            return $http.get('/api/status')
                .then(function (res) {
                    if(res.data.active) {
                        userLogged = true;
                    }
                    else {
                        userLogged = false;
                    }
                },
                function (err) {
                    userLogged = false;
                });
        }

        function login(username, password) {
            let deferred = $q.defer();
            $http.post('/api/login', {username: username , password: password})
                .then(function (res) {
                    console.log('Logged in ', res.data);
                    Session.create(res.data);
                    userLogged = true;
                    deferred.resolve();
                },
                function (err) {
                    userLogged = false;
                    deferred.reject();
                });

            return deferred.promise;
        }

        function logout() {
            let deferred = $q.defer();
            $http.get('/api/logout')
                .then(function (res) {
                    userLogged = false;
                    user = null;
                    Session.destroy();
                    deferred.resolve();
                },
                function (err) {
                    console.log('ERROR ', err.message);
                    userLogged = false;
                    deferred.reject();
                });

            return deferred.promise;
        }

        function register(username, password, email) {
            let deferred = $q.defer();
            $http.post('api/users', {username: username, password: password, email: email})
                .then(function (res) {
                    console.log("Successful registration of " + res.data);
                    deferred.resolve();
                    // self.clearFields();
                    // $state.go('user');
                },
                function(err) {
                    console.log('Error registration' , err.message);
                    alert("Error occurred, try again!");
                    deferred.reject();
                });

            return deferred.promise;
        }

}]);