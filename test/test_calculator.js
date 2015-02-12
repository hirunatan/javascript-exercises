describe('test_calculator', function() {

    it('should apply a series of calculations to an object', function() {
        function add() {
           return this.num1 + this.num2;
        }

        function sub() {
           return this.num1 - this.num2;
        }

        var calculator = Calculator(add, sub);

        calculator.set({
            'num1': 5,
            'num2': 2,
        });

        expect(calculator.result()).eql([7, 3]);
    })

})

