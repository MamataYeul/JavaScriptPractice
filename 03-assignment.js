console.log("1.Check out few interesting fact and log result on console with reason:");
 console.log(0 == '');
 console.log(0 == '0');
 console.log(0 == false);
 console.log(null==undefined);
 console.log(1==[1]);
 console.log(1==true);
 console.log(1=='1');

 console.log('Using ternary operator, Find the greatest number amongst three numbers:');
 var greatestNumber= function(a,b,c){
    (a>b)?a:b;
    console.log(`${a} is greater than ${b}`);
    (b>c)?b:c;
    console.log(`${b} is grater than ${c}`);  
 }
 greatestNumber(100,101,99)
 
 
 
 
 
 