var plusOne = function(digits) {
    let carry = 0;
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    if(digits[digits.length - 1] > 9) {
    carry = 1;
    digits[digits.length - 1] = 0;
    } else {
      return digits;
    }

    let i = digits.length - 2;
    while(carry !== 0 && i > -1) {
        if(digits[i] + carry == 10) {
            carry = 1;
            digits[i] = 0;
        } else {
            digits[i] = digits[i] + carry;
            carry--;
        }
        i--;
    }

    if(carry > 0) {
        return [1].concat(digits);
    }

    return digits;
};