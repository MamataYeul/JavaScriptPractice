console.log("======Write a function expresion with one arg age to check whether he is eligible for vote or not,Then accordingly display message============");
var isEligibleForVote=function(age){
    if (age>=18) {
        console.log(`The person having ${age} years old is eligible for vote`);
    } else {
        console.log(`The person having ${age} years old is not eligible for vote`);  
    }
}
isEligibleForVote(45);
isEligibleForVote(17);
isEligibleForVote(8);
isEligibleForVote(20);

console.log("====2.Write a function expression to check gender of the given value============");

var isGender=function(gender){
console.log(`The gender is ${gender}`);
}
isGender("Male");
isGender("Female");
isGender("Others")

console.log("====3. Write a function expression to check if number is even or odd=======");
var isEvenOrOdd=function(Number){
if (Number%2==0) {
    console.log(`The ${Number} is even`);
} else {
    console.log(`The ${Number} is odd`);   
}
}

isEvenOrOdd(60);
isEvenOrOdd(51);
isEvenOrOdd(0);
isEvenOrOdd(5);
isEvenOrOdd(40);

