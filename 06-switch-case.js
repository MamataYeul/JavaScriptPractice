
var weekDay= function(dayNum){
    switch (dayNum) {
        case 1:
            console.log(`The first day of week ${dayNum} - Monday`);
            break;
        case 2:
                console.log(`The second day of week${dayNum} - Tuesday`);
             break;
        case 3:
            console.log(`The third day of week ${dayNum} - Wednesday`);
            break;
        case 4:
                console.log(`The fourth day of week ${dayNum} - Thursday`); 
            break;  
        case 5:
            console.log(`The fifth day of week ${dayNum} - Friday`);
            break;
        case 6:
                console.log(`The end of working day ${dayNum} - Saturday`);
            break;
        case 7:
            console.log(`The holiday of week: ${dayNum} -Sunday`);
            break;
        case 8:
                console.log(`Invalid day of week ${dayNum}`);
            break;
        case 9:
                console.log(`Invalid day of week ${dayNum}`);
            break;
        default:
            console.log(`Invalid day of week ${dayNum}`);
             
    }
    }
weekDay(1);
weekDay(2);
weekDay(3);
weekDay(4);
weekDay(5);
weekDay(6);
weekDay(7);
weekDay(8);
weekDay(9);
