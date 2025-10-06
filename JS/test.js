    let year = 2012;
 
    // Leap years are divisible by 400 or by 4 but not 100
    if((year % 400 == 0) || ((year % 100 != 0) && (year % 4 == 0))){
        console.log(year + " is a leap year.");
    } else{
        console.log(year + " is not a leap year.");
    }