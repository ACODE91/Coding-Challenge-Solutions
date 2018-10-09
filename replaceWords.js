//naive solution in runtime of 1112 ms
let replaceWords = function(dict, sentence) {
    let result = "";
    sentence = sentence.split(' ');
    dictObj = {};

    for(let i = 0; i < dict.length; i++) {
        dictObj[dict[i]] = 1;
    }

    for(let i = 0; i < sentence.length; i++) {
        let index = 0;
        let curr = "";
        while(curr.length < sentence[i].length) {
            curr+= sentence[i][index];
            if(dictObj[curr]) {
                break;
            }
            index++;
        }

        if(i == sentence.length - 1) {
            result += curr
        } else {
                 result += curr + ' ';   
        }
    }

    return result;
}
