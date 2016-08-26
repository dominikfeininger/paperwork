(function() {
    'use strict';

    angular
        .module('app.models')
        .factory('Project', notebookFactory);

    notebookFactory.$inject = ['BaseModel'];
    /* @ngInject */
    function notebookFactory(BaseModel) {
        BaseModel = BaseModel.get('Notebook', Notebook);
        angular.extend(Notebook, BaseModel);

        Notebook.prototype = Object.create(BaseModel.prototype);
        Notebook.prototype.constructor = Notebook;
        Notebook.prototype.retrieve = retrieve;

        return Notebook;

        ////////////////

        function Notebook(attributes) {
            BaseModel.call(this, attributes);
        }

        function retrieve(visual) {
            return Project.__getProvider().retrieve({id: this.id});
        }
    }
})();
