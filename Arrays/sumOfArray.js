function sumOfArray(arr) {
    if (arr.length === 0) {
        return 0; // Return 0 for empty array
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }   
    return sum;
}
console.log(sumOfArray([3, 5, 7, 2, 8])); // Output: 25

//--------------------------------------------------------------------