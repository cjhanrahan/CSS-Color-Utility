define(['util', 'colorstate', 'inputsystem'], function(_, ColorState, InputSystem){

  var CssProperty = function(rootNode){
    var thisProperty = this;

    this.rootNode = rootNode;
    this.colorState = new ColorState();
    
    this.propertyName = rootNode.getAttribute('data-css-property');
    this.inputSystems = this.getInputSystemsFromRootNode(rootNode);

    this.rootNode.addEventListener('input', thisProperty.onInput.bind(thisProperty));
  };



  CssProperty.prototype.getInputSystemsFromRootNode = function(){
    var inputSystems = [];

    var inputSystemNodes = this.rootNode.querySelectorAll('.inputSystem');

    _.nodeListForEach(inputSystemNodes, function(node){
      inputSystems.push(new InputSystem(node));
    });
  };



  CssProperty.prototype.onInput = function(event){
    //DEBUG for testing purposes only
    if(!event.data)
      event.data = {};
    event.data.cssPropertyOnInputCalled = true;
  };



  
  return CssProperty;
});