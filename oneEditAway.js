let oneEditAway = function(first, second) {
//if it's more than one it should automatically be false
    if (Math.abs(first.length - second.length) > 1) {
        return false;
    }
    //the least length goes first
    let s1 = first.length < second.length ? first : second;
    let s2 = first.length < second.length ? second: first;

    let index1 = 0;
    let index2 = 0;

    let foundDifference = false;

    while (index2 < s2.length && index1 < s1.length) {
        //has two pointers to keep track of the position of each string
        if (s1.charAt(index1) !== s2.charAt(index2)) {
            //if found difference a second time it's false;
            if(foundDifference) return false;
            foundDifference = true;
            if (s1.length == s2.length) {
            index1++;
        }
        } else {
            index1++;
        }
    index2++;
    }
    return true;
}
