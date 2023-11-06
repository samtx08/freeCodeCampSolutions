function convertToRoman(num) {
  const romans = [
    ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['','X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['','C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['','M', 'MM', 'MMM']
  ];

  let digits = num.toString().split('');
  let result = '';

  for (let i = 0; i < digits.length; i++) {
    result += romans[digits.length - 1 - i][parseInt(digits[i])];
  }
  
  return result;
}

