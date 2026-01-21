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