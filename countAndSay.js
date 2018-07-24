var countAndSay = function(n) {
    if (n === 1) {
        return '1';
    }
    let prev = countAndSay(n - 1);
    let result = '';
    let currentCount = 0;
    for (let i = 0; i < prev.length; i++) {
        let currentChar = prev[i];
        currentCount += 1;
        if (prev[i + 1] != currentChar) {
            result += currentCount + currentChar;
            currentCount = 0;
        }
    }
    return result;
};