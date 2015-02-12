var puppet = function(person) {
    'use strict'
    return function(sentenceName) {
        return person[sentenceName].bind(person)
    }
}
