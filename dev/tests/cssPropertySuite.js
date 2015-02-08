define(['util', 'CssProperty'], function (_, CssProperty) {

    describe('The background-color CssProperty ', function () { //DEBUG change name

        var cssProperty = null;


        beforeEach(function () {
            var selector = _.selectorWithData('.cssProperty', 'css-property', 'backgroundColor');
            var backgroundNode = document.querySelector(selector);
            cssProperty = new CssProperty(backgroundNode);
            cssProperty.colorState.setByHex('FFF');
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
       


        it('should call the colorState\'s updateValue function after an input event on hex input', function () {
            spyOn(cssProperty.colorState, 'updateValue');
            var hexInputNode = cssProperty.rootNode.querySelector('input');
            _.triggerNativeEvent('input', hexInputNode);
            expect(cssProperty.colorState.updateValue).toHaveBeenCalled();
        });




        it('should call the updateSampleColor function after an input event on hex input', function () {
            spyOn(cssProperty, 'updateSampleColor');
            var hexInputNode = cssProperty.rootNode.querySelector('input');
            _.triggerNativeEvent('input', hexInputNode);
            expect(cssProperty.updateSampleColor).toHaveBeenCalled();
        });



        it('should have an updateInputs function', function () {
            expect(cssProperty.updateInputs).toEqual(jasmine.any(Function));
        });


    });
});