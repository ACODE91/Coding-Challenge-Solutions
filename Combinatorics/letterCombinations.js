const result = [];

const numberPad = {
  2: 'abc',
  3: 'def',
  4: 'ghl',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

const backtrack = function (combo, current_digit, digits, current_index) {
  for (let i = 0; i < current_digit.length; i++) {
    if (digits[current_index + 1]) {
      backtrack(combo + current_digit[i], numberPad[digits[current_index + 1]], digits, current_index + 1);
    } else {
      result.push(combo + current_digit[i]);
    }
  }
};

const letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }

  backtrack('', numberPad[digits[0]], digits, 0);
  return result;
};
