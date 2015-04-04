'use strict';

define(function (){

    var util = {


        // COLLECTIONS


        listForEach: function (nodeList, func) {
            for (var i = 0; i < nodeList.length; i++)
                func(nodeList[i]);
        },


        objectForEach: function (object, func) {
            for (var attribute in object)
                if (object.hasOwnProperty(attribute))
                    func(attribute, object[attribute]);
        },


        selectorForEach: function (selector, func, parentNode) {
          
            if(parentNode === undefined)
            parentNode = document;

            var nodes = parentNode.querySelectorAll(selector);

            Array.prototype.forEach.call(nodes, func);
        },




        // EVENTS


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




        // STRINGS


        capitalize: function (string) {
            var firstLetter = string.charAt(0);
            var restOfString = string.slice(1);
            return firstLetter.toUpperCase() + restOfString;
        },




        // MATH


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
        },




    };

    return util;
});
