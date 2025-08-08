console.log("===========1.Find the greatest number amongst two number=============");

var greatestNumber=function (n1,n2){
    var result= n1>n2? n1:n2;
    console.log(`The gratest number amongst ${n1} and ${n2} is: ${result}`);
    
}
greatestNumber(10,-10);
greatestNumber(800,899);

console.log("=====2.Check the number is even or odd===========");

const isEvenOrOddNumber = function(number) {
  var res= number % 2 == 0 ? "Even":" Odd";
  console.log(` ${number} is :${res}`);
  
}

// Example usage:
isEvenOrOddNumber(29);  // false
isEvenOrOddNumber(44);  // true
isEvenOrOddNumber(0);   // true
isEvenOrOddNumber(101); // false

console.log("=========3. Check which word has even or odd length=============");

// Check if the length is divisible by 2
    const checkWordLength = function(word) {
  var result= word.length % 2 == 0? "Even" : "Odd" ;
  console.log(`The word ${word} char word length is: ${result}`);
}
checkWordLength("JavaScript"); // Output: EVEN
checkWordLength("developer");  // Output: ODD
checkWordLength("Google");     // Output: EVEN


