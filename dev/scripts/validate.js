'use strict';

define(function () {

  var validate = {
    hex: function (hexValue) {
        if (hexValue.length !== 3 && hexValue.length !== 6)
            return false;

        var invalidCharacterRegex = /[^0-9A-F]/i;
        if (hexValue.match(invalidCharacterRegex) !== null)
            return false;

        return true;
    }
  };

  return validate;
});