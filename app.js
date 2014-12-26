window.onload = function(){
  
  window.$ = {

  
    start: function() {
      $.updateReadouts();

      _.objectForEach($.inputs, function(input){
        input.sliderNode.addEventListener('input', function(){
          $.updateReadouts();
          $.updateExampleText();
        });
      });
    },

    updateReadouts: function() {
      _.objectForEach($.inputs, function(input){
        input.readoutNode.innerHTML = input.sliderNode.value + input.symbol;
      });
    },

    updateExampleText: function() {
      var color = "hsl(" + $.getInputValue("hue") +
        "," + $.getInputValue("saturation") + "%" +
        "," + $.getInputValue("lightness") + "%)"; 
      var exampleNode = document.querySelector("p");

      exampleNode.style.backgroundColor = color;
    },

    getInputValue: function(inputType) {
      return $.inputs[inputType].sliderNode.value;
    },

    inputs: {
      hue: {
        sliderNode: document.querySelector("input.hue"),
        readoutNode: document.querySelector(".readout.hue"),
        symbol: '\u00b0'
      },
      saturation: {
        sliderNode: document.querySelector("input.saturation"),
        readoutNode: document.querySelector(".readout.saturation"),
        symbol: '%'
      },
      lightness: {
        sliderNode: document.querySelector("input.lightness"),
        readoutNode: document.querySelector(".readout.lightness"),
        symbol: '%'
      }
    }
  };

  $.start();
};

