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

  selectorForEach: function(selector, func) {
    var nodes = document.querySelectorAll(selector);

    Array.prototype.forEach.call(nodes, func);
  }
};