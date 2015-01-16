define(["convert"], function(convert){


  var ColorState = function() {
    this.hex = null;
    this.red = null;
    this.green = null;
    this.blue = null;
    this.alpha = null;
    this.hue = null;
    this.saturation = null;
    this.lightness = null;
  };

  ColorState.prototype.getInteger = function(propertyName) {
    return Math.round(this[propertyName]);
  };

  ColorState.prototype.setHex = function(hex) {
    this.hex = hex;
    this.red = parseInt(hex.slice(0, 2), 16);
    this.green = parseInt(hex.slice(2, 4), 16);
    this.blue = parseInt(hex.slice(4), 16);
    this.alpha = null;
    this.hue = convert.rgbToHue(this.red, this.green, this.blue);
    this.saturation = convert.rgbToSaturation(this.red, this.green, this.blue);
    this.lightness = convert.rgbToLightness(this.red, this.green, this.blue);
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
    var exactValue = this[attributeName];
    return Math.round(exactValue);
  };

  return ColorState;
});
