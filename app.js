// [1] explain what a callback function is and give a simple example
// a callback function is a function passed as an argument to another function and is executed after some operation is executed

callbackCaller(3, callback);

function callbackCaller(num, some_function) {
    some_function(num);
}

function callback(num) {
    alert(num);
}

// [2] Given a string, reverse each word in the sentence
// Welcome to Javascript should be emocleW ot tpircsavaJ
var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
    return string.split(separator).reverse().join(separator);
}

// [3] How to check if an object is an array or not? Provide some code
let arrayList = [1, 2, 3];
if (Object.prototype.toString.call(arrayList) === '[object Array]') {
    console.log('Array!');
}

// [4] How to empty an array in JavaScript?
arrayList.length = 0;

// [5] How would you check if a number is an integer?
function isInt(num) {
    return num % 1 === 0;
}