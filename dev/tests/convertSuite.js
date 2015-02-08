define (['convert'], function (convert) {

    describe('The convert module', function () {


        it('should have hexToRgbObj function', function () {
            expect(convert.hexToRgbObj).toEqual(jasmine.any(Function));
        });


        it('should convert #00F to RGB properly', function () {
            var desiredRgb = {
                red: 0,
                green: 0,
                blue: 255
            };
            rgbFromConvert = convert.hexToRgbObj("00F");

            expect(rgbFromConvert).toEqual(desiredRgb);
        });
    });
});