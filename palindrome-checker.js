function palindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr == cleanStr.split('').reverse().join('');
}

/*

This is the most efficient solution but i did the first one from scratch!

function palindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const len = cleanStr.length;
  
  for (let i = 0; i < len / 2; i++) {
    if (cleanStr[i] !== cleanStr[len - 1 - i]) {
      return false;
    }
  }
  
  return true;
}
*/