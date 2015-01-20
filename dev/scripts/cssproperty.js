define(['util', 'colorstate', 'inputsystem'], function(_, ColorState, InputSystem){

  var CssProperty = function(rootNode){
    this.rootNode = rootNode;
    this.colorState = new ColorState();
    
    this.propertyName = rootNode.getAttribute('data-css-property');
    this.inputSystems = this.getInputSystemsFromRootNode(rootNode);
  };



  CssProperty.prototype.getInputSystemsFromRootNode = function(){
    var inputSystems = [];

    var inputSystemNodes = this.rootNode.querySelectorAll('.inputSystem');

    _.nodeListForEach(inputSystemNodes, function(node){
      inputSystems.push(new InputSystem(node));
    });
  };



  return CssProperty;
});