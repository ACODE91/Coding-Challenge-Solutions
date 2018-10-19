let quickSort = function(left, right, array) {
	let length = array.length,
		pivot,
		partitionIndex;

	if(left < right) {
		pivot = right;
		partitionIndex = partition(left, right, array, pivot);
        
		quickSort(left, partitionIndex - 1, array);
		quickSort(partitionIndex + 1, right, array);
	}

	return array;
};

let partition = function(left, right, array, pivot) {
	let pivotValue = array[pivot], 
		partitionIndex = left;
	//the point of partition is index is so that we can keep track of
	//elements with greater value than array[i] as you are traversing
	//when you encounter an element with a greater value, it skips 
	//because you don't want the partition index to leave the 
	//potential greater element so you can swap when you find a lesser element
	for(let i = left; i < right; i++) {
		if (array[i] < pivotValue){
			//if there are no greater values than pivotValue in the array
			//array elements will just swap with itself as partition index increments
			swap(array, i, partitionIndex);
			partitionIndex++;
		}
	}
	//after looping potentially your partition index is located at the last greatest
    //element at the second last item position in the array.
    //your right indexed element may be less than partition indexed element,
    //so we want to swap those. ie [90, 80]
	swap(array, right, partitionIndex);

	return partitionIndex;
};

let swap = function(arr, i, j) {
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
};