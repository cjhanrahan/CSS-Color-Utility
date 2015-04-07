'use strict';

define(['util', 'ColorState', 'validate'], function (_, ColorState, validate) {
      
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


    CssProperty.prototype.attachListeners = function () {
        var thisProperty = this;
        var colorValueNodes = this.rootNode.querySelectorAll('.colorValue');

        _.listForEach(colorValueNodes, function (colorValueNode) {
            var valueType = colorValueNode.dataset.valueType;
            var inputNodes = colorValueNode.querySelectorAll('input');

            _.listForEach(inputNodes, function (inputNode) {

                inputNode.addEventListener('input', function (event) {
                    var newValue = inputNode.value;
                    var newValueIsValid = validate[valueType](newValue);
                    if (newValueIsValid) {
                        thisProperty.colorState.updateValue(valueType, newValue);
                        var newCss = thisProperty.colorState.getHexCss();
                        thisProperty.updateSampleColor(newCss);
                        thisProperty.updateInputs();
                    } else {
                    }
                });
            });
        });
    };


    CssProperty.prototype.updateSampleColor = function (colorCss) {
        this.sampleDiv.style[this.propertyName] = colorCss;
        console.log('updateSampleColor was called');
    };


    CssProperty.prototype.updateInputs = function () {
        var thisProperty = this;
        var colorValueNodes = this.rootNode.querySelectorAll('.colorValue');

        _.listForEach(colorValueNodes, function (colorValueNode) {
            var valueType = colorValueNode.dataset.valueType;
            var inputNodes = colorValueNode.querySelectorAll('input');
            var valueToSet = thisProperty.colorState.getValue(valueType);

            _.listForEach(inputNodes, function (inputNode) {
                inputNode.value = valueToSet;
                updateCount++;
            });
        });

    };


    return CssProperty;
});