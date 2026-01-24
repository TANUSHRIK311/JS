function smallestElementInArray(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }   
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {  
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
 console.log(smallestElementInArray([3, 5, 7, 2, 8])); // Output: 2

 //--------------------------------------------------------------------

 function smallestElementUsingMathMin(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    return Math.min(...arr);
}
console.log(smallestElementUsingMathMin([3, 5, 7, 2, 8])); // Output: 2

//--------------------------------------------------------------------