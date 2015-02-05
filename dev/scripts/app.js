define(['util', 'validate', 'ColorState', 'CssProperty'], function(_, validate, ColorState, CssProperty){

  var app = {
   
    start: function() {
      window.runTests();
    },

    setupInputSystemHandlers: function() {
      var app = this;
      _.selectorForEach('.cssProperty', function(cssPropertyNode){
        _.selectorForEach('.inputSystem', function(inputSystemNode){
    
           inputSystemNode.addEventListener('input', function(){
            var cssProperty = cssPropertyNode.getAttribute('data-css-property');
            var newColor = app.getValueFromInputSystem(inputSystemNode);
            app.updateExampleText(cssProperty, newColor);
          });
          
        }, cssPropertyNode);
      });
    },

    initializeTextInputs: function() {
    
    },

    getValueFromInputSystem: function(inputSystemNode) {
      var inputSystem = inputSystemNode.getAttribute('data-input-system');

      if (inputSystem === "hex") {
        var hexInput = inputSystemNode.querySelector('input');
        validate.hexInput(hexInput.value);
        return "#" + hexInput.value;
      }

      else if (inputSystem === "rgb") {

      }
    },

    updateExampleText: function(cssPropertyName, cssColorValue) {
      var exampleTextNode = document.querySelector('.exampleText');
      exampleTextNode.style[cssPropertyName] = cssColorValue;
    },
  };
 
  return app;

});

