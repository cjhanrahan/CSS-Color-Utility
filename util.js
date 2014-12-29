_ = {

  //
  // OBJECTS
  //

  objectForEach: function(object, func) {
    for (var attribute in object) {
      if(object.hasOwnProperty(attribute))
        func(object[attribute]);
    }
  },

  selectorForEach: function(selector, func, parentNode) {
    
    if(parentNode === undefined)
      parentNode = document;

    var nodes = parentNode.querySelectorAll(selector);

    Array.prototype.forEach.call(nodes, func);
  }
};