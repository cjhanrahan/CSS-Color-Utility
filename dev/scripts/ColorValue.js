define(['util'], function (_) {

  var ColorValue = function (rootNode, parentInputSystem) {
    var thisColorValue = this;

    this.rootNode = rootNode;
    this.valueType = rootNode.getAttribute('data-value-type');

    this.rootNode.addEventListener('input', thisColorValue.onInput.bind(thisColorValue));
  };


  ColorValue.prototype.onInput = function (event) {

  };

  return ColorValue;
});