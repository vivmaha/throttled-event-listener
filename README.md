# throttled-event-listener
IN PROGRESS
Throttle or debounce calls to window.addEventListener(). The listener will additionally be throttled by window.requestAnimationFrame().

#[Demo](https://vivmaha.github.io/throttled-event-listener)

# Install

    $ npm install --save-dev throttled-event-listener

# Usage

## Throttle

    var throttler = require('throttled-event-listener');
    throttler.add(
        'scroll',
        1000,
        function(event) {
            // called a maximum of once per 1000ms
        }
    );

## Debounce

    throttler.add(
        'scroll',
        1000,
        function(event) {
            // waits for a cooldown period of 1000ms between calls
        }, {
            debounce : true,
        }
    );

## Stop throttle

    throttler.end();

# Build

    $ git clone ...
    $ npm install
    $ grunt serve

    // Deployed to http://localhost:9001/
