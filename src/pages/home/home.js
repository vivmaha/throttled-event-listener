(function() {

    var app = require('../../app').app;
    app.controller(
        'pageHome', 
        [
            '$scope',
            function($scope) {
                var trackerElement = document.getElementsByClassName('tracker')[0];

                $scope.notifications = [];
                function OnNotification(type) {
                    $scope.notifications.unshift(type);
                    if ($scope.notifications.length > 20) {
                        $scope.notifications.pop();
                    }
                    $scope.$apply();
                }

                var clientRectNotifications = require('../../modules/client-rect-notifications');
                clientRectNotifications.add(
                    trackerElement,
                    {
                        completelyOutOfView : function() {
                            OnNotification('completelyOutOfView');
                        }, 
                        completelyInView : function() {
                            OnNotification('completelyInView');
                        },
                        mostlyInView : function() {
                            OnNotification('mostlyInView');
                        },
                        partiallyInView : function() {
                            OnNotification('partiallyInView');
                        }
                    }
                );
            }
        ]
    );

})();

