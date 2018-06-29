let quickSort = function(low, high, array) {
    let length = array.length,
    pivot,
    partitionIndex;

    if(low < high) {
      pivot = high;
      partitionIndex = partition(low, high, array, pivot);
      quickSort(low, partitionIndex - 1, array);
      quickSort(partitionIndex + 1, high, array);
    }

    return array;
}

let partition = function(low, high, array, pivot) {
let pivotValue = array[pivot], 
partitionIndex = low;

for(let i = low; i < high; i++) {
    if (array[i] < pivotValue){
        swap(array, i, partitionIndex);
        partitionIndex++;
    }
}

swap(array, high, partitionIndex);
return partitionIndex;
}

let swap = function(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}