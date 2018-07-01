function miniMaxSum(arr) {
    var total=arr[0], min=arr[0], max=arr[0];

    for (let i=1; i<arr.length; i++) {
        total = total+arr[i];
        if (min>arr[i]) {
            min=arr[i];
        }

        if (max<arr[i]) {
            max=arr[i];
        }
    }
    
    console.log(total-max, total-min);
}