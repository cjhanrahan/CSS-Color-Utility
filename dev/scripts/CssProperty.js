'use strict';

define(['util', 'ColorState'], function (_, ColorState) {
      
    var CssProperty = function(rootNode){
        Object.defineProperties(this, {
            rootNode: {
                value: rootNode, 
                writable: false
            },
            colorState: {
                value: new ColorState(),
                writable: false
            },
            propertyName: {
                value: rootNode.getAttribute('data-css-property'),
                writable: false
            },
            sampleDiv: {
                value: document.querySelector('.exampleText'),
                writable: false
            }
        });

        this.attachListeners();
    };



    CssProperty.prototype.updateSampleColor = function (colorCss) {
        this.sampleDiv.style[this.propertyName] = colorCss;
    };



    CssProperty.prototype.attachListeners = function () {
        var thisProperty = this;
        var colorValueNodes = this.rootNode.querySelectorAll('.colorValue');

        _.nodeListForEach(colorValueNodes, function (colorValueNode) {
            var valueType = colorValueNode.getAttribute('data-value-type');
            var inputNodes = colorValueNode.querySelectorAll('input');

            _.nodeListForEach(inputNodes, function (inputNode) {

                inputNode.addEventListener('input', function () {
                    var newValue = inputNode.value;
                    thisProperty.colorState.updateValue(valueType, newValue);
                    var newCss = thisProperty.colorState.getHexCss();
                    thisProperty.updateSampleColor(newCss);
                    thisProperty.updateInputs();
                });
            });
        });
    };



    CssProperty.prototype.updateInputs = function () {
        var thisProperty = this;
        var colorValueNodes = this.rootNode.querySelectorAll('.colorValue');

        _.nodeListForEach(colorValueNodes, function (colorValueNode) {
            var valueType = colorValueNode.getAttribute('data-value-type');
            var inputNodes = colorValueNode.querySelectorAll('input');
            var valueToSet = thisProperty.colorState.getValue(valueType);

            _.nodeListForEach(inputNodes, function (inputNode) {
                inputNode.value = valueToSet;
            });
        });
    };





    return CssProperty;
});