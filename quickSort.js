let quickSort = function(low, high, array) {
    if(low < high) {
      let j = partition(low, high, array);
    }
    quickSort(low, j, array);
    quickSort(j + 1, high, array);
}

let partition = function(low, high, array) {
    let pivot = array[low];
    let i = low;
    let j = high;
    
    while(array[i] <= pivot) {
        i++;
    }
    
    while(array[j] > pivot) {
        j--;
    }

    if(i < j) {
        swap(array[i], array[j]);
    }

    return j;
}

let swap = function(a, b) {
    let tmp = a;
    a = b;
    b = tmp;
}