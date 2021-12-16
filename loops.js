//Use a for loop to log numbers from 1-10, then another for loop to count down logging
// numbers from 10-1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i >= 1; i--){
    console.log(i);
}

//Repeat the exercise with a while loop

var i = 1;
while (i < 10) {
    i++;
    console.log(i);

}

var i = 11;
while(i >= 2 ){
    i--;
    console.log(i);
}
// Repeat with do while
var i = 1;
do {
    i++;
    console.log(i);
}
while(i < 10);

var i = 11;
do {
    i--;
    console.log(i);
}
while ( i > 1 );

//create this array:const numbers = [1,2,3,4,5,6,7,8,9,10] Use a for..of to loop through this array
// and log all the numbers. (Note: we're not asking you to also count down on this one.)

const numbers = ["1,2,3,4,5,6,7,8,9,10"];

for ( const digit of digits) {
    console.log(digits);
}