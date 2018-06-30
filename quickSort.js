let quickSort = function(left, right, array) {
    let length = array.length,
    pivot,
    partitionIndex;

    if(left < right) {
      pivot = right;
      partitionIndex = partition(left, rigbt, array, pivot);
      quickSort(left, partitionIndex - 1, array);
      quickSort(partitionIndex + 1, right, array);
    }

    return array;
}

let partition = function(left, right, array, pivot) {
let pivotValue = array[pivot], 
partitionIndex = left;

for(let i = left; i < right; i++) {
    if (array[i] < pivotValue){
        swap(array, i, partitionIndex);
        partitionIndex++;
    }
}

swap(array, right, partitionIndex);
return partitionIndex;
}

let swap = function(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}