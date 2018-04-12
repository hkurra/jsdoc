'use strict';

/**
 * Ignores all native(extended through CEF/V8) function declaration 
 * sample : native function myNativeFunction();
 *
 * @module plugins/ignoreNative
 */

exports.handlers = {
    beforeParse: function (e) {
        var re = /^[\s]*(native)[\s\S]*?;/gm;
        e.source = e.source.replace(re, ' ')
    }
};