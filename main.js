const num = 3;
if(num % 3 == 0)
    console.log('Fizz'); 
if(num % 5 == 0)
    console.log('Buzz'); 
if(num % 3 == 0 && num % 5 == 0)
    console.log('FizzBuzz'); 

const year = 2024;
if(year%4==0 && (year%100!==0 || year%400==0))
    console.log('leap year'); 
else
    console.log('not leap year'); 

const yourYear = 42;
console.log(yourYear); 
if(yourYear < 2)
    console.log('рік'); 
if(yourYear > 2 && yourYear < 41)
    console.log('років'); 
if(yourYear > 41)
    console.log('роки');