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
        this.properties.backgroundColor.attachListeners();
    },

    showValidationText: function (validationString) {
        var validationNode = document.querySelector('.validationOutput');
        validationNode.textContent = validationString;
    }
  };
 
  return app;
});
