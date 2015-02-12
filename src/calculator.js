function Calculator() {
    'use strict'
    var functions = arguments;
    var result;
    return {
        set: function(param) {
            result = [];
            for (var i = 0; i < functions.length; i++) {
                result.push(functions[i].call(param));
            }
        },
        result: function() {
            return result;
        }
    }
}

