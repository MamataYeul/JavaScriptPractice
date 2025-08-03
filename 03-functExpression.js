//function without argument and without return value
//anonymous function is stored in a variable called as function expression
var show=function(){

}
show();//Invokes the function

//function with argument without return value

var square=function(num){
    console.log("The square of 5 is ",num*num);  
}
square(5);
console.warn("--WFE to get sqaure of the number Ex-> 5,6 ,25,100,67,89,59");

var square1= function(num){
    console.log(`The square of 6 is:${num*num}`);
    
}
square1(6);

var square= function(arg){
    console.log(`The saure of 25 is:${arg*arg}`);
    
}
square(25);

var square= function(a){
    console.log(`The suare of 100 is:${a*a}`)
}
square(100);

var square= function(val){
    console.log(`The square of 67 is:${val*val}`);
    
}
square(67);

var square=function(arg){
    console.log(`The square of 89 is:${arg*arg}`);
    
}
square(89);

var square = function(arg){
    console.log(`The square of 59 is:${arg*arg}`);
    
}
square(59);


//function with argument and return value

var cube=function(num){
    console.log("The cube of num= 3:",num*num*num);
}
cube(3);
//
var cube= function(num){
    return num*num*num;
    
}
console.log(cube(5));
console.log("----3 Write a function expression to get the area of rectangle -----");

var areaOfRectangle= function(length,width){
    console.log("The area of rectanle is = ",length* width);
}
areaOfRectangle(499,917);

console.log("---4.Write a FE with two args and should swap the passed values and log on console before swap and after swap inside function itself");
var swap_values= function(val1,val2){
   console.log("Values before swap:",val1,val2);
   var temp= val1;
   var val1=val2;
   var val2=temp;
   console.log("Values after swap:",val1,val2);  
}

swap_values("Mahi","Raina"); // Invoke or call the function
swap_values(55,77);  //Invoke or call the function

console.log("---5.Write a function expression which can perform the below steps for below given string---");
console.log(`JS the most popular language of internet`);

var FE=function(){
    var string="JS the most popular language of internet"
    console.log("A. Find the total character available in the string",string.length);

    console.log("B.Find the character at index 6 is:",string.charAt(6));
   
    console.log("C.Find the character at index 11 is:",string.charAt(11));
    // var lastCharacter=string.length-1;
    console.log("D. Find the last character using length property",string.charAt(40-1));

    console.log("E. Find the very first character from the given string",string.charAt(0));

    console.log("F. Find the third last character from the given string",string.charAt(37));
    var wordArray= string.split(" ");
    console.log("G. Split the string into words",wordArray);
    var wordCount= wordArray.length;
    console.log("G. Find the total number words of the given string and then calculate the square of it and log it");
    console.log(wordCount);
    console.log("H.The square of the given string words:",wordCount*wordCount);
}
FE();
















