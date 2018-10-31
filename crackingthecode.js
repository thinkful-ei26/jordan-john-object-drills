
let decipher = {
    a : 2,
    b : 3,
    c : 4,
    d : 5
  };
  
  let Message = 'craft block argon meter bells brown croon droop';
  
  function decodeWord(word){
    let decipherNumber = decipher[word[0]];
    if(decipherNumber === undefined){
      return ' ';
    } else
    return word[decipherNumber - 1];
  }

  console.log(decodeWord('craft'))
  
  function decode(string){
    let crackcode = '';
    let wordArray = string.split(' ');
    for(let i = 0; i < wordArray.length; i++){
      crackcode += decodeWord(wordArray[i]);
    }
    return crackcode;
  }
  
  console.log(decode(Message));