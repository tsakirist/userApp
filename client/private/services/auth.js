angular.module('privateApp')
    .factory('AuthService', ['$q', '$http', function($q, $http, Session) {

        return ({
            edit: edit,
            logout: logout
        });

        function logout() {
            let deferred = $q.defer();
            $http.get('/private/logout')
                .then((res) => {
                        if(Session) {Session.destroy();}
                        deferred.resolve();
                    },
                    (err) => {
                        console.log('ERROR ', err.message);
                        deferred.reject();
                    });

            return deferred.promise;
        }

        function edit(username, password, email, id) {
            let deferred = $q.defer();
            $http.put('/api/users/' + id, {username: username, password: password, email: email})
                .then((res) => {
                    console.log('Update req');
                    deferred.resolve();
                }, (err) => {
                    console.log('erorr on update');
                    deferred.reject();
                });

            return deferred.promise;
        }
    }]);