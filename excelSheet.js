var convertToTitle = function(n) {
    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        
    if(n > 26) {
        let factor;
        let firstLetter = alph[Math.floor(n/26) - 1];
        let secondLetter = alph[(n % 26 ) - 1];
        
        if(n%26 == 0) {
            factor = n/26;
            firstLetter = alph[factor - 2];
            secondLetter = alph[Math.floor(n/factor) - 1];
        }
        
        return firstLetter + secondLetter;
    } else {
        return alph[n - 1];
    }
          
    };