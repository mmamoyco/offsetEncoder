var $notEncodedText = document.getElementById("not-encoded-text");
var $encodedText = document.getElementById("encoded-text");
var $keyInput = document.getElementById("key-input");
var $errorMessage = document.getElementById("error-message");
var $buttonEnc = document.getElementById("button-enc");
var $buttonDec = document.getElementById("button-dec");
var $buttonContainer = document.getElementsByClassName("button-container")[0];

var alphabet = "abcdefghijklmnopqrstuvwxyz";

$keyInput.value = 3;

// $encodedText.value = "HWEEQWE";

function mapIndex(index, key) {
	return ((index + 1) * key -1 ) % alphabet.length;
}

// TODO: Checking relatibely prime numbers

$buttonContainer.addEventListener("click", function(e) {
	var table;

	if (e.target === $buttonEnc) {
		$errorMessage.textContent = "";
		check = checker($keyInput.value, alphabet);

		if (check == -1) {
			$errorMessage.textContent = "Key < 0";
		} else if (check == 0) {
			table = createEncodeTableFromKey($keyInput.value);
			$encodedText.value = encode(table, $notEncodedText.value);
		} else {
			$errorMessage.textContent = "Error in " + check + " char";
		}
	} else if (e.target === $buttonDec) {
		$errorMessage.textContent = "";
		check = checker($keyInput.value, alphabet);

		if (check == -1) {
			$errorMessage.textContent = "Key < 0";
		} else if (check == 0) {
			table = createDecodeTableFromKey($keyInput.value);
			$notEncodedText.value = encode(table, $encodedText.value);
		} else {
			$errorMessage.textContent = "Error in " + check + " char";
		}
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

	for (var i = 0; i < alphabet.length; i++) {
		table[alphabet[i]] = alphabet[mapIndex(i, key)];
	}

	table[" "] = " ";

	for (i = 0; i < 10; i++) {
		table[i] = i;
	}

	return table;
}


function createDecodeTableFromKey(key) {
	var table = {};

	for (var i = 0; i < alphabet.length; i++) {
		table[alphabet[mapIndex(i, key)]] = alphabet[i];
	}

	return table;
}

function nod(firstNumber, secondNumber) {
	while (firstNumber != 0 && secondNumber != 0) {
		if (firstNumber > secondNumber) {
			firstNumber %= secondNumber;
		} else {
			secondNumber %= firstNumber;
		}
	}
	if (firstNumber == 0) {
		return secondNumber;
	} else {
		return firstNumber;
	}
}

function isRelativelyPrimeNumbers(firstNumber, secondNumber) {
	if (nod(firstNumber, secondNumber) != 1) {
		return false;
	} else {
		return true;
	}
}

function checker(key, alphabeth) {
	if (key < 0) {
		return -1;
	}

	if (!isRelativelyPrimeNumbers(key, alphabeth.length)) {
		if (nod(key, alphabeth.length) == 2) {
			return 13;
		} else {
			return 2;
		}
	} else {
		return 0;
	}
}
