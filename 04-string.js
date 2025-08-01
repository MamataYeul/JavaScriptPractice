var greet=" Good morning"

console.log("======== toLowerCase() ===========");
var greetInLowerCase = greet.toLowerCase();
console.log(`Greet in lower case: ${greetInLowerCase}`);

console.log("======== concat() ===========");
var strOne = "My";
var strTwo = " Love"
var strThree = " JavaScript"
var strConcat = strOne.concat(strTwo).concat(strThree);
console.log(`Concat: ${strConcat}`);

console.log("-----IndexOf()-----------");
var greet="Good Evening";
var IndexOfCharg = greet.indexOf("g")

console.log("======== indexOf() ===========");
var greet = "Good Evening Nana";
var indexOfCharg = greet.indexOf("g")
console.log(`Index of char g: ${indexOfCharg}`);

var indexOfCharT = greet.indexOf("T")
console.log(`Index of char T: ${indexOfCharT}`);

var indexOfCharn = greet.indexOf("n")
console.log(`Index of char n: ${indexOfCharn}`);

var indexOfCharn = greet.lastIndexOf("n")
console.log(`Index of char n: ${indexOfCharn}`);

var indexOfCharNana = greet.lastIndexOf("Nana")
console.log(`Index of char Nana: ${indexOfCharNana}`);

console.log("--------replace()---------");

var greet = "Good morning javascript";
var greetReplace= greet.replace("Morning", "Evening");
console.log(`Replace:${greetReplace}`);

var greetReplace =greet.replaceAll(" " , "-");
console.log(`Replace: ${greetReplace}`);

console.log("--------trim()--------------");
var MyLove="     I Love only JS   ";
var lengthBeforeTrim = MyLove.length;
console.log(`Before trim length is:${lengthBeforeTrim}`);
var MyLoveJS= MyLove.trim();
var lengthAfterTrim= MyLoveJS.length;
console.log(`After trim length is:${lengthAfterTrim}`);
console.log(`Total removed spaces are:${lengthBeforeTrim-lengthAfterTrim}`);

console.log("=====includes()=======");
var mylove= "I love only js no more any one";
var isincludeJS = mylove.includes("js");
console.log(isincludeJS);

console.log("-----slice()----");
var str= "Hello Javascript";
var strSlice = str.slice(0, 5);


console.log("----split()----");
var str = "Hello Javascript";
var str = "I have 100CR Property";
var splitResult= str.split(" ");
console.log(splitResult);
console.log(`Total number of words:${splitResult.length}`);

























console.log("Human being has two types of minds:Consious and Subconsious. What we learnt in a day within 12-24 hours make a repeat it and make a practice");
