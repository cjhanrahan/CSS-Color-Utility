define(['util', 'CssProperty'], function (_, CssProperty) {

    describe('The background-color CssProperty ', function () { //DEBUG change name

        var cssProperty = null;


        beforeEach(function () {
            var selector = _.selectorWithData('.cssProperty', 'css-property', 'backgroundColor');
            var backgroundNode = document.querySelector(selector);
            cssProperty = new CssProperty(backgroundNode);
        });



        it('should have a setPropertyColor function which changes css properties in example', function () {
            expect(cssProperty.setPropertyColor).toEqual(jasmine.any(Function));
        });



        it('setPropertyColor should change sample\'s background-color', function() {
            var sampleDiv = cssProperty.sampleDiv;

            var initialBackgroundColor = sampleDiv.style.backgroundColor;

            cssProperty.setPropertyColor('red');
            expect(sampleDiv.style.backgroundColor).toEqual('red');

            cssProperty.setPropertyColor('blue');
            expect(sampleDiv.style.backgroundColor).toEqual('blue');

            sampleDiv.style.backgroundColor = initialBackgroundColor;
        });
        
    });
});