function findDuplicates(arr) {  
    const seen = new Set();
    const duplicates = new Set();
    for (const item of arr) {   
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }   
    }
    return Array.from(duplicates);
}
// Example usage:   
const array = [1, 2, 3, 4, 5, 3, 2, 1];
console.log(findDuplicates(array)); // Output: [1, 2, 3]

//--------------------------------------------------------------------

function findDuplicatesFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index && arr.indexOf(item) === index);
}   
// Example usage:
const arrayFilter = [1, 2, 3, 4, 5, 3, 2, 1];
console.log(findDuplicatesFilter(arrayFilter)); // Output: [1, 2, 3]

//--------------------------------------------------------------------

function findDuplicatesReduce(arr) {
    return arr.reduce((acc, item) => {
        if (arr.indexOf(item) !== arr.lastIndexOf(item) && !acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
}
// Example usage:
const arrayReduce = [1, 2, 3, 4, 5, 3, 2, 1];
console.log(findDuplicatesReduce(arrayReduce)); // Output: [1, 2, 3]
