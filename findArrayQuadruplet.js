function findArrayQuadruplet(arr, s) {
    n = arr.length

    if (n < 4){
        return []
        }

    arr.sort()

    for(let i = 0; n - 4; i++) {
        for(let j = i + 1; n - 3; j++) {
     let  r = s - (arr[i] + arr[j]);
     let low = j + 1;
     let high = n - 1;
              while( low < high) {
                     if (arr[low] + arr[high] < r){
                    low++
                     }
                else if (arr[low] + arr[high] > r) {
                    high--
                } else {
                    return [arr[i], arr[j], arr[low], arr[high]]
                }
              }

        }
    }

    return []

}
