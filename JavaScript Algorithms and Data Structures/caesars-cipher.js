function rot13(str) {
  const arrStr = str.split("");
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let result = [];

  for (let i = 0; i < arrStr.length; i++) {
    let convertedIndex = alphabet.indexOf(arrStr[i]);

    if (convertedIndex !== -1) {
      convertedIndex = (convertedIndex + 13) % 26;
      result.push(alphabet[convertedIndex]);
    } else {
      result.push(arrStr[i]);
    }
  }

  return result.join('');
}

console.log(rot13("SERR PBQR PNZC"));

/*
My first solution:

function rot13(str) {
  const arrStr = str.split("");
  const alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O","P", "Q", "R", "S", "T", "U","V", "W", "X", "Y", "Z"
  ]
  let result = [];
  let convertedIndex = 0;

  for (let i = 0; i < arrStr.length; i++){
    
  for(let j = 0; j <= 13; j++){
        convertedIndex = alphabet.indexOf(arrStr[i]) - j;

  }
  if(convertedIndex < 0 && convertedIndex != -14){
    convertedIndex += 26;
  }
    if(alphabet.includes(arrStr[i])){

     result.push(alphabet[convertedIndex])
    }
    else if(alphabet[convertedIndex] == undefined){
      result.push(str[i])
    }
  }

  return result.join('');
}

*/