//attempted word break challenge
let wordBreak = function(s, wordDict) {
    let wordDictSet= {};

    for(let i = 0; i < wordDict.length; i++) {
        wordDictSet[wordDict[i]] = wordDict[i];
    }

    let dp = new Array(s.length + 1)
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDictSet[s.substring(j, i)]) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
}
