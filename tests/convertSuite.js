'use strict';

define (['convert'], function (convert) {

    describe('The convert module\'s hexTo... functions', function () {


        var valuesForHexToRgb = [
            {hex: '00F',    rgb: {red: 0,   green: 0,   blue: 255}},
            {hex: '653E52', rgb: {red: 101, green: 62,  blue: 82 }},
            {hex: 'aaa',    rgb: {red: 170, green: 170, blue: 170}}
        ];

        function testHexToRgb(inputHex, desiredRgb) {
            var rgbString = getRgbStringFrom(desiredRgb);
            it('should convert ' + inputHex + ' to ' + rgbString, function () {
                var rgbFromConvert = convert.hexToRgb(inputHex);
                expect(rgbFromConvert).toEqual(desiredRgb);
            });
        }

        valuesForHexToRgb.forEach(function (valuesObject) {
            testHexToRgb(valuesObject.hex, valuesObject.rgb);
        });



        var valuesForRgbToHue = [
            {rgb: {red: 0,   green: 0,   blue: 255}, hue: 240},
            {rgb: {red: 101, green: 62,  blue: 82 }, hue: 329},
            {rgb: {red: 170, green: 170, blue: 170}, hue: NaN}
        ];

        function testRgbToHue(inputRgb, desiredHue) {
            var rgbString = getRgbStringFrom(inputRgb);
            it ('should convert ' + rgbString + 'to a hue of ' + desiredHue, function () {
                var hueFromConvert = convert.rgbToHue(inputRgb.red, inputRgb.green, inputRgb.blue);
                if (desiredHue instanceof Array)
                    expect(hueFromConvert).toEqual(desiredHue);
                else {
                    expect(Math.round(hueFromConvert)).toEqual(desiredHue);
                }
            });
        }

        valuesForRgbToHue.forEach(function (valuesObject) {
            testRgbToHue(valuesObject.rgb, valuesObject.hue);
        });



        var valuesForRgbToSaturation = [
            {rgb: {red: 0,   green: 0,   blue: 255}, saturation: 100},
            {rgb: {red: 101, green: 62,  blue: 82 }, saturation: 24 },
            {rgb: {red: 170, green: 170, blue: 170}, saturation: 0  }
        ];

        function testRgbToSaturation(inputRgb, desiredSaturation) {
            var rgbString = getRgbStringFrom(inputRgb);
            it ('should convert ' + rgbString + 'to a saturation of ' + desiredSaturation, function () {
                var saturationFromConvert
                    = convert.rgbToSaturation(inputRgb.red, inputRgb.green, inputRgb.blue);
                expect(Math.round(saturationFromConvert)).toEqual(desiredSaturation);
            });
        }

        valuesForRgbToSaturation.forEach(function (valuesObject) {
            testRgbToSaturation(valuesObject.rgb, valuesObject.saturation);
        });



        var valuesForRgbToLightness = [
            {rgb: {red: 0,   green: 0,   blue: 255}, lightness: 50},
            {rgb: {red: 101, green: 62,  blue: 82 }, lightness: 32},
            {rgb: {red: 170, green: 170, blue: 170}, lightness: 67}
        ];

        function testRgbToLightness(inputRgb, desiredLightness) {
            var rgbString = getRgbStringFrom(inputRgb);
            it ('should convert ' + rgbString + 'to a lightness of ' + desiredLightness, function () {
                var lightnessFromConvert = convert.rgbToLightness(inputRgb.red, inputRgb.green, inputRgb.blue);
                expect(Math.round(lightnessFromConvert)).toEqual(desiredLightness);
            });
        }

        valuesForRgbToLightness.forEach(function (valuesObject) {
            testRgbToLightness(valuesObject.rgb, valuesObject.lightness);
        });



        var valuesForHslToRgb = [
            {
                hsl: {hue: 235, saturation: 80,  lightness: 34 },
                rgb: {red: 17,  green: 29,       blue: 156     }
            },
            {
                hsl: {hue: 0,   saturation: 100, lightness: 100},
                rgb: {red: 255, green: 255,      blue: 255     }

            }
        ];

        function testHslToRgb(inputHsl, desiredRgb) {
            var hslString = getHslStringFrom(inputHsl);
            it('should convert ' + hslString + ' to a red value of ' + desiredRgb.red, function () {
                var rgbFromConvert = convert.hslToRgb(
                    inputHsl.hue,
                    inputHsl.saturation,
                    inputHsl.lightness
                );
                expect(Math.round(rgbFromConvert.red)).toEqual(desiredRgb.red);
            });
            it('should convert ' + hslString + ' to a blue value of ' + desiredRgb.blue, function () {
                var rgbFromConvert = convert.hslToRgb(
                    inputHsl.hue,
                    inputHsl.saturation,
                    inputHsl.lightness
                );
                expect(Math.round(rgbFromConvert.blue)).toEqual(desiredRgb.blue);
            });
            it('should convert ' + hslString + ' to a green value of ' + desiredRgb.green, function () {
                var rgbFromConvert = convert.hslToRgb(
                    inputHsl.hue,
                    inputHsl.saturation,
                    inputHsl.lightness
                );
                expect(Math.round(rgbFromConvert.green)).toEqual(desiredRgb.green);
            });
        }

        valuesForHslToRgb.forEach(function (valuesObject) {
            testHslToRgb(valuesObject.hsl, valuesObject.rgb);
        });



        function getRgbStringFrom(rgb) {
            return 'rgb(' + rgb.red + ',' + rgb.green + ',' + rgb.blue + ')';
        }

        function getHslStringFrom(hsl) {
            return 'hsl(' + hsl.hue + ',' + hsl.saturation + ',' + hsl.lightness + ')';
        }
    });
});