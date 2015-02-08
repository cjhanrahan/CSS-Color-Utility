define(['util', 'ColorValue'], function (_, ColorValue) {

  describe('The hex ColorValue', function () {
    
    var colorValue = null;


    beforeEach(function() {
      var parentSelector =
        _.selectorWithData('.cssProperty', 'css-property', 'backgroundColor');
      var colorValueSelector = _.selectorWithData('.colorValue', 'value-type', 'hex');
      var selector = parentSelector + ' ' + colorValueSelector;
      var rootNode = document.querySelector(selector);

      colorValue = new ColorValue(rootNode);
    });


    it('should have an onInput function', function () {
      expect(colorValue.onInput).toEqual(jasmine.any(Function));
    });

  });
});