function removeDuplicates(arr) {
    const seen = new Set();
    const result = [];  
    for (const item of arr) {
        if (!seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }
    return result;
}


// Example usage:
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]    
const arrayWithDuplicates1 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray2 = removeDuplicates(arrayWithDuplicates1);
console.log(uniqueArray2); // Output: [1, 2, 3, 4, 5]

// Another example usage:
const arrayWithDuplicates3 = ['apple', 'banana', 'apple', 'orange', 'banana'];
const uniqueArray3 = removeDuplicates(arrayWithDuplicates3);
console.log(uniqueArray3); // Output: ['apple', 'banana', 'orange']
const arrayWithDuplicates4 = ['apple', 'banana', 'apple', 'orange', 'banana'];