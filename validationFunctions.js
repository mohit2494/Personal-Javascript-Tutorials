
// Checks if zip code is of length 5 and is not a number.
function validateZIPcode(inputField,helptext){
	// check if input is exactly 5
	if(inputField.value.length != 5){
		if(helptext != null){
			helptext.innerHTML = 'please specify exactly 5 digits';
			return false;
		}
		else if(isNaN(inputField.value)){
			if(helptext != null)
				helptext.innerHTML = 'please specify a number';
				return false;
		}
		else {
			//everything fine
			if(helptext != null){
				helptext.innerHTML = "";
				return true;
			}
		}
	}
}

function placeOrder(form){

}


/*******  Creating a new element in DOM *********/
document.createElement();
document.createTextNode();