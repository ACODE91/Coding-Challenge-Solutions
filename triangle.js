let minimumTotal = function(triangle) {
    let n = triangle.length;
    let minlen = triangle[n - 1];
    for (let layer = n-2; layer >= 0; layer--) // For each layer
    {
        for (let i = 0; i <= layer; i++) // Check its every 'node'
        {
            // Find the lesser of its two children, and sum the current value in the triangle with it.
            minlen[i] = Math.min(minlen[i], minlen[i+1]) + triangle[layer][i]; 
        }
    }
    return minlen[0];
}