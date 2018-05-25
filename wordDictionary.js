var TrieNode = function(letter) {
    this.val = letter;
    this.children = {};
    this.completeString = false;
}

var WordDictionary = function() {
this.rootNode = new TrieNode();
};

WordDictionary.prototype.addWord = function(word) {
let node = this.rootNode;
for(let i = 0; i < word.length; i++) {
    let currentLetter = word[i];
    
    if(node.children[currentLetter]) {
    node = node.children[currentLetter];
    } else {
        let newNode = new TrieNode(currentLetter);
        node.children[currentLetter] = newNode;
        node = newNode;
    }
    node.completesString = true;
}

};


WordDictionary.prototype.search = function(word) {
let match = function(wordArray, counter, node) {
    if(counter === wordArray.length) {
        return true;
    }

    if(wordArray[counter] !== '.') {
        return match(wordArray, counter + 1, node.children[wordArray[counter]]);
    } else {
       for(let letter in node.children) {
           if(node.children[letter]) {
            if(match(wordArray, counter + 1, node.children[letter])){
                return true;
            }
           }
       }
       return false;
    }
}

};

var dict = new WordDictionary();
dict.addWord('ook');
dict.search('ook');