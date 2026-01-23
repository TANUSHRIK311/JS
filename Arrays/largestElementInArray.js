function largestElementInArray(arr) {   
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
   
console.log(largestElementInArray([3, 5, 7, 2, 8])); // Output: 8
    
//--------------------------------------------------------------------


