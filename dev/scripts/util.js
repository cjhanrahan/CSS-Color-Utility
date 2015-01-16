define(function(){
  var util = {
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
    },

    nodeListForEach: function(nodeList, func) {
      Array.prototype.forEach.call(nodeList, func);
    },

    round: function(number, logBaseTen) {
      if(number === 0)
        return 0;

      else if(!number)
        return null;

      else {
        var adjustment = 1 / Math.pow(10, logBaseTen);
        var adjustedNumber = adjustment * number;
        return Math.round(adjustedNumber) / adjustment;
      }
    }
  };

  return util;
});
