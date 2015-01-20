define(['cssproperty'], function (CssProperty) {

  describe('change this name', function () { //DEBUG change name

    var cssProperty = new CssPropert();

    it('should instatiate a CSS property from a Node', function () {
      
      console.log('First spec reached'); //DEBUG
      expect('abc').toEqual('abc');

    });
  });
});