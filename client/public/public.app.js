angular.module('pubApp', ['ui.router', 'ngMaterial', 'ngMessages']);
angular.module('pubApp')
    .config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
});