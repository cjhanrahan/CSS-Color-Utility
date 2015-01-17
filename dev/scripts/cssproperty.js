define(['colorstate'], function(ColorState){

  var CssProperty = function(rootNode){
    this.rootNode = rootNode;
    this.colorState = new ColorState();
    
    this.inputSystems = null;
    this.propertyName = null;
  };

  return CssProperty;
});