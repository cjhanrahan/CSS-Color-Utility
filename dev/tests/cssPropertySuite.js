'use strict';

define(['util', 'CssProperty'], function (_, CssProperty) {


    describe('The background-color CssProperty ', function () {

        var backgroundSelector = '[data-css-property = backgroundColor]';
        var backgroundNode = document.querySelector(backgroundSelector);
        var hexInputNodeSelector = '[data-value-type = hex] input';
        var hexInputNode = backgroundNode.querySelector(hexInputNodeSelector);
        var cssProperty = new CssProperty(backgroundNode);


        beforeEach(function () {

            cssProperty.colorState.setByHex('FFF');
            cssProperty.updateInputs();
        });


        it('should have an updateSampleColor function', function () {
            expect(cssProperty.updateSampleColor).toEqual(jasmine.any(Function));
        });


        it('updateSampleColor should change sample\'s background-color', function() {
            var sampleDiv = cssProperty.sampleDiv;
            var initialBackgroundColor = sampleDiv.style.backgroundColor;

            cssProperty.updateSampleColor('red');
            expect(sampleDiv.style.backgroundColor).toEqual('red');

            cssProperty.updateSampleColor('blue');
            expect(sampleDiv.style.backgroundColor).toEqual('blue');

            sampleDiv.style.backgroundColor = initialBackgroundColor;
        });
       

        it('should call updateSampleColor after an input event on an HTML input', function () {
            spyOn(cssProperty, 'updateSampleColor');
            _.triggerNativeEvent('input', hexInputNode);
            expect(cssProperty.updateSampleColor).toHaveBeenCalled();
        });


        it('should call the colorState\'s updateValue after an input event on an HTML input', function () {
            spyOn(cssProperty.colorState, 'updateValue');
            _.triggerNativeEvent('input', hexInputNode);
            expect(cssProperty.colorState.updateValue).toHaveBeenCalled();
        });


        it('should have an updateInputs function', function () {
            expect(cssProperty.updateInputs).toEqual(jasmine.any(Function));
        });


        it('should change HTML inputs in response to changes in it\'s colorState', function () {
            var redRangeSelector = '[data-value-type = hex] input';
            var redRangeNode = document.querySelector(redRangeSelector);
            var initialValue = redRangeNode.value;
            
            cssProperty.colorState.setByHex('AAA');
            cssProperty.updateInputs();
            var finalValue = redRangeNode.value;

            expect(initialValue).not.toBe(finalValue);
        });
    });
});