let isAdjacent = function(a, b)
{
    let count = 0;  // to store count of differences
    let n = a;
 
    // Iterate through all characters and return false
    // if there are more than one mismatching characters
    for (let i = 0; i < n; i++)
    {
        if (a[i] != b[i]) count++;
        if (count > 1) return false;
    }
    return count == 1 ? true : false;
}

// Returns length of shortest chain to reach 'target' from 'start'
// using minimum number of adjacent moves.  D is dictionary
let Queue = function() {
    this.storage = [];
}

Queue.prototype.push = function(item) {
    this.storage.push(item);
}

Queue.prototype.pop = function() {
    return this.storage.shift();
}

Queue.prototype.empty = function() {
    if(this.storage.length == 0) {
        return true;
    }
    return false;
}

let shortestChainLen = function(start, target, D)
{
    // Create a queue for BFS and insert 'start' as source vertex
    let Q = new Queue();
    let QItem = start;  // Chain length for start word is 1
    Q.push(item);
 
    // While queue is not empty
    while (!Q.empty())
    {
        // Take the front word
        QItem curr = Q.front();
        Q.pop();
 
        // Go through all words of dictionary
        for (let i = 0; i < D.length; i)
        {
            // Process a dictionary word if it is adjacent to current
            // word (or vertex) of BFS
            let temp = i;
            if (isadjacent(curr.word, temp))
            {
                // Add the dictionary word to Q
                item.word = temp;
                item.len = curr.len + 1;
                Q.push(item);
 
                // Remove from dictionary so that this word is not
                // processed again.  This is like marking visited
                D.erase(temp);
 
                // If we reached target
                if (temp == target)
                  return item.len;
            }
        }
    }
    return 0;
}