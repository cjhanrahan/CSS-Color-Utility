define(function() {

  var validate = {
    hexInput: function(hexValue){
      var isValid = false;
      var validationDiv = document.querySelector('.validationOutput');
      
      if(isNaN(parseInt(hexValue, 16)))
        validationDiv.innerHTML = "Not a valid hex number";
      
      else if(!(hexValue.length === 3 || hexValue.length === 6))
        validationDiv.innerHTML = "Hex number must be 3 or 6 digits";
      
      else {
        validationDiv.innerHTML = "";
        isValid = true;
      }

      return isValid;

    }
  };

  return validate;
});