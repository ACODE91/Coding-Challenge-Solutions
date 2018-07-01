function timeConversion(s) {
    /*
     * Write your code here.
     */
     
    s = s.split('');
     
    let timeOfDay = s[s.length - 2];
    let hour = s[0] + s[1];
    
    if(timeOfDay === 'A') {
        if(parseInt(hour) + 12 == 24) {
            s[0] = '0';
            s[1] = '0';
        }
    }

    if(timeOfDay === 'P') {
        if(parseInt(hour) + 12 < 24) {
            s[0] = (parseInt(s[0]) + 1).toString(); 
            s[1] = (parseInt(s[1]) + 2).toString();   
        } 
    }
    
    for(let i = s.length - 1; i >= s.length - 2; i--) {
        s[i] = '';
    }

    s = s.join('');
    return s;
}