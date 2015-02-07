define(['util', 'InputSystem', 'ColorState'], function (_, InputSystem, ColorState) {

  describe('The hex InputSystem', function () {

    var inputSystem = null;


    beforeEach(function () {
      var parentSelector =
        _.selectorWithData('.cssProperty', 'css-property', 'backgroundColor');
      var hexSelector = _.selectorWithData('.inputSystem', 'input-system', 'hex');
      var inputSystemSelector = parentSelector + ' ' + hexSelector;
      var rootNode = document.querySelector(inputSystemSelector);

      inputSystem = new InputSystem(rootNode);
    });



    it('should have a getColorState function which returns a ColorState', function () {
      expect(inputSystem.getColorState).toEqual(jasmine.any(Function));
      expect(inputSystem.getColorState()).toEqual(jasmine.any(ColorState));
    });
  });
});