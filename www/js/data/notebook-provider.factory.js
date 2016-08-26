(function () {
    'use strict';

    angular
        .module('app.data-providers')
        .factory('notebookProvider', notebookProviderFactory);

    notebookProviderFactory.$inject = ['$q'];
    /* @ngInject */
    function notebookProviderFactory($q) {
        return {
            retrieve: retrieve

        };

        function retrieve(options) {

        }

    }
})();
