// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

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

let LinkedList = function() {
    this.head = null;
    this.tail = null;
}

let Node = function(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) {
        this.head.prev = newNode
    } else {
        this.tail = newNode;
        this.head = newNode;
    }
}

LinkedList.prototype.addToTail = function(value) {
    const newNode = new Node(value, null, this);
    if(this.tail) {
        this.tail.next = newNode;
    } else {
        this.head = newNode;
        this.tail = newNode;
    }
}

let letterCombinatinons = function (digits) {
let ans = new LinkedList();

for(let i = 0; i < digits.length; i++) {
    
}
    
}