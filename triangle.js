let minimumTotal = function(triangle) {
    let n = triangle.length;
    let minlen = triangle[n - 1];
    for (let layer = n-2; layer >= 0; layer--) // For each layer
    {
        for (let i = 0; i <= layer; i++) // Check its every 'node'
        {
            // Find the lesser of its two children, and sum the current value in the triangle with it.
            
            //for each element, you're choosing the least value so it keeps swapping 
            //(by overwriting minlen[i])
            //and that is why you only need to return the first element.
            //since your constraint is that you could only pick adjacent elements
            //it would make sense to iterate from left to right after picking the lesser 
            //element and adding each layer to the lesser element.
            minlen[i] = Math.min(minlen[i], minlen[i+1]) + triangle[layer][i]; 
        }
    }
    return minlen[0];
}