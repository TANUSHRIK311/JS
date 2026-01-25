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

function sumUsingReduce(arr) {
    if (arr.length === 0) {
        return 0; // Return 0 for empty array
    }
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(sumUsingReduce([3, 5, 7, 2, 8])); // Output: 25

//--------------------------------------------------------------------

function sumUsingWhileLoop(arr) {
    if (arr.length === 0) {
        return 0; // Return 0 for empty array
    }
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}
console.log(sumUsingWhileLoop([3, 5, 7, 2, 8])); // Output: 25

//--------------------------------------------------------------------