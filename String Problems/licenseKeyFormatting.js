let licenseKeyFormatting = function (S, K) {
  let newString = '';
  const cleanedOriginalString = S.replace(/-/g, '');

  for (let i = cleanedOriginalString.length - 1; i >= 0; i--) {
    newString = `${cleanedOriginalString[i]}${newString}`;
    if ((cleanedOriginalString.length - i) % K === 0 && i > 0) {
      newString = `-${newString}`;
    }
  }

  return newString.toUpperCase();
};
