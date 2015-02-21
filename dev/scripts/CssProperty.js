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
        var thisProperty = this;
        var colorValueNodes = this.rootNode.querySelectorAll('.colorValue');

        _.nodeListForEach(colorValueNodes, function (colorValueNode) {
            var valueType = colorValueNode.getAttribute('data-value-type');
            var inputNodes = colorValueNode.querySelectorAll('input');
            var valueToSet = thisProperty.colorState.getValue(valueType);

            _.nodeListForEach(inputNodes, function (inputNode) {
                inputNode.value = valueToSet;
            });
        });
    };



    CssProperty.prototype.attachListeners = function () {
        var thisProperty = this;
        var colorValueNodes = this.rootNode.querySelectorAll('.colorValue');

        _.nodeListForEach(colorValueNodes, function (colorValueNode) {
            var valueType = colorValueNode.getAttribute('data-value-type');
            var inputNodes = colorValueNode.querySelectorAll('input');

            _.nodeListForEach(inputNodes, function (inputNode) {

                inputNode.addEventListener('input', function (event) {
                    var newValue = inputNode.value;
                    thisProperty.colorState.updateValue(valueType, newValue);
                    var newCss = thisProperty.colorState.getHexCss();
                    thisProperty.updateSampleColor(newCss);
                    thisProperty.updateInputs();
                });
            });
        });
    };





    return CssProperty;
});