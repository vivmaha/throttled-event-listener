(function() {

    var app = require('../../app').app;
    app.controller(
        'pageHome', 
        [
            '$scope',
            function($scope) {

                var Stream = function(name) {
                    this.name = name;
                    this.data = [];
                }

                Stream.prototype.fire = function() {
                    this.data.push({});
                    $scope.$apply();
                }


                var inputStream = new Stream('input');
                var throttledStream = new Stream('throttled');
                var debouncedStream = new Stream('debounced');

                $scope.streams = [ 
                    inputStream,
                    throttledStream,
                    debouncedStream,
                ];                

                window.addEventListener('mousedown', function(ev) {
                    inputStream.fire();
                });

                var throttler = require('../../modules/throttled-event-listener');
                throttler.add(
                    'mousedown',
                    1000,
                    function() {
                        throttledStream.fire();
                    }
                );
                throttler.add(
                    'mousedown',
                    1000,
                    function() {
                        debouncedStream.fire();
                    }, {
                        debounce : true,
                    }
                );

            }
        ]
    );

})();

