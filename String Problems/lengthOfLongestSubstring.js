var lengthOfLongestSubstring = function(s) {
  let result = 0,
    left = 0,
    right = 0,
    n = s.length,
    store = {};

  while (left < n && right < n) {
    if (!store[s[right]]) {
      store[s[right++]] = 1;
      result = Math.max(result, right - left);
    } else {
      delete store[s[left++]];
    }
  }

  return result;
};
