var $text = document.getElementById("notEncodedText");
var $result = document.getElementById("result");
var $keyInput = document.getElementById("keyInput");
var $buttonEnc = document.getElementById("buttonEnc");
var $buttonDec = document.getElementById("buttonDec");

var aplhabet = "abcdefghijklmnopqrstuvwxyz";
var encoded = "";
// button click

// function findIndexInAlphabeth(letter) {
// 	for (var i = 0; i < aplhabet.length; i++) {
// 		if (aplhabet[i]	===  letter) {
// 			return i;
// 		}
// 	}
// }


// var encodeTable = {
// 	"a": "a",
// 	"b": "a",
// 	"c": "a",
// 	"d": "a",
// 	"e": "a",
// 	"f": "a",
// 	"g": "a",
// 	"h": "a",
// 	"i": "a",
// 	"j": "a",
// 	"k": "a",
// 	"l": "a",
// 	"m": "a",
// 	"n": "a",
// 	"o": "a",
// 	"p": "a",
// 	"q": "a",
// 	"r": "a",
// 	"s": "a",
// 	"t": "a",
// 	"u": "a",
// 	"v": "a",
// 	"w": "a",
// 	"y": "a",
// 	"z": "a"
// }


var i = 0;

function mapIndex(index, key) {
	return ((index + 1) * key -1 ) % aplhabet.length;
}


// TODO comibne to one listener

$buttonEnc.addEventListener("click", function(){
	
	var table = createEncodeTableFromKey($keyInput.value);

	$result.textContent = encode(table, $text.value);
});

$buttonDec.addEventListener("click", function(){
	
	// if ()
	// TODO implement key validation
	var table = createEncodeTableFromKey($keyInput.value);
	

	$result.textContent = decode(table, $text.value);
});



function encode(encodeTable, text) {

	var resulr = "";

	for (var i = 0; i < text.length; i++) {
		resulr += encodeTable[text[i]];
	}

	return resulr;
}

function decode(encodeTable, text) {
	
		var resulr = "";

		// TODO finish decoder
		for (var i = 0; i < text.length; i++) {
			resulr += 
		}
	
		return resulr;
	}


$buttonDec.addEventListener("click", function(){



	


// 	// if mapped letter is in alphabeth -> 
// 	//decode



// 	// if not ->
// 	// create new aplhabeth from key


function createEncodeTableFromKey(key) {

	var table = {};

	for (var i = 0; i < aplhabet.length; i++) {
		table[aplhabet[i]] = aplhabet[mapIndex(i, key)];
	}

	return table;

}

// $buttonEnc.addEventListener("click", function(){
// 	$result.textContent = ""


// 	// to encode text value
// 	var text = $text.value;

// 	for (var i = 0; i < text.length; i++) {

// 		var alphabetIndex = findIndexInAlphabeth(text[i]);
// 		var newAlphabethIndex = (alphabetIndex * $keyInput.value) % 26;
// 		console.log(newAlphabethIndex);
// 		encoded += aplhabet[newAlphabethIndex];

// 	}


// 	// result out on screen 
// 	var textNode = document.createTextNode(encoded);
// 	$result.appendChild(textNode);


// });






// console.log("branch test 1")



