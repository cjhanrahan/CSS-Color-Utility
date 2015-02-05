define(['CssProperty', 'util'], function (CssProperty, _) {

  describe('The background-color CssProperty ', function () { //DEBUG change name

    var cssProperty = null;


    beforeEach(function () {
      var selector = _.selectorWithData('.cssProperty', 'css-property', 'backgroundColor');
      var backgroundNode = document.querySelector(selector);
      cssProperty = new CssProperty(backgroundNode);
    });


    it('should have an onInput function', function () {
      expect(cssProperty.onInput).toEqual(jasmine.any(Function));
    });


    it('should call onInput when \'input\' is fired on rootNode', function () {
      var onInputWasCalled = false;
      document.addEventListener('input', function (event) {
        onInputWasCalled = event.data.cssPropertyOnInputCalled;
      });

      _.triggerNativeEvent('input', cssProperty.rootNode);

      expect(onInputWasCalled).toBe(true);
    });
  });
});