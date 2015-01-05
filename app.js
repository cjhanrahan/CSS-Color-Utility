window.onload = function(){
  
  window.$ = {

 
    start: function() {
      this.setupInputHandlers();
    
    },

    setupInputHandlers: function(){

      _.selectorForEach('.background, .foreground', function(cssPropertyNode){
        _.selectorForEach('.inputSystem', function(inputSystemNode){
    
           inputSystemNode.addEventListener('input', function(){
            var cssProperty = cssPropertyNode.getAttribute('data-css-property');
            var newColor = $.getValueFromInputSystem(inputSystemNode);
            $.updateExampleText(cssProperty, newColor);
          });
          
        }, cssPropertyNode);
      });
    },


    updateReadouts: function() {

    },


    getValueFromInputSystem: function(inputSystemNode) {
      var inputSystem = inputSystemNode.getAttribute('data-input-system');

      if (inputSystem === "hex") {
        var hexInput = inputSystemNode.querySelector('input');
        return "#" + hexInput.value;
      }
    },



    updateOtherInputSystems: function(inputSystemThatChanged) {

    },

    updateExampleText: function(cssPropertyName, cssColorValue) {
      var exampleTextNode = document.querySelector('.exampleText');
      exampleTextNode.style[cssPropertyName] = cssColorValue;
    },


  };

  $.start();
};

