'use strict';

define(['util', 'ColorState'], function (_, ColorState) {

    describe('A ColorState object', function () {

        var colorState = null;
        var supportedValueTypes = ['hex', 'red', 'green', 'blue'];

        beforeEach(function () {
            colorState = new ColorState();
        });


        it('should have a setBy for all types in supportedValueTypes', function () {
            supportedValueTypes.forEach(function (valueType) {
                var functionToCall = colorState['setBy' + _.capitalize(valueType)].bind(colorState);
                expect(functionToCall).toEqual(jasmine.any(Function));
            });
        });


        it('should have an updateValue function which directly sets the given value type', function () {
            expect(colorState.updateValue).toEqual(jasmine.any(Function));
            var valueToCheck = '#fffe12';
            colorState.updateValue('hex', valueToCheck);
            expect(ColorState.hex === valueToCheck);
        });


        it('should have an setByRgba function which is called after each call to setBy[red/green/blue]', function () {
            expect(colorState.setByRgba).toEqual(jasmine.any(Function));
            spyOn(colorState, 'setByRgba');

            ['red', 'green', 'blue'].forEach(function(valueType) {
                var functionToCall = colorState['setBy' + _.capitalize(valueType)].bind(colorState);
                functionToCall(55);
                expect(colorState.setByRgba).toHaveBeenCalled();
            });
        });
    });
});
