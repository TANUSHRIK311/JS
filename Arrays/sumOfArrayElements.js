function sumOfArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// Example usage:   
const array = [1, 2, 3, 4, 5];
console.log(sumOfArrayElements(array)); // Output: 15

//--------------------------------------------------------------------

function sumOfArrayElementsRecursive(arr) {
    if (arr.length === 0) {
        return 0;
    }   
    return arr[0] + sumOfArrayElementsRecursive(arr.slice(1));
}
// Example usage:   
const arrayRecursive = [1, 2, 3, 4, 5];
console.log(sumOfArrayElementsRecursive(arrayRecursive)); // Output: 15

//--------------------------------------------------------------------