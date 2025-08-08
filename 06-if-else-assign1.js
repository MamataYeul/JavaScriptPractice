//If else statement

console.log("======1.Check the number is Even or Odd====");


var FE=function(val1){
    if (val1%2==0) {
        console.log(`The ${val1} is EVEN`);
    } else {
        console.log(`The ${val1} is ODD`);   
    }
}
FE(45);
FE(70);
FE(67);
FE(98);

console.log("====2. Check if person is eligible for vote ===========");

var IsPersonEligibleVote=function (age) {
    if (age>=18) {
        console.log(`The person having ${age} years old is eligible for vote`);
    } else {
        console.log(`The person having ${age} years old is not eligible for vote`); 
    }    
}
IsPersonEligibleVote(18);
IsPersonEligibleVote(20);
IsPersonEligibleVote(17);
IsPersonEligibleVote(40);

console.log("=========3. Check if string contains more than 10 character or not Ex ->'Javascript- ES6'  ");

var isCharMorethanTen=function(str){
    var stringCharLength= str.length;
    console.log(`The string character length is: ${stringCharLength}`);
    
    if (str.length>=10) {
        console.log(`The string character length is more than 10`);
        
    } else {
        console.log(`The string character length is not more than 10`);
    }
}
isCharMorethanTen("JavaScript -ES6");

console.log("=====4. check if string start with 'Java'    ========================   ");

var isStringStartWithJava= function(string){
    var strLength=string.length;
    console.log("The total number of character present in the given string:",strLength);
    var stringChar=string.slice(0,20);
    console.log("The given string:",stringChar);
    if (string.length==19) {
        console.log(`The ${string} starts with the word Java`);
        console.log("---------------------------");
        
    } else {
          console.log(`The ${string} not starts with the word Java`);
    }
}
isStringStartWithJava("Javascript Language");
isStringStartWithJava("Programming Language");

