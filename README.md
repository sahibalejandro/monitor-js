monitor-js
==========

Simple and easy script to validate a "condition" in time intervals and execute an "action" when the condition is true.

Use
====

    monitor({
        condition: function ()
        {
            // This is the condition to monitor
            return (some.test() == 'foo bar');
        },
        action: function ()
        {
            // Do this when the condition is TRUE and finish monitor
            alert('Hello, some test is equal to foo bar');
        },
        // Optional arguments:
        fail: function ()
        {
            // This code is executed if the monitor reach the max attempts
            // and the condition still evaluated to FALSE
            alert('Something is wrong :(');
        },
        max_attempts: 20, // Test the condition 20 times before fail.
        time: 500 // Time interval in miliseconds
    });
