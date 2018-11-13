//brute force
var numMatchingSubseq = function(S, words) {

    if(words.length < 1) {
        return 0;
    }
      
    let store = {}, sPointer = 0, count = 0, n = S.length - 1;
      
    for(const word of words) {
        if(store[word]) {
            sPointer = store[word];
        }
        
        if(sPointer == n) {
            count++;
            continue;
        }
        
        let letter = store[word] || 0, leng = word.length - 1;
        //check if letters match up
        while(letter < leng && sPointer < n) {
            if(word[letter] == S[sPointer]) {
                letter++;
            } 
            sPointer++; 
        }
        //found subsequence
        if(letter == leng) {
            store[word] = sPointer + 1;
            count++;
        }
        sPointer = 0;
    }
      
      return count;
  };