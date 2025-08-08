console.log("======1. WAP to print numbers from 5 to 15 by incrementing 1=====");
for (let index = 5; index<=15; index++) {
    console.log(index); 
}
console.log("------------------------------------------------------------");
console.log("===2. WAP to print numbers from 50 to 40 decrementing by 1====");
for (let index = 50; index >=40; index--) {
    console.log(index); 
}
console.log("------------------------------------------------------------");
console.log("===3.WAP to find first 15 odd numbers===");
for (let index = 1; index <=30; index++) {
    if (index % 2 != 0) {
    console.log(index);  
    
}
}
console.log("======4.WAP to find first 10 even numbers====");
console.log("------------------------------------------------------------");
for (let index = 2; index <=20; index++) {
if (index % 2 == 0)
    console.log(index);    
}
console.log("------------------------------------------------------------");
console.log("====5. WAP to print table of 5 like->5 10 15 20 25 ...50=======");
//Other way to print table of 5
let output5 = "";
for (let i = 5; i <= 50; i += 5) {
  output5 += i + " ";
}
console.log(output5.trim()); // .trim() removes the trailing space
console.log("------------------------------------------------------------");
console.log("====6.WAP to print table of 10 like 10 20 30 40 50 ...100=====");
let output = "";
for (let index = 10; index<=100; index+=10) {
      output += index + " ";
}
console.log(output.trim());

console.log("------------------------------------------------------------");

console.log("=====7.WAP to print table of 10 in reverse order loke -> 100 90 80 70 ...10=====")

let output11 ="";
for (let index =100; index >= 10; index-=10) {
    output11+=index+" ";
    
}
console.log(output11.trim());

console.log("------------------------------------------------------------------------------------------");

// let output1 = ""; // Initialize an empty string to store the numbers

// for (let i = 100; i >= 10; i -= 10) {
//   output1 += i + " "; // Add the current number and a space to the string
// }

// console.log(output1.trim()); // Print the string, removing any trailing space