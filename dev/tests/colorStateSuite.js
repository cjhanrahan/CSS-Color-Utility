define(['util', 'ColorState'], function (_, ColorState) {

    describe('A ColorState object', function () {

        var colorState = null;

        beforeEach(function () {
            colorState = new ColorState();
        });



        it('should have a setBy function for all value types', function () {
            _.objectForEach(colorState, function (colorType) {
                var functionName = 'setBy' + _.capitalize(colorType);
                expect(colorState[functionName]).toEqual(jasmine.any(Function));
            });
        });
       

        it('should have a updateValue function which directly sets the given value type', function () {
            expect(colorState.updateValue).toEqual(jasmine.any(Function));
            var valueToCheck = '#fffe12';
            colorState.updateValue('hex', valueToCheck);
            expect(ColorState.hex === valueToCheck);
        });

    });
});
