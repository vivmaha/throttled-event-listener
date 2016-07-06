exports.add = function(
    type,
    timeout,
    listener,
    options // { debounce: bool, nonThrottledListener: function(event)}
) {
    var lastTime = new Date();
    if (!options) {
        options = {};
    }

    function wrappedListener(event) {
        if (options.nonThrottledListener) {
            options.nonThrottledListener(event);
        }
        var newLastTime = new Date();
        var elapsedTime = newLastTime - lastTime;
        if (options.debounce) {
            lastTime = newLastTime;
        }
        if (elapsedTime < timeout) {
            return;
        }
        lastTime = newLastTime;
        requestAnimationFrame(function () {
            listener(event);
        });
    }

    window.addEventListener(type, wrappedListener);
    
    /* 
    
    Common pattern:
        
        throttler.add(..., updateUI, ...);        
        // UI has to be updated even if no events have fired as yet
        requestAnimationFrame(updateUI);

    To simplify this scenario, the throttler fires a one-time event below:

    */    
    requestAnimationFrame(wrappedListener);

    return {
        end: function () {
            window.removeEventListener(type, wrappedListener);
        }
    };
};
