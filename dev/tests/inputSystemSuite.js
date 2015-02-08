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



    it('should have an onColorChange function', function () {
      expect(inputSystem.onColorChange).toEqual(jasmine.any(Function));
    });



  });
});