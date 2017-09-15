var $text = document.getElementById("notEncodedText");
var $result = document.getElementById("result");
var $keyInput = document.getElementById("keyInput");
var $buttonEnc = document.getElementById("buttonEnc");

var aplhabet = "abcdefghijklmnopqrstuvwxyz";
var encoded = "";
// button click

function findIndexInAlphabeth(letter) {
	for (var i = 0; i < aplhabet.length; i++) {
		if (aplhabet[i]	===  letter) {
			return i;
		}
	}
}


function calculateOffset(index) {
	return ((index + 1) * $keyInput.value) % aplhabet.length
}





$buttonEnc.addEventListener("click", function(){
	$result.textContent = ""


	// to encode text value
	var text = $text.value;
	


	for (var i = 0; i < text.length; i++) {

		var alphabetIndex = findIndexInAlphabeth(text[i]);

		console.log(alphabetIndex);
		var offset = calculateOffset(alphabetIndex);
		var indexOfEncodedLetter = (offset + alphabetIndex) % 26;

		// console.log(indexOfEncodedLetter)
		// console.log(aplhabet[indexOfEncodedLetter])

		encoded += aplhabet[indexOfEncodedLetter];

	}





	// result out on screen 
	var textNode = document.createTextNode(encoded);
	$result.appendChild(textNode);


});






console.log("branch test 1")



