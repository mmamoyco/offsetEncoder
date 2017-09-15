var $text = document.getElementById("unencoded-text");
var $result = document.getElementById("result");
var $keyInput = document.getElementById("key-input");
var $buttonEnc = document.getElementById("button-enc");

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var encoded = "";

console.log("working")

// button click
$buttonEnc.addEventListener("click", function(){
	$result.textContent = ""

	// to encode text value
	var text = $text.value;

	for (var i = 0; i < text.length; i++) {

		var alphabetIndex = findIndexInAlphabet(text[i]);
		var offset = calculateOffset(alphabetIndex);

		var indexOfEncodedLetter = (offset + alphabetIndex) % alphabet.length; // find index of encoded letter

		encoded += alphabet[indexOfEncodedLetter]; // add encoded letter in result text

	}

	// result out on screen
	var textNode = document.createTextNode(encoded);
	$result.appendChild(textNode);
});

// find index of letter in eng alphabet
function findIndexInAlphabet(letter) {
	return alphabet.indexOf(letter);
}

// calculate offset of letters
function calculateOffset(index) {
	return ((index + 1) * $keyInput.value) % alphabet.length;
}
