(function() {

    var app = require('../../app').app;
    app.controller(
        'pageHome', 
        [
            '$scope',
            function($scope) {
                $scope.inputs = [];
                window.addEventListener('mousedown', function(ev) {
                    $scope.inputs.push({});
                    $scope.$apply();
                });
            }
        ]
    );

})();

