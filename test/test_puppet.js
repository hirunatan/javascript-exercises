describe('test_puppet', function() {

    it('should say name and age of a person', function() {
        var person = {
            name: 'Pepa',
            age: 34,
            sayHi: function() {
                return "Hi!, I'm " + this.name;
            },
            sayAge: function() {
               return "I am " + this.age + " years old";
           }
        };

        var myPuppet = puppet(person);

        var sayHi = myPuppet('sayHi');
        expect(sayHi()).eql("Hi!, I'm Pepa");

        var sayAge = myPuppet('sayAge');
        expect(sayAge()).eql("I am 34 years old");
    })

})

