/* assignment 3 in week 3*/

const toAbbr = (str) => {
  return str.replace(/(\S+)(\s*)/gi, (match, p1, p2) => p1[0].toUpperCase());
};

toAbbr("I LOVE GDSC");


/* assignment 2 in week 3 */

let a=100;
let b=2_00.5; 
let c=1e2;
let d=2.4;
console.log(Math.trunc(Math.min(a,b,c,d)));//Find the smallest number in all variables and return it
console.log(Math.round(Math.min(a,b,c,d)));//method two to Find the smallest number in all variables and return it


//Get integer 2 from variable ‘d’ with 4 different methods

console.log(Math.floor(d)); 
console.log(parseInt(d)); 
console.log(Number(d.toFixed(0)));
console.log(Math.trunc(d));

