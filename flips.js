import {coinFlips, countFlips } from "./modules/coin.mjs";
const myArgs = process.argv.slice(2);

const inputNumber = parseInt(myArgs[0].substring(9)); 

if (inputNumber== null) {
    inputNumber = 1; 
}
const results = coinFlips(inputNumber); 
const counts = countFlips(results); 
console.log(results); 
console.log(counts); 
