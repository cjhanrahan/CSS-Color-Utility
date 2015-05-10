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

    ColorState.prototype.setBySaturation = function (saturationString) {
        this.saturation = Number(saturationString);
        this.setRgbaFromHsl();
        this.setHexFromRgba();
    };

    ColorState.prototype.setByLightness = function (lightnessString) {
        this.lightness = Number(lightnessString);
        this.setRgbaFromHsl();
        this.setHexFromRgba();
    };

    ColorState.prototype.getHexCss = function () {
        return '#' + this.hex;
    };


    ColorState.prototype.setHslFromRgba = function() {
        var hueResult = convert.rgbToHue(this.red, this.green, this.blue);
        if (!isNaN(hueResult)) this.hue = hueResult;
        this.saturation = convert.rgbToSaturation(this.red, this.green, this.blue);
        this.lightness = convert.rgbToLightness(this.red, this.green, this.blue);
        return this;
    };


    ColorState.prototype.setHexFromRgba = function () {
        this.hex = convert.rgbToHex(this.red, this.green, this.blue);
    };


    ColorState.prototype.setRgbaFromHsl = function () {
        var rgbResult = convert.hslToRgb(this.hue, this.saturation, this.lightness);
        this.red = rgbResult.red;
        this.green = rgbResult.green;
        this.blue = rgbResult.blue;
    };
    return ColorState;
});
