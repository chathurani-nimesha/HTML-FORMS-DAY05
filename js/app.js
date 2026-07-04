//console.log("Hello JavaSript");
//let vari = "chathu";
//console.log(vari);
//console.log(typeof vari);
//vari= "Nimesha";
//let age=23;
//console.log(vari);
//console.log(age)
//console.log(typeof age)
//alert("Hello Chathu");

let name="Chathu"
let age=23;
let isAfterAl=true;
let customers=[]; // Array
let customer ={};  //object
let salary =7500.0;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isAfterAl);
console.log(typeof customers);
console.log(typeof customer);
console.log(typeof salary);

//=====================================
//          js oprators
//=====================================

//01. Arithmetic operators
//---------------------------

// + - * / 

let x=10;
let y=20;
let z= x+y;

console.log(z);


//02. Comparison operators(Important)
//------------------------------------

// >     <  <==   >==   !=    ==

let l=10;
let m="10";

console.log(l==m); // true

//why this is true????
// m is a string. and l is a number. JS doesnot have type safety. here,
// does not consider the value only. because the doesnot have type safety

// to check value with the type use === (triple equal)

console.log(l === m); //this only have JS interview qs.......

//03. logical operators
//-----------------------------

// &&   ,   ||    ,  !

if(true && true){
    console.log("true");
}else{
    console.log("False");
}


if (!false) {
    console.log("True");
} else {
    console.log("False");
}


//=======================================
//          if-else
//=======================================

let a=10;
let b=20;

if (a>b) {
    console.log("a is greater than b");
} else if(b>a) {
    console.log("b ia greater than a");
}else{
    console.log("a is equal to b");
}

//===============================================
//          switch statement
//===============================================

let day=2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}


// difference between if-else and switch

// switch go through the cases. 
// but if-else go through the conditions


//==========================
//          for loop
//==========================

for(let i=0;i<10;i++){
    console.log(i);
}


// let name = "Saman";

// let age = 18;

// name = "ranil";

// console.log(name);
// console.log(age);

// alert("Hello icet");


// String name = "10";

// ---------------------------------

// let name = "saman";
// let age = 18;
// let isAfterAL = false;
// let customers = [];
// let customer = {};
// let salary = 7500.0;

// console.log(typeof name);

// --------------------------------------------
//  arithmetic operators

// + | - | * | /

// let x = 10;
// let y = 20;

// let z = x / y;

// console.log(z);

// -------------------------------------------

//  comparison operators

// > | < | >= | <= | == | !=
// >== | <== | === | !==


// let x = 11;

// let y = "11";

// console.log(x===y);


// -------------------------------------------

//  logical operators

//  && | || | !

// if (!false) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// -------------------------------------------

// if else statement

// let x = 10;
// let y = 20;

// if (x > y) {
//     console.log("x is greater than y");
// } else if (x < y) {
//     console.log("x is less than y");
// } else {
//     console.log("x is equal to y");
// }

// -------------------------------------------

// switch statement

// let day = 1;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// -------------------------------------------

// for loop

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// -------------------------------------------

// while loop

// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// -------------------------------------------

// do while loop

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);


// -------------------------------------------

// function

// function add(x, y) {
//     return x + y;
// }

// let result = add(10, 20);
// console.log(result);


// public static String add(int x, int y) {
//     return x + y;
// }

// -------------------------------------------

// array

// let numbers = [1, true, 3, "saman", 5 , "ranil","sunil"];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// -------------------------------------------

// object

let customer = {
    name: "Saman",
    age: 18,
    isAfterAL: false,
    salary: 7500.0
}

console.log(customer);


