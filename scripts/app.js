'use strict';

define(['CssProperty'], function (CssProperty) {



  var app = {

    properties: {
        backgroundColor: null,
        color: null,
    },


    start: function() {
      window.runTests();
    },

    setUpApp: function () {
        var backgroundColorSelector = '[data-css-property=backgroundColor]';
        var backgroundColorNode = document.querySelector(backgroundColorSelector);
        this.properties.backgroundColor = new CssProperty(backgroundColorNode);
        var colorSelector = '[data-css-property=color]';
        var colorNode = document.querySelector(colorSelector);
        this.properties.color = new CssProperty(colorNode);

        var backgroundColor = this.properties.backgroundColor;
        backgroundColor.attachListeners();
        backgroundColor.colorState.setByHex('FFF');
        backgroundColor.updateInputs();

        var color = this.properties.color;
        color.attachListeners();
        color.colorState.setByHex('000');
        color.updateInputs();
    },

    showValidationText: function (validationString) {
        var validationNode = document.querySelector('.validationOutput');
        validationNode.textContent = validationString;
    }
  };
 
  return app;
});
