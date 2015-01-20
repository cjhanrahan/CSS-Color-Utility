define(['cssproperty', 'util'], function (CssProperty, _) {

  describe('A CssProperty ', function () { //DEBUG change name


    var cssProperty = null;

    beforeAll(function () {
      var selector = _.selectorWithData('.cssProperty', 'css-property', 'backgroundColor');
      var backgroundNode = document.querySelector(selector);
      cssProperty = new CssProperty(backgroundNode);
    });

    it('debug', function () {
      // expect('abc').toEqual('abd');
    });
  });
});