let binarySearch = function(array, x) {
    let left = 0;
    let right = array.length - 1;

    while(left <= right) {
        let mid = left + ((right - left) / 2);
        if (array[mid] == x) {
            return true;
        } else if (x < array[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}