
//Cracking the code

let message = 'craft block argon meter bells brown croon droop'

const messagesplit = message.split (' ')

let decipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
};

for (let i = 0; i < messagesplit.length; i++){
    if (decipher[messagesplit[i]]) {
        return messagesplit[decipher[messagesplit[i]]-1];
    } else {
        return ' ';
    }
}
console.log(messagesplit[i]);

// let decode = (encodedWord) => {
//     if (decipher[encodedWord[0]]) {
//         return encodedWord[decipher[encodedWord[0]]-1];
//     } else {
//         return ' ';
//     }

// }

// should return correct decoded character

// console.log(decode('craft '));

// let decodeWords = (message) => {
//     let message2= message.split (' ');
//     return message2.reduce()
// }

