
// HOISTING TOPIC START'S
// console.log(a);

// console.log(b);
// console.log(c);
// console.log(x);

var a=10;
let b="abcd";
const c=50;


function speed(){ //GNERIC FUNCTION OR GENERAL FUNCTON DECLERATION & YOU CAN USE HOISTING

    a = "pavan";//WE CAN RE-INSTALIZE THE VAR YOU CAN USE HOISTING
    b = 100; //WE CAN RE-INSTALIZE THE LET BUT YOU SHOULD KEEP HOISTING IN THE MIND.
    c = "prasanna"; //WE CAN'T RE-INSTIALIZE THE CONST.
    console.log(a);
    console.log(b);
    console.log(c);
}

// console.log(a);
// console.log(b);

speed();

console.log(c);

