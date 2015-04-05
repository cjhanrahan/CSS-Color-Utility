'use strict';
define(['util', 'convert'], function (_, convert) {


    var ColorState = function () {

        var valueTypes = [ 
            'hex', 'red', 'green', 'blue', 'hue', 
            'alpha', 'hue', 'saturation', 'lightness'
        ];

        valueTypes.forEach(function (valueType) {
            
            Object.defineProperty(this, valueType, {
                value: null,
                writable: true,
                enumerable: false
            });
        }.bind(this));
    };



    ColorState.prototype.updateValue = function (valueType, value) {
        var functionName = 'setBy' + _.capitalize(valueType);
        this[functionName](value);
    };


    ColorState.prototype.setByHex = function (hex) {
        this.hex = hex;

        var rgbObj = convert.hexToRgb(hex);
        this.red = rgbObj.red;
        this.green = rgbObj.green;
        this.blue = rgbObj.blue;
        this.alpha = null;
    };


    ColorState.prototype.getHexCss = function () {
        return '#' + this.hex;
    };


    ColorState.prototype.setRgb = function(red, green, blue) {
        this.hex = red.toString(16) + green.toString(16) + blue.toString(16);
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = null;
        this.hue = convert.rgbToHue(red, green, blue);
        this.saturation = convert.rgbToSaturation(red, green, blue);
        this.lightness = convert.rgbToLightness(red, green, blue);
    };


    ColorState.prototype.getValue = function(attributeName) {
        if (attributeName === 'hex')
            return this.hex;
        else {
            var exactValue = this[attributeName];
            return Math.round(exactValue);
        }
    };


    return ColorState;
});
