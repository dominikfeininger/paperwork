(function() {
    'use strict';

    angular
        .module('app.models')
        .factory('Project', noteFactory);

    noteFactory.$inject = ['BaseModel'];
    /* @ngInject */
    function noteFactory(BaseModel) {
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
