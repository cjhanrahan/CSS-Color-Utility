define(['cssproperty', 'util'], function (CssProperty, _) {

  describe('The background-color CssProperty ', function () { //DEBUG change name


    var cssProperty = null;



    beforeAll(function () {
      var selector = _.selectorWithData('.cssProperty', 'css-property', 'backgroundColor');
      var backgroundNode = document.querySelector(selector);
      cssProperty = new CssProperty(backgroundNode);
    });



    it('should have an onInput function', function () {
      expect(cssProperty.onInput).toEqual(jasmine.any(Function));
    });



    it('should call onInput when \'input\' is fired on rootNode', function(){
      spyOn(cssProperty, 'onInput');
      
      _.triggerNativeEvent('input', cssProperty.rootNode);
      expect(cssProperty.onInput).toHaveBeenCalled();
    });




  });
});