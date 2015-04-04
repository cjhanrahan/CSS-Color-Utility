'use strict';

define(function () {
    var convert = {

        hexToRgb: function(hexString) {
            var rgbObj = {};
            if(hexString.length === 3) {
                var firstLetter = hexString.charAt(0);
                rgbObj.red = parseInt(firstLetter + firstLetter, 16);
                var secondLetter = hexString.charAt(1);
                rgbObj.green = parseInt(secondLetter + secondLetter, 16);
                var thirdLetter = hexString.charAt(2);
                rgbObj.blue = parseInt(thirdLetter + thirdLetter, 16);
            }
            else {
                rgbObj.red = parseInt(hexString.slice(0, 2), 16);
                rgbObj.green = parseInt(hexString.slice(2, 4), 16);
                rgbObj.blue = parseInt(hexString.slice(4), 16);
            }
            return rgbObj;
        },


        rgbToHslString: function (red, green, blue) {
            var thisModule = this;
            var hue = thisModule.rgbToHue(red, green, blue);
            var saturation =  thisModule.rgbToSaturation(red, green, blue);
            var lightness = thisModule.rgbToLightness(red, green, blue) + ')';

            return 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + ')';
        },


        rgbToHue: function(red, green, blue) {
            var thisModule = this;
            var maxColor = Math.max(red, green, blue);
            var normalizedRed = red / 255;
            var normalizedGreen = green / 255;
            var normalizedBlue = blue / 255;
            var chroma = thisModule.rgbToChroma(red, green, blue);
            var hexagonalHue;

            if(chroma === 0) {
                return null;
            }

            else if(maxColor === red) {
                var pureRedHexagonalHue = 0;
                hexagonalHue = (normalizedGreen - normalizedBlue) / chroma + pureRedHexagonalHue;

                if(hexagonalHue === 6)
                    hexagonalHue = 0;
            }

            else if(maxColor === green) {
                var pureGreenHexagonalHue = 2;
                hexagonalHue =
                    (normalizedBlue - normalizedRed) / chroma + pureGreenHexagonalHue;
            }

            else if(maxColor === blue) {
                var pureBlueHexagonalHue = 4;
                hexagonalHue =
                    (normalizedRed - normalizedGreen) / chroma + pureBlueHexagonalHue;
            }

            return hexagonalHue * 60;
        },


        rgbToChroma: function(red, green, blue) {
            var minColor = Math.min(red, green, blue);
            var maxColor = Math.max(red, green, blue);

            return (maxColor - minColor) / 255;
        },


        rgbToSaturation: function(red, green, blue) {
            var thisModule = this;
            var chroma = thisModule.rgbToChroma(red, green, blue);
            var lightness = thisModule.rgbToLightness(red, green, blue) / 100;
            var maximumChromaForLightness = 1 - Math.abs(2* lightness - 1);

            return chroma / maximumChromaForLightness * 100;
        },


        rgbToLightness: function(red, green, blue) {
            var minColor = Math.min(red, green, blue);
            var maxColor = Math.max(red, green, blue);

            return (1/2) * (minColor + maxColor) / 255 * 100;
        }
    };

    return convert;
});