var Hero = function(person, personPowers) {
    'use strict'
    return {
        power: function(powerName) {
            return personPowers[powerName].bind(person)();
        }
    }
}
