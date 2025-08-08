//Assignment on ternaery Operator
//ternary operator is used to assign a value to a variable based on a condition
console.log("====malemarriageEligibility============");

function maleMarriageEligibility(gender,age,boyName){
    (gender="Male" && age>=21)
        ?console.log(`Hey ${boyName} you are ${age} years old eligible for marriage`)
        :  console.log(`Hey ${boyName} you are ${age} years old not eligible for marriage`);

  
      
}
//calling the function
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");


console.log("===========Female marriage Eligibility============");
function femaleMarriageEligibility(gender,age,girlName){
    if(gender="Female" && age>=18){
        console.log(`Hey ${girlName} you are ${age} eligible for marriage`);
}else{
    console.log(`Hey ${girlName} you are ${age} not eligible for marriage`);
}
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");
femaleMarriageEligibility("Female",25,"Elon Musk");