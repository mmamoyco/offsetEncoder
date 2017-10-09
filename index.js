var $notEncodedText = document.getElementById("not-encoded-text");
var $encodedText = document.getElementById("encoded-text");
var $result = document.getElementById("result");
var $keyInput = document.getElementById("key-input");
var $buttonEnc = document.getElementById("button-enc");
var $buttonDec = document.getElementById("button-dec");
var $buttonContainer = document.getElementsByClassName("button-container")[0];

var aplhabet = "abcdefghijklmnopqrstuvwxyz";

function mapIndex(index, key) {
	return ((index + 1) * key -1 ) % aplhabet.length;
}

// TODO: Checking relatibely prime numbers

$buttonContainer.addEventListener("click", function(e) {
	var table;

	if (e.target === $buttonEnc) {
		table = createEncodeTableFromKey($keyInput.value);
		$result.textContent = "Encoded text: " + encode(table, $notEncodedText.value);
	} else if (e.target === $buttonDec) {
		table = createDecodeTableFromKey($keyInput.value);
		$result.textContent = "Source text: " + encode(table, $encodedText.value);
	}
});


function encode(encodeTable, text) {
	var result = "";

	for (var i = 0; i < text.length; i++) {
		result += encodeTable[text[i]];
	}

	return result;
}


function createEncodeTableFromKey(key) {
	var table = {};

	for (var i = 0; i < aplhabet.length; i++) {
		table[aplhabet[i]] = aplhabet[mapIndex(i, key)];
	}

	return table;
}


function createDecodeTableFromKey(key) {
	var table = {};

	for (var i = 0; i < aplhabet.length; i++) {
		table[aplhabet[mapIndex(i, key)]] = aplhabet[i];
	}

	return table;
}
