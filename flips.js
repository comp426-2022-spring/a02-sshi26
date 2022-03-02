import {coinFlips, countFlips } from "./modules/coin.mjs";
const myArgs = process.argv.slice(2);

let inputNumber; 

console.log(myArgs)
console.log(process.argv)
inputNumber = (myArgs.length == 0 || myArgs[0].length <= 9) ? 1 : parseInt(myArgs[0].substring(9));


const results = coinFlips(inputNumber); 
const counts = countFlips(results); 
console.log(results); 
console.log(counts); 