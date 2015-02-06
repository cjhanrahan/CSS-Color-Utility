define(['util'], function(util) {
  var InputSystem = function(rootNode){
    this.rootNode = rootNode;
    this.systemType = rootNode.getAttribute('data-input-system');

    InputSystem.prototype.onInput = function () {};

  };

  return InputSystem;
});