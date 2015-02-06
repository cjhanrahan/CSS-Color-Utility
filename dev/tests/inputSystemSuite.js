define(['InputSystem', 'util'], function (InputSystem, _) {

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

    it('should have an onInput function', function () {
      expect(inputSystem.onInput).toEqual(jasmine.any(Function));
    });
  });
});