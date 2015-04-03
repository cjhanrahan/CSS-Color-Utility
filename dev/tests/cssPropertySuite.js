'use strict';
define(['util', 'CssProperty'], function (_, CssProperty) {

    describe('The background-color CssProperty ', function () { //DEBUG change name

        let cssProperty = null;


        beforeEach(function () {
            let selector = _.selectorWithData('.cssProperty', 'css-property', 'backgroundColor');
            let backgroundNode = document.querySelector(selector);
            cssProperty = new CssProperty(backgroundNode);
            cssProperty.colorState.setByHex('FFF');
        });



        it('should have an updateSampleColor function', function () {
            expect(cssProperty.updateSampleColor).toEqual(jasmine.any(Function));
        });



        it('updateSampleColor should change sample\'s background-color', function() {
            let sampleDiv = cssProperty.sampleDiv;

            let initialBackgroundColor = sampleDiv.style.backgroundColor;

            cssProperty.updateSampleColor('red');
            expect(sampleDiv.style.backgroundColor).toEqual('red');

            cssProperty.updateSampleColor('blue');
            expect(sampleDiv.style.backgroundColor).toEqual('blue');

            sampleDiv.style.backgroundColor = initialBackgroundColor;
        });
       


        it('should call the colorState\'s updateValue function after an input event on hex input', function () {
            spyOn(cssProperty.colorState, 'updateValue');
            let hexInputNode = cssProperty.rootNode.querySelector('input');
            _.triggerNativeEvent('input', hexInputNode);
            expect(cssProperty.colorState.updateValue).toHaveBeenCalled();
        });




        it('should call the updateSampleColor function after an input event on hex input', function () {
            spyOn(cssProperty, 'updateSampleColor');
            let hexInputNode = cssProperty.rootNode.querySelector('input');
            _.triggerNativeEvent('input', hexInputNode);
            expect(cssProperty.updateSampleColor).toHaveBeenCalled();
        });



        it('should have an updateInputs function', function () {
            expect(cssProperty.updateInputs).toEqual(jasmine.any(Function));
        });
    });
});