//Explicit conversion: Conver number strings and boolean values to numbers,
//In that case we can use Number();
//string to number
result = Number('324');
console.log(result);

result=Number('324e-1')
console.log(result);

//boolean to number
result=Number(true);
console.log(result);

result = Number(false);
console.log(result);
console.log("--------------------------------------");

//Explicit conversion: Invalid string to number return NaN

//If a string is an invalid Number, the result will be NaN.For example

let resultExplicit;
resultExplicit = Number('abc');
console.log(resultExplicit);

result= Number(undefined);
console.log(result);

result=Number(NaN);
console.log(result);//NaN


//Explicit conversion: string to number using +operator
var numberInstring = '100';
console.log(typeof numberInstring);

var myNumber = +numberInstring;
console.log(typeof myNumber);

//Explicit conversion: number to string data type conversion using toStrring() method
var myNumber = 100;
console.log(typeof myNumber);
var afterConversion = myNumber.toString();
console.log(typeof afterConversion);
