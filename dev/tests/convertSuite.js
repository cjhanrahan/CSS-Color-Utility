'use strict';

define (['convert'], function (convert) {

    describe('The convert module\'s hexTo... functions', function () {


        it('should include the hexToRgb function', function () {
            expect(convert.hexToRgb).toEqual(jasmine.any(Function));
        });



        it('should convert #00F correctly', function () {
            var desiredRgb = {
                red: 0,
                green: 0,
                blue: 255

            };
            var rgbFromConvert = convert.hexToRgb('00F');
            expect(rgbFromConvert).toEqual(desiredRgb);

            var desiredHue = 240;
            var hueFromConvert = convert.rgbToHue(desiredRgb.red, desiredRgb.green, desiredRgb.blue);
            expect(Math.round(hueFromConvert)).toEqual(desiredHue);

            var desiredSaturation = 100;
            var saturationFromConvert = convert.rgbToSaturation(desiredRgb.red, desiredRgb.green, desiredRgb.blue);
            expect(Math.round(saturationFromConvert)).toEqual(desiredSaturation);

            var desiredLightness = 50;
            var lightnessFromConvert = convert.rgbToLightness(desiredRgb.red, desiredRgb.green, desiredRgb.blue);
            expect(Math.round(lightnessFromConvert)).toEqual(desiredLightness);
        });

        it('should convert #653E52 correctly', function () {
            var desiredRgb = {
                red: 101,
                green: 62,
                blue: 82
            };
            var rgbFromConvert = convert.hexToRgb('653E52');
            expect(rgbFromConvert).toEqual(desiredRgb);

            var desiredHue = 329;
            var hueFromConvert = convert.rgbToHue(desiredRgb.red, desiredRgb.green, desiredRgb.blue);
            expect(Math.round(hueFromConvert)).toEqual(desiredHue);

            var desiredSaturation = 24;
            var saturationFromConvert = convert.rgbToSaturation(desiredRgb.red, desiredRgb.green, desiredRgb.blue);
            expect(Math.round(saturationFromConvert)).toEqual(desiredSaturation);

            var desiredLightness = 32;
            var lightnessFromConvert = convert.rgbToLightness(desiredRgb.red, desiredRgb.green, desiredRgb.blue);
            expect(Math.round(lightnessFromConvert)).toEqual(desiredLightness);
        });

            it('should convert #aaa correctly', function () {
            var desiredRgb = {
                red: 170,
                green: 170,
                blue: 170
            };
            var rgbFromConvert = convert.hexToRgb('aaa');
            expect(rgbFromConvert).toEqual(desiredRgb);

            var desiredHue = [0, 360];
            var hueFromConvert = convert.rgbToHue(desiredRgb.red, desiredRgb.green, desiredRgb.blue);
            expect(hueFromConvert).toEqual(desiredHue);

            var desiredSaturation = 0;
            var saturationFromConvert = convert.rgbToSaturation(desiredRgb.red, desiredRgb.green, desiredRgb.blue);
            expect(Math.round(saturationFromConvert)).toEqual(desiredSaturation);

            var desiredLightness = 67;
            var lightnessFromConvert = convert.rgbToLightness(desiredRgb.red, desiredRgb.green, desiredRgb.blue);
            expect(Math.round(lightnessFromConvert)).toEqual(desiredLightness);
        });

    });
});