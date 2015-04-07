'use strict';

define(function() {

  var app = {
   
    start: function() {
      window.runTests();
    },

    setUpApp: function () {},

    showValidationText: function (validationString) {
        var validationNode = document.querySelector('.validationOutput');
        validationNode.textContent = validationString;
    }
  };
 
  return app;
});
