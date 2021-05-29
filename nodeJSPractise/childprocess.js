//Child Process module most imp module

let cp= require('child_process')
// console.log("opening some website");
// cp.execSync('code') cmd to open any application

// cp.execSync('start firefox https:\\www.google.com');
let greetings= cp.execSync('node xyz.js');

console.log( " Loading greets " + greetings);