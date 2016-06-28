(function() {

    var app = require('../../app').app;
    app.controller(
        'pageHome', 
        [
            '$scope',
            function($scope) {
                $scope.inputs = [];
                $scope.throttled = [];
                $scope.streams = [ {
                    name : 'input',
                    data : [],
                }, {
                    name : 'throttled',
                    data : [],
                }, {
                    name : 'debounced',
                    data : [],
                }, ];

                function fire(streamIndex) {
                    $scope.streams[streamIndex].data.push({});
                    $scope.$apply();
                }

                window.addEventListener('mousedown', function(ev) {
                    fire(0);
                });

                var throttler = require('../../modules/throttled-event-listener');
                throttler.add(
                    'mousedown',
                    1000,
                    function() {
                        fire(1);
                    }
                );
                throttler.add(
                    'mousedown',
                    1000,
                    function() {
                        fire(2);
                    }, {
                        debounce : true,
                    }
                );

            }
        ]
    );

})();

