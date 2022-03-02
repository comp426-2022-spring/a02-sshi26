import {coinFlips, countFlips } from "./modules/coin.mjs";
const myArgs = process.argv.slice(2);

let inputNumber; 

console.log(myArgs)
console.log(process.argv)
inputNumber = myArgs.length != 0 ? parseInt(myArgs[0].substring(9)) : 1;


const results = coinFlips(inputNumber); 
const counts = countFlips(results); 
console.log(results); 
console.log(counts); 