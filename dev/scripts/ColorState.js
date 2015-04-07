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
        this.setByRgba();
        return this;
    };


    ColorState.prototype.setByRed = function (red) {
        this.red = red;
        this.setByRgba();
        return this;
    };


    ColorState.prototype.setByGreen = function (green) {
        this.green = green;
        this.setByRgba();
        return this;
    };


    ColorState.prototype.setByBlue = function (blue) {
        this.blue = blue;
        this.setByRgba();
        return this;
    };


    ColorState.prototype.getHexCss = function () {
        return '#' + this.hex;
    };


    ColorState.prototype.setByRgba = function() {
        this.hue = convert.rgbToHue(this.red, this.green, this.blue);
        this.saturation = convert.rgbToSaturation(this.red, this.green, this.blue);
        this.lightness = convert.rgbToLightness(this.red, this.green, this.blue);
        return this;
    };


    return ColorState;
});
