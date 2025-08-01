var string= "   Hey you are doing good, keep it up  ";

function stringHandsOn(){
    console.warn("---1.Print the string as it is on console---");
    
    console.log(`1.The given string is: ${string}`);
    console.log(`2.The length of given string is:${string.length}`);
    console.warn("---2.Calculate length of string---");

    var BeforeTrim= string;
    console.log(`The given string before trim is: ${BeforeTrim}`);
    console.warn("---3. Remove the leading and trailing extra spaces and log string on console with it's length---");
    
    var AfterTrim= string.trim();
    console.log(`The given string after trim is:${AfterTrim}`);  
    console.log(`3. The length of given string AfterTrim is: ${AfterTrim.length}`);
    var newString= AfterTrim;
    console.log(`The new string is:`);
    console.warn("-----4. Print the first and last character after trim-------------");
    var charAtfirst= newString.charAt(0);
    console.log(`The character at the first position is:${charAtfirst}`);
    var charAtlast= newString.charAt(34-1)
    console.log(`The character at the last position is:${charAtlast}`);


    console.warn("----5.Print the count of total words available in the string after step 3-----");
    console.log(`The total words avilable in the new string is:${newString.length}`);
    
    console.warn(`---6.Print the index of word "good" from the given newString----`);
    console.log(`The index of word "Good" from new string is: ${newString.indexOf("good")}`);
    

    console.warn(`---7.Print the substring starting from index22 using substring()----`);
    console.log(`The substring start at index22 is:${newString.slice(22)}`);
    
    console.warn(`----check, is string ends with word "up" after step 3----`);
    console.log(`Is string ends with word "up" ${newString.includes("up")}`);
    
    console.warn(`---9.Check is string starts with word "Hey" after trimming-> i.e after step3 output string values -----`);
    console.log(`Is string start with word "Hey" ${newString.includes("Hey")}`);

}
stringHandsOn();




// console.log("count of total words available in the string: ",txt.length);
// console.log("Index of word good is:", txt.indexOf("good"));
// console.log("substring starting from index 22", txt.slice(22));
// console.log("Is string ends with word up:",txt.includes("up"));
// console.log("Is the string start word is Hey:",txt.includes("Hey"));