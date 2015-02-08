define(['util', 'CssProperty'], function (_, CssProperty) {

    describe('The background-color CssProperty ', function () { //DEBUG change name

        var cssProperty = null;


        beforeEach(function () {
            var selector = _.selectorWithData('.cssProperty', 'css-property', 'backgroundColor');
            var backgroundNode = document.querySelector(selector);
            cssProperty = new CssProperty(backgroundNode);
        });



        it('should have a working updateSampleColor function', function () {
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
       


        it('should call updateValue after an input event on hex input', function () {
            spyOn(cssProperty.colorState, 'updateValue');
            _.triggerNativeEvent('input', cssProperty.rootNode);
            expect(cssProperty.colorState.updateValue).toHaveBeenCalled();
        });
    });
});