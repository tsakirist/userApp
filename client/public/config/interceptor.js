angular.module('pubApp')
    .factory('AuthInterceptor', ['$q', '$window', ($q, $window) => {
        return {
            responseError : function (response)  {
                let deferred = $q.defer();
                if(response.status === 401) {
                    console.log("Interceptor caught a 401");
                    $window.location.href = '/login';
                }
                deferred.reject(response);
                return deferred.promise;
            }
        }
    }])
    // .config(['$httpProvider', ($httpProvider) => {
    //     $httpProvider.interceptors.push('AuthInterceptor');
    // }]);

