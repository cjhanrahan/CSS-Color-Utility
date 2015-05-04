'use strict';

define (['convert'], function (convert) {

    describe('The convert module\'s hexTo... functions', function () {


        var valuesForHexToRgb = [
            {hex: '00F',    rgb: {red: 0,   green: 0,   blue: 255}},
            {hex: '653E52', rgb: {red: 101, green: 62,  blue: 82 }},
            {hex: 'aaa',    rgb: {red: 170, green: 170, blue: 170}}
        ];

        function testHexToRgb(inputHex, desiredRgb) {
            var rgbString = 'rgb(' + desiredRgb.red + ',' + desiredRgb.green + ',' + desiredRgb.blue + ')';
            it('should convert ' + inputHex + ' to ' + rgbString, function () {
                var rgbFromConvert = convert.hexToRgb(inputHex);
                expect(rgbFromConvert).toEqual(desiredRgb);
            });
        }

        valuesForHexToRgb.forEach(function (valuesObject) {
            testHexToRgb(valuesObject.hex, valuesObject.rgb);
        });



        var valuesForRgbToHue = [
            {rgb: {red: 0,   green: 0,   blue: 255}, hue: 240     },
            {rgb: {red: 101, green: 62,  blue: 82 }, hue: 329     },
            {rgb: {red: 170, green: 170, blue: 170}, hue: [0, 360]}
        ];

        function testRgbToHue(inputRgb, desiredHue) {
            var rgbString = 'rgb(' + inputRgb.red + ',' + inputRgb.green + ',' + inputRgb.blue + ')';
            it ('should convert ' + rgbString + 'to a hue of ' + desiredHue, function () {
                var hueFromConvert = convert.rgbToHue(inputRgb.red, inputRgb.green, inputRgb.blue);
                if (desiredHue instanceof Array)
                    expect(hueFromConvert).toEqual(desiredHue);
                else
                    expect(Math.round(hueFromConvert)).toEqual(desiredHue);
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
            var rgbString = 'rgb(' + inputRgb.red + ',' + inputRgb.green + ',' + inputRgb.blue + ')';
            it ('should convert ' + rgbString + 'to a saturation of ' + desiredSaturation, function () {
                var saturationFromConvert = convert.rgbToSaturation(inputRgb.red, inputRgb.green, inputRgb.blue);
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
            var rgbString = 'rgb(' + inputRgb.red + ',' + inputRgb.green + ',' + inputRgb.blue + ')';
            it ('should convert ' + rgbString + 'to a lightness of ' + desiredLightness, function () {
                var lightnessFromConvert = convert.rgbToLightness(inputRgb.red, inputRgb.green, inputRgb.blue);
                expect(Math.round(lightnessFromConvert)).toEqual(desiredLightness);
            });
        }

        valuesForRgbToLightness.forEach(function (valuesObject) {
            testRgbToLightness(valuesObject.rgb, valuesObject.lightness);
        });
    });
});