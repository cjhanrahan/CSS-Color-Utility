'use strict';

define(['util', 'ColorState', 'validate', 'EventListener'],
    function (_, ColorState, validate, EventListener) {
      
    var CssProperty = function (rootNode) {
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
            },
            inputListeners: {
                value: [],
                writable: false,
            }
        });
    };


    CssProperty.prototype.attachListeners = function () {
        var app = require('app');
        var thisProperty = this;
        var colorValueNodes = this.rootNode.querySelectorAll('.colorValue');

        _.listForEach(colorValueNodes, function (colorValueNode) {
            var valueType = colorValueNode.dataset.valueType;
            var inputNodes = colorValueNode.querySelectorAll('input');

            _.listForEach(inputNodes, function (inputNode) {

                var onInput = function () {
                    var newValue = inputNode.value;
                    var validationResults = validate[valueType](newValue);
                    if (validationResults.isValid) {
                        thisProperty.colorState.updateValue(valueType, newValue);
                        var newCss = thisProperty.colorState.getHexCss();
                        thisProperty.updateSampleColor(newCss);
                        thisProperty.updateInputs();
                        app.showValidationText('');
                    } else {
                        app.showValidationText(validationResults.reason);
                    }
                };
                var inputListener = new EventListener('input', inputNode, onInput)
                    .attach();

                thisProperty.inputListeners.push(inputListener);
            });
        });
        return this;
    };


    CssProperty.prototype.updateSampleColor = function (colorCss) {
        this.sampleDiv.style[this.propertyName] = colorCss;
        return this;
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
            });
        });
        return this;
    };


    CssProperty.prototype.detachListeners = function () {
        this.inputListeners.forEach(function (listener) {
            listener.detach();
        });
        return this;
    };


    return CssProperty;
});
