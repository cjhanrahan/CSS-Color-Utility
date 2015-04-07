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
    }
  };

  return validate;
});
