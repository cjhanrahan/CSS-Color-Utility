define(['util', 'ColorState'], function(_, ColorState){
      
    var CssProperty = function(rootNode){
        var thisProperty = this;

        this.rootNode = rootNode;
        this.colorState = new ColorState();

        this.propertyName = this.rootNode.getAttribute('data-css-property');
        this.sampleDiv = document.querySelector('.colorSample');

        this.attachListeners();
    };


    CssProperty.prototype.setPropertyColor = function (colorString) {
        this.sampleDiv.style[this.propertyName] = colorString;
    };



    CssProperty.prototype.attachListeners = function () {
        var thisProperty = this;
        var colorValues = this.rootNode.querySelectorAll('.colorValue');

        _.nodeListForEach(colorValues, function (colorValue) {
            var valueType = colorValue.getAttribute('data-value-type');
            var inputList = colorValue.querySelectorAll('input');

            _.nodeListForEach(inputList, function (inputNode) {

                inputNode.addEventListener('input', function (event) {

                    thisProperty.colorState.updateValue(valueType, inputNode.value);
                });
            });
        });
    };



    return CssProperty;
});