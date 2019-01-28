let validPalindrome = s => {
  let left = 0,
    j = s.length - 1;
  while (left < right && s.charAt(left) == s.charAt(right)) {
    left++;
    right--;
  }

  if (left >= right) return true;

  if (isPalin(s, left + 1, right) || isPalin(s, left, right - 1)) return true;
  return false;
};

let isPalin = (s, left, right) => {
  while (left < right) {
    if (s.charAt(left) == s.charAt(right)) {
      left++;
      right--;
    } else return false;
  }
  return true;
};
