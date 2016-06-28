# client-rect-notifications
Provides notifications for changes in the position of an HTML element relative to the viewport.

[demo](https://vivmaha.github.io/client-rect-notifications)

# Install

    $ npm install --save-dev client-rect-notifications

# Usage
  
    var htmlElement = ...;
	var clientRectNotifications = require('client-rect-notifications');
	clientRectNotifications.add(
	    htmlElement ,
	    {
	        completelyOutOfView : function() {
	            // do something
	        }, 
	        completelyInView : function() {
	            // do something
	        },
	        mostlyInView : function() {
	            // do something
	        },
	        partiallyInView : function() {
	            // do something
	        }
	    }
	);

# Build

    $ git clone ...
    $ npm install
    $ grunt serve

    // Deployed to http://localhost:9001/
