/**
 * Monitor JS v1.0
 * @author Sahib J. Leo
 * http://sahib.io/
 * http://github.com/sahibalejandro/monitor-js
 */

function monitor(options)
{
    var interval;
    var attempt = 0;

    options = $.extend({}, {
        'condition': function () { return true; },
        'action': function () { },
        'fail': function () { },
        'max_attempts': 20,
        'time': 500,
    }, options);

    interval = setInterval(function ()
    {
        if (options.condition()) {
            clearInterval(interval);
            options.action();
        } else if (attempt < options.max_attempts) {
            attempt++;
        } else {
            clearInterval(interval);
            options.fail();
        }
    }, options.time);
}
