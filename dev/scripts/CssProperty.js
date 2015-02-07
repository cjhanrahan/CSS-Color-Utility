define(['util', 'ColorState', 'InputSystem'], function(_, ColorState, InputSystem){

  var CssProperty = function(rootNode){
    var thisProperty = this;

    this.rootNode = rootNode;
    this.colorState = new ColorState();
    
    this.propertyName = rootNode.getAttribute('data-css-property');
    this.inputSystems = this.getInputSystemsFromRootNode(rootNode);
    this.sampleDiv = document.querySelector('.colorSample');
  };



  CssProperty.prototype.getInputSystemsFromRootNode = function() {
    var thisProperty = this;
    var inputSystems = [];

    var inputSystemNodes = this.rootNode.querySelectorAll('.inputSystem');

    _.nodeListForEach(inputSystemNodes, function(node){
      inputSystems.push(new InputSystem(node, thisProperty));
    });

    return inputSystems;
  };



  CssProperty.prototype.setSampleProperty = function (propertyName, valueString) {

  };

  
  return CssProperty;
});