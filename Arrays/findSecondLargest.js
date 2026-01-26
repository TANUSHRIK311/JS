function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for second largest
    }   
    let first = -Infinity;
    let second = -Infinity; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }
    return (second === -Infinity) ? null : second;
}
console.log(findSecondLargest([3, 5, 7, 2, 8])); // Output: 7

//--------------------------------------------------------------------

function findSecondLargestUsingSort(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for second largest
    }   
    let uniqueArr = Array.from(new Set(arr)); // Remove duplicates
    uniqueArr.sort((a, b) => b - a);
    return (uniqueArr.length < 2) ? null : uniqueArr[1];
}
console.log(findSecondLargestUsingSort([3, 5, 7, 2, 8])); // Output: 7

//--------------------------------------------------------------------