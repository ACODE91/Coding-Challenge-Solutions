var phonePad = {
    1: '',
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j','k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],    
};

var Queue = function() {
    this.storage = [];
}

Queue.prototype.enqueue = function(val) {
    this.storage.push(val);
}

Queue.prototype.dequeue = function() {
   return this.storage.shift();
}

Queue.prototype.length = function() {
    return this.storage.length;
}

var letterCombinations = function (digits) {
var index = 0;
var results = [];
var nextCombination = index + 1;

if(nextCombination >= digits.length) {
    return results;
}

while(index < digits.length - 1) {
 
 let currentDigitArray = phonePad[digits[index]];
var queue = new Queue();

for(let i = 0; i < currentDigitArray.length; i++) {
queue.enqueue(currentDigitArray[i]);
}

while(queue.length() > 0) {
let currentLetter = queue.dequeue();

for(i = 0; i < phonePad[digits[nextCombination]].length; i++) {
results.push(currentLetter + phonePad[digits[nextCombination]][i]);
}
}
    nextCombination++;
    index++;
}
return results
}

letterCombinations('23');