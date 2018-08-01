//attempted word break challenge
let wordBreak = function(s, dict) {
        
    let f = new Array(s.length + 1);
    
    f[0] = true;
    
    for(let i = 1; i <= s.length; i++){
        for(let j=0; j < i; j++){
            if(f[j] && dict.includes(s.substring(j, i))){
                f[i] = true;
                break;
            }
        }
    }
    
    return f[s.length];
}
