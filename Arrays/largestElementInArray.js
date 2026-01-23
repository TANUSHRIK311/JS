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

function largestElementUsingMathMax(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    return Math.max(...arr);
}
console.log(largestElementUsingMathMax([3, 5, 7, 2, 8])); // Output: 8

//--------------------------------------------------------------------

function largestElementUsingReduce(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}
console.log(largestElementUsingReduce([3, 5, 7, 2, 8])); // Output: 8

//--------------------------------------------------------------------

function largestElementUsingSort(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }   
    const sortedArr = arr.slice().sort((a, b) => b - a);
    return sortedArr[0];
}
console.log(largestElementUsingSort([3, 5, 7, 2, 8])); // Output: 8

//--------------------------------------------------------------------

function largestElementUsingForEach(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    let max = arr[0];
    arr.forEach(item => {
        if (item > max) {
            max = item;
        }
    });
    return max;
}
console.log(largestElementUsingForEach([3, 5, 7, 2, 8])); // Output: 8

//--------------------------------------------------------------------