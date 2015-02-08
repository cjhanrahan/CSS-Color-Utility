define(['util', 'ColorState'], function (_, ColorState) {
      
    var CssProperty = function(rootNode){
        var thisProperty = this;

        this.rootNode = rootNode;
        this.colorState = new ColorState();

        this.propertyName = this.rootNode.getAttribute('data-css-property');
        this.sampleDiv = document.querySelector('.exampleText');

        this.attachListeners();
    };


    CssProperty.prototype.updateSampleColor = function (colorCss) {
        this.sampleDiv.style[this.propertyName] = colorCss;
    };



    CssProperty.prototype.updateInputs = function () {
        
    };



    CssProperty.prototype.attachListeners = function () {
        var thisProperty = this;
        var colorValues = this.rootNode.querySelectorAll('.colorValue');

        _.nodeListForEach(colorValues, function (colorValue) {
            var valueType = colorValue.getAttribute('data-value-type');
            var inputList = colorValue.querySelectorAll('input');

            _.nodeListForEach(inputList, function (inputNode) {

                inputNode.addEventListener('input', function (event) {
                    var newValue = inputNode.value;
                    thisProperty.colorState.updateValue(valueType, newValue);
                    var newCss = thisProperty.colorState.getHexCss();
                    thisProperty.updateSampleColor(newCss);
                });
            });
        });
    };





    return CssProperty;
});