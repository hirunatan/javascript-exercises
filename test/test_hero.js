describe('test_hero', function() {

    it('should describe superpowers of a hero', function() {
        var powers = {
            readOwnMind: function() {
                return this.name + ' puede leer su propia mente';
            },
            invisible: function() {
                return this.name + ' puede volverse invisible cuando nadie mira';
            },
            superEar: function () {
                return this.name + ' puede escuchar a grandes distancias cuando duerme';
            }
        };
        var ramiro = {
            name: 'ramiro'
        }
        var superRamiro = Hero(ramiro, {'readMind': powers.readOwnMind, 'invisible': powers.invisible});

        expect(superRamiro.power('invisible')).eql('ramiro puede volverse invisible cuando nadie mira');
        expect(superRamiro.power('readMind')).eql('ramiro puede leer su propia mente');
    })

})

