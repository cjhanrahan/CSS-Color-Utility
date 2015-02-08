define (['convert'], function (convert) {

    describe('The convert module\'s hexTo... functions', function () {



        it('should include the hexToRgb function', function () {
            expect(convert.hexToRgb).toEqual(jasmine.any(Function));
        });



        it('should convert #00F to RGB properly', function () {
            var desiredRgb = {
                red: 0,
                green: 0,
                blue: 255
            };
            rgbFromConvert = convert.hexToRgb("00F");

            expect(rgbFromConvert).toEqual(desiredRgb);
        });

        it('should convert #653E52 to RGB properly', function () {
            var desiredRgb = {
                red: 101,
                green: 62,
                blue: 82
            };
            rgbFromConvert = convert.hexToRgb("653E52");

            expect(rgbFromConvert).toEqual(desiredRgb);
        });
    });
});