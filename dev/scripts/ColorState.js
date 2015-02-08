define(['convert'], function(convert){


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



  ColorState.prototype.setByHex = function(hex) {
    this.hex = hex;

    if(hex.length === 3) {
      var firstChar = hex.slice(0,1);
      this.red = parseInt(firstChar + firstChar, 16);
      var secondChar = hex.slice(1,2);
      this.green = parseInt(secondChar + secondChar, 16);
      var thirdChar = hex.slice(2);
    this.blue = parseInt(thirdChar + thirdChar, 16);
    }
    else {
      this.red = parseInt(hex.slice(0, 2), 16);
      this.green = parseInt(hex.slice(2, 4), 16);
      this.blue = parseInt(hex.slice(4), 16);
    }

    this.alpha = null;
    this.hue = convert.rgbToHue(this.red, this.green, this.blue);
    this.saturation = convert.rgbToSaturation(this.red, this.green, this.blue);
    this.lightness = convert.rgbToLightness(this.red, this.green, this.blue);
  };



  ColorState.prototype.setByRed = function (redValue) {};
  ColorState.prototype.setByGreen = function (greenValue) {};
  ColorState.prototype.setByBlue = function (blueValue) {};
  ColorState.prototype.setByAlpha = function (alphaValue) {};
  ColorState.prototype.setByHue = function (hueValue) {};
  ColorState.prototype.setBySaturation = function (saturationValue) {};
  ColorState.prototype.setByLightness = function (lightnessValue) {};



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
