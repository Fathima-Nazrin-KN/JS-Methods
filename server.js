//Strings

let str = 'my name fathima nazrin';
console.log(str.length);
console.log(str[1]);

//string methods

//--slice

let str1="My name is fathima nazrin";

let res = str.slice(6);
console.log(res);
console.log(str1);

//--substring
let str2="My name is fathima nazrin";

let res1 = str.substring(6,11);
console.log(res1);
console.log(str2);

//--replace
let str3="My name is fathima nazrin";

let res2 = str.replace(/My name/g,'Iam');
console.log(res2);
console.log(str3);

//--replaceAll
let str4="My name is fathima nazrin and name and name";

let res4 = str4.replaceAll(/name/gi,'Iam');
console.log(res4);
console.log(str4);

//--toUpperCase
let str5="My name is fathima nazrin";

let res5 = str.toUpperCase();
console.log(res5);
console.log(str5);

// --toLOwerCase
let str6="MY NAME IS FATHIMA NAZRIN";

let res6 = str6.slice();
console.log(res6);
console.log(str6);


// --Concat
//*to add 2 strings
let str7="My name is fathima nazrin";
let strn="apple,orange,grapes"

let res7=str7+strn;
// let res = str7.concat(' ',strn);
console.log(res7);
console.log(str7);

//--trim
//*to remove space
let str8="My name is fathima nazrin";

let res8 = str.trim();
console.log(res8);
console.log(str8);

// --padEnd
//--padStart
let string="4";
let str0="apple,orange,grapes"


let res0 = string.padEnd(6,'0');
console.log(res0);
console.log(string);

//--charAt,charCodeAt
let string1="My name is fathima nazrin";


let result = string1.charCodeAt(1);
console.log(result);
console.log(string1);

//--split
let string2="My name is fathima nazrin";


let res9 = string2.split(',');
console.log(res9);
console.log(string2)



// //Assignment
// //Dynamically accept your name as input and convert it to upper case
// const input = require("readline-sync");
// let name = input.question("Enter your name");
// let res = name.toUpperCase();
// console.log(res);
// // Dynamically accept your name as input and convert it to lower case
// const input = require("readline-sync");
// let name1 = input.question("Enter your name");
// let res1 = name1.toLowercase();
// console.log(res1);
// // Print how many times each repeating each character in this string
// var text = "ABCDAAB"; 
// var repeatedchar = {};
// var repeatedchar = text.split('').forEach((text)=>{
//   repeatedchar[text] = repeatedchar[text] ? repeatedchar[text] +1 : 1;
// });
// console.log(repeatedchar);


// let str="My name is fathima nazrin is fathima";


// let res = str.lastIndexOf("fathima");
// let res = str.search("fathima");
// let res = str.match("fathima");
// let res = str.matchAll("fathima");
// for(let co of res) console.log(res);
// let res = str.includes("fathima");
// let res = str.startsWith("fathima");
// let res = str.endsWith("fathima");
// console.log(res);