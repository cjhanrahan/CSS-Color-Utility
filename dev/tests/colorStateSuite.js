define(['util', 'ColorState'], function (_, ColorState) {

    describe('A ColorState object', function () {

        var colorState = null;

        beforeEach(function () {
            colorState = new ColorState();
        });

        it('should have a setBy function for all color types', function () {
            _.objectForEach(colorState, function (colorType) {
                var functionName = 'setBy' + _.capitalize(colorType);
                expect(colorState[functionName]).toEqual(jasmine.any(Function));
            });
        });
        
    });
});
