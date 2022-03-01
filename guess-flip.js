import {flipACoin, countFlips } from "./modules/coin.mjs";
const myArgs = process.argv.slice(2);

const inputString = myArgs[0].substring(7); 

if (inputString != "heads" && inputString != 'tails') {
    console.log("Error: no input."); 
    console.log("Usage: node guess-flip --call=[heads|tails]");
    process.exit();
}

const results = flipACoin(inputString); 
console.log(results); 