'use strict';
define(['util', 'convert'], function (_, convert) {


    var ColorState = function () {

        var valueTypes = [ 
            'hex', 'red', 'green', 'blue', 'alpha', 
            'hue', 'saturation', 'lightness'
        ];

        valueTypes.forEach(function (valueType) {
            Object.defineProperty(this, valueType, {
                value: null,
                writable: true,
                enumerable: true
            });
        }.bind(this));
    };


    ColorState.prototype.getValue = function(attributeName) {
        if (attributeName === 'hex')
            return this.hex;
        else {
            var exactValue = this[attributeName];
            return Math.round(exactValue);
        }
    };


    ColorState.prototype.updateValue = function (valueType, value) {
        var functionName = 'setBy' + _.capitalize(valueType);
        this[functionName](value);
        return this;
    };


    ColorState.prototype.setByHex = function (hex) {
        this.hex = hex;

        var rgbObj = convert.hexToRgb(hex);
        this.red = rgbObj.red;
        this.green = rgbObj.green;
        this.blue = rgbObj.blue;
        this.setHslFromRgba();
        return this;
    };


    ColorState.prototype.setByRed = function (redString) {
        this.red = Number(redString);
        this.setHexFromRgba();
        this.setHslFromRgba();
        return this;
    };


    ColorState.prototype.setByGreen = function (greenString) {
        this.green = Number(greenString);
        this.setHexFromRgba();
        this.setHslFromRgba();
        return this;
    };


    ColorState.prototype.setByBlue = function (blueString) {
        this.blue = Number(blueString);
        this.setHexFromRgba();
        this.setHslFromRgba();
        return this;
    };

    ColorState.prototype.setByHue = function (hueString) {
        this.hue = Number(hueString);
        this.setRgbaFromHsl();
        this.setHexFromRgba();
    };


    ColorState.prototype.getHexCss = function () {
        return '#' + this.hex;
    };


    ColorState.prototype.setHslFromRgba = function() {
        var hueResult = convert.rgbToHue(this.red, this.green, this.blue);
        var hueIsAmbiguous = hueResult instanceof Array;
        if (!hueIsAmbiguous)
            this.hue = hueResult;
        else {
            var distancesFromCurrentValue = hueResult.map(function (possibleHue) {
                return Math.abs(this.hue - possibleHue);
            }.bind(this));
            var closetValue = Math.min(distancesFromCurrentValue);
            var indexOfClosestValue = distancesFromCurrentValue.indexOf(closetValue);
            return hueResult[indexOfClosestValue];

        }
        this.saturation = convert.rgbToSaturation(this.red, this.green, this.blue);
        this.lightness = convert.rgbToLightness(this.red, this.green, this.blue);
        return this;
    };


    ColorState.prototype.setHexFromRgba = function () {
        this.hex = convert.rgbToHex(this.red, this.green, this.blue);
    };


    ColorState.prototype.setRgbaFromHsl = function () {

    };
    return ColorState;
});
