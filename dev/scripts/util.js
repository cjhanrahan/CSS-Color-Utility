define(function (){
  var util = {
    eventForEach: function (event, func) {
      for (var attribute in event) {
        if(event.hasOwnProperty(attribute))
          func(event[attribute]);
      }
    },



    selectorForEach: function (selector, func, parentNode) {
      
      if(parentNode === undefined)
        parentNode = document;

      var nodes = parentNode.querySelectorAll(selector);

      Array.prototype.forEach.call(nodes, func);
    },



    selectorWithData: function (selector, dataName, dataValue){
      var dataReq = dataValue ? '="' + dataValue + '"' : '';
      return selector + '[data-' + dataName + dataReq + ']';

    },



    nodeListForEach: function (nodeList, func) {
      for (var i = 0; i < nodeList.length; i++)
        func(nodeList[i]);
    },



    triggerNativeEvent: function(eventName, eventTarget) {
      var event = document.createEvent('HTMLEvents');
      event.initEvent(eventName, true, false);
      eventTarget.dispatchEvent(event);
    },

    triggerCustomEvent: function(eventName, eventTarget) {
      var event;
      if(window.CustomEvent) {
        event = new CustomEvent(eventName);
      } else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true);
      }
      eventTarget.dispatchEvent(event);
    },



    getEventData: function (event, dataName) {
      if(!event.data)
        event.data = {};
      return event.data[dataName];
    },



    setEventData: function (event, dataName, dataValue) {
      if(!event.data)
        event.data = {};
      event.data[dataName] = dataValue;
    },



    round: function (number, logBaseTen) {
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
