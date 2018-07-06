//brute force
let knapSackProblem = function(array, max) {
    let totalWeight = 0, index = 0, totalValue = 0, knapSack = [];
    
    array.sort((a, b) => {
        return b.value - a.value;
    });
    //debugger;
    for(let i = 0; i < array.length; i++) {
        if(totalWeight + array[i].weight < max) {
            knapSack.push(array[i]);
            index++;
            totalValue += array[i].value;
        } else {
          break;
        } 
    }

    while(index !== array.length - 1) {
        for(let i = array.length - 1; i >= index; i--) {
            if(totalWeight + array[i].weight < max) {
                knapSack.push(array[i]);
            }

            if(
            array[i].value > knapSack[knapSack.length - 1] &&
            array[i] > knapSack[knapSack.length - 1] && 
            totalWeight - knapSack[knapSack.length - 1].weight + array[i].weight < max) {
                totalValue = totalValue - knapSack[knapSack.length - 1].value + array[i].value;
                knapSack[knapSack.length - 1] = array[i];
            }

            index++;
        }
    }
    return totalValue;
}

knapSackProblem([{weight: 1, value: 5}, {weight: 2, value: 3}, 
{weight: 4, value: 5}, {weight: 2, value: 3}, {weight: 5, value: 2}], 10)