window.Convert = {


  rgbToHue: function(red, green, blue) {
    var maxColor = Math.max(red, green, blue);
    var normalizedRed = red / 255;
    var normalizedGreen = green / 255;
    var normalizedBlue = blue / 255;
    var chroma = Convert.rgbToChroma(red, green, blue);
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
      hexagonalHue = (normalizedBlue - normalizedRed) / chroma + pureGreenHexagonalHue;
    }

    else if(maxColor === blue) {
      var pureBlueHexagonalHue = 4;
      hexagonalHue = (normalizedRed - normalizedGreen) / chroma + pureBlueHexagonalHue;
    }

    return hexagonalHue * 60;
  },

  rgbToChroma: function(red, green, blue) {
    var minColor = Math.min(red, green, blue);
    var maxColor = Math.max(red, green, blue);

    return (maxColor - minColor) / 255;
  },

  rgbToSaturation: function(red, green, blue) {
    var chroma = Convert.rgbToChroma(red, green, blue);
    var lightness = Convert.rgbToLightness(red, green, blue) / 100;
    var maximumChromaForLightness = 1 - Math.abs(2* lightness - 1);

    return chroma / maximumChromaForLightness * 100;


  },

  rgbToLightness: function(red, green, blue) {
    var minColor = Math.min(red, green, blue);
    var maxColor = Math.max(red, green, blue);

    return (1/2) * (minColor + maxColor) / 255 * 100;
  }
};