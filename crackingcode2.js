'use strict';

// Redo your Cracking the Code problem from String Drills but this time use an object as your cipher. 

let decipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
};
// Additionally, create a decodeWords function that 
// utilizes your decode function to accept a single string of words, 
// and then return the fully decoded message as a string.
function decode(str){
    let stringArray = str.split(' ');
     let resultStr = '';
 
     for (let i = 0; i < stringArray.length; i++) {
         if (decipher.a === stringArray[i][-1]) {
             resultStr += decipher[i][a];
         } else {
             resultStr += ' ';
         }
         return resultStr;
     }
    }

    let testString = 'craft block argon meter bells brown croon droop'

function decodeWords() {
    return decode(testString)
    }

console.log(decodeWords)