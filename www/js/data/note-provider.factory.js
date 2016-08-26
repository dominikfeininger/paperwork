(function () {
    'use strict';

    angular
        .module('app.data-providers')
        .factory('noteProvider', noteProviderFactory);

    noteProviderFactory.$inject = ['$q'];
    /* @ngInject */
    function noteProviderFactory($q) {
        return {
            retrieve: retrieve

        };

        function retrieve(options) {

        }

    }
})();
