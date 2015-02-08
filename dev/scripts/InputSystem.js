define(['util', 'ColorState', 'ColorValue'], function(_, ColorState, ColorValue) {
  
  var InputSystem = function (rootNode, cssProperty) {
    this.rootNode = rootNode;
    this.cssProperty = cssProperty;
    this.systemType = rootNode.getAttribute('data-input-system');

  };
    

  InputSystem.prototype.getColorValuesFromRootNode = function () {
    var thisInputSystem = this;
    var colorValues = [];

    var colorValueNodes = this.rootNode.querySelectorAll('.colorValue');

    _.nodeListForEach(colorValueNodes, function (node) {
      colorValues.push(new ColorValue(node, thisInputSystem));
    });

    return colorValues;
  };



  InputSystem.prototype.onColorChange = function () {
    
  };
    

  return InputSystem;
});