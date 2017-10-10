var $notEncodedText = document.getElementById("not-encoded-text");
var $encodedText = document.getElementById("encoded-text");
var $keyInput = document.getElementById("key-input");
var $buttonEnc = document.getElementById("button-enc");
var $buttonDec = document.getElementById("button-dec");
var $buttonContainer = document.getElementsByClassName("button-container")[0];

var alphabet = "abcdefghijklmnopqrstuvwxyz";

function mapIndex(index, key) {
	return ((index + 1) * key -1 ) % alphabet.length;
}

$buttonContainer.addEventListener("click", function encryption(e) {
	var table;

	check = checker($keyInput.value, alphabet);

	switch (check) {
		case -1:
			toastr.error("Key < 0");
			break;
		case 13:
		case 2:
			toastr.error("Error in " + check + " char");
			break;
		case -2:
			toastr.error("Key is undefined");
			break;
		default:
			if (e.target === $buttonEnc) {
				table = createEncodeTableFromKey($keyInput.value);
				$encodedText.value = encode(table, $notEncodedText.value);
				$notEncodedText.value = "";
			} else {
				table = createDecodeTableFromKey($keyInput.value);
				$notEncodedText.value = encode(table, $encodedText.value);
				$encodedText.value = "";
			}
	}
});

function encode(encodeTable, text) {
	var result = "";

	for (var i = 0; i < text.length; i++) {
		if (encodeTable[text[i]] != undefined) {
			result += encodeTable[text[i]];
		} else {
			toastr.error("Source string contains invalid characters");
			return "";
		}
	}

	if (result == "") {
		toastr.error("Source string is undefined");
	} else {
		toastr.success("Operation successful!");
		return result;
	}
}


function createEncodeTableFromKey(key) {
	var table = {};

	for (var i = 0; i < alphabet.length; i++) {
		table[alphabet[i]] = alphabet[mapIndex(i, key)];
	}

	commonTablesCompletion(table);
	return table;
}


function createDecodeTableFromKey(key) {
	var table = {};

	for (var i = 0; i < alphabet.length; i++) {
		table[alphabet[mapIndex(i, key)]] = alphabet[i];
	}

	commonTablesCompletion(table);
	return table;
}

// add numbers and space to table
function commonTablesCompletion(table) {
	table[" "] = " ";

	for (i = 0; i < 10; i++) {
		table[i] = i;
	}
}

function greatestCommonDivisor(firstNumber, secondNumber) {
	while (firstNumber != 0 && secondNumber != 0) {
		if (firstNumber > secondNumber) {
			firstNumber %= secondNumber;
		} else {
			secondNumber %= firstNumber;
		}
	}

	var result = (firstNumber == 0) ? secondNumber : firstNumber;

	return result;
}

function isRelativelyPrimeNumbers(firstNumber, secondNumber) {
	return (greatestCommonDivisor(firstNumber, secondNumber) != 1) ? false : true;
}

function checker(key, alphabeth) {
	var check = 0;

	if (key < 0) {
		check = -1;
	} else if (key == "") {
		check = -2;
	} else if (!isRelativelyPrimeNumbers(key, alphabeth.length)) {
		check = (greatestCommonDivisor(key, alphabeth.length) == 2) ? 13 : 2;
	}

	return check;
}
