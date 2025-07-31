console.log("functions with no arguments and no return value");
function name1() {
    console.log("My FullName is :",FullName); 
}
let FullName ="Mamata Vinayak Yeul";
name1();
console.log("____________________");

function name2() {
    console.log("My Father name is:",FatherName); 
}
let FatherName="Vinayak Kashiramji Yeul";
name2();
console.log("____________________");
function name3() {
    console.log("My Mother name is:",MotherName);
}
let MotherName="Rajkanya Vinayak Yeul";
name3();
console.log("____________________");
console.log("Function with arguments and no return value")
function FullName1(firstname,lastname) {
    console.log(firstname,lastname);
}
FullName1("Mamata","Yeul");

function FullName2(firstname1,lastname1) {
    console.log(firstname1,lastname1);
}
FullName2("Rajkanya","Yeul");

console.log("Swaping Two Variables");
function swap_values(arg1,arg2) {
    console.log("Before swap");
    console.log(arg1,arg2);
    console.log("After swap");
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1,arg2); 
}
swap_values("Virat","Anushka");
swap_values(1000,2000);
swap_values(100,200);
console.log("--------------------------------------------------");
function add_three_numbers(arg1,arg2,arg3){
    var arg1; var arg2; var arg3;
    console.log(arg1+arg2+arg3);
}
add_three_numbers(10.23,600,40);
add_three_numbers("Hello","Good","Morning");

