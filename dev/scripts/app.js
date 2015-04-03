'use strict';

define(['util', 'validate', 'ColorState', 'CssProperty'], function(_, validate, ColorState, CssProperty){

  let app = {
   
    start: function() {
      window.runTests();
    },

    setupInputSystemHandlers: function() {
      let app = this;
      _.selectorForEach('.cssProperty', function(cssPropertyNode){
        _.selectorForEach('.inputSystem', function(inputSystemNode){
    
           inputSystemNode.addEventListener('input', function(){
            let cssProperty = cssPropertyNode.getAttribute('data-css-property');
            let newColor = app.getValueFromInputSystem(inputSystemNode);
            app.updateExampleText(cssProperty, newColor);
          });
          
        }, cssPropertyNode);
      });
    },

    initializeTextInputs: function() {
    
    },

    getValueFromInputSystem: function(inputSystemNode) {
      let inputSystem = inputSystemNode.getAttribute('data-input-system');

      if (inputSystem === "hex") {
        let hexInput = inputSystemNode.querySelector('input');
        validate.hexInput(hexInput.value);
        return "#" + hexInput.value;
      }

      else if (inputSystem === "rgb") {

      }
    },

    updateExampleText: function(cssPropertyName, cssColorValue) {
      let exampleTextNode = document.querySelector('.exampleText');
      exampleTextNode.style[cssPropertyName] = cssColorValue;
    },
  };
 
  return app;

});

