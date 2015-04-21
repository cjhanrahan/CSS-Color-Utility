'use strict';

define(function () {

  var validate = {
    hex: function (hexValue) {

        if (hexValue.length !== 3 && hexValue.length !== 6) {
            return {
                isValid: false,
                reason: 'Hex value is an invalid length'
            };
        }

        var invalidCharacterRegex = /[^0-9A-F]/i;
        if (hexValue.match(invalidCharacterRegex) !== null) {
            return {
                isValid: false,
                reason: 'Hex value has an invalid character'
            };
        }

        return {isValid: true, reason: null};
    },

    red:        function (numberString) { return this.integerBetween(0, 255)(numberString); },
    green:      function (numberString) { return this.integerBetween(0, 255)(numberString); },
    blue:       function (numberString) { return this.integerBetween(0, 255)(numberString); },
    hue:        function (numberString) { return this.integerBetween(0, 360)(numberString); },
    saturation: function (numberString) { return this.integerBetween(0, 100)(numberString); },
    lightness:  function (numberString) { return this.integerBetween(0, 100)(numberString); },


    integerBetween: function (min, max) {
        return function (numberString) {
            var number = Number(numberString);
            if (isNaN(number)) {
                return {
                    isValid: false,
                    reason: 'Value provided is not a number'
                };
            }
            else if (number < min) { 
                return {
                    isValid: false,
                    reason: 'Value provided cannot be below ' + min
                };
            }
            else if (number > max) { 
                return {
                    isValid: false,
                    reason: 'Value provided cannot be above ' + max
                };
            }
            else if (number - Math.round(number) !== 0) {
                return {
                    isValid: false,
                    reason: 'Value provided must be an integer (app limitiation)'
                };
            }
            return {isValid: true, reason: null};
        };
    }
  };

  return validate;
});
