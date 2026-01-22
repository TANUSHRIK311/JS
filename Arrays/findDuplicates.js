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

//--------------------------------------------------------------------

function findDuplicatesForLoop(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }   
        }
    }
    return duplicates;
}
// Example usage:
const arrayForLoop = [1, 2, 3, 4, 5, 3, 2, 1];
console.log(findDuplicatesForLoop(arrayForLoop)); // Output: [1, 2, 3]

//--------------------------------------------------------------------

function findDuplicatesWhileLoop(arr) {
    const duplicates = [];
    let i = 0;
    while (i < arr.length) {
        let j = i + 1;
        while (j < arr.length) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
            j++;
        }   
        i++;
    }
    return duplicates;
}

// Example usage:
const arrayWhileLoop = [1, 2, 3, 4, 5, 3, 2, 1];
console.log(findDuplicatesWhileLoop(arrayWhileLoop)); // Output: [1, 2, 3]

//--------------------------------------------------------------------

function findDuplicatesMap(arr) {
    const countMap = new Map();
    const duplicates = [];  
    for (const item of arr) {
        countMap.set(item, (countMap.get(item) || 0) + 1);
    }
    for (const [item, count] of countMap) {
        if (count > 1) {
            duplicates.push(item);
        }   
    }
    return duplicates;
}
// Example usage:
const arrayMap = [1, 2, 3, 4, 5, 3, 2, 1];
console.log(findDuplicatesMap(arrayMap)); // Output: [1, 2, 3]

//--------------------------------------------------------------------

function findDuplicatesSetMethod(arr) {
    const seen = new Set();
    const duplicates = new Set();
    arr.forEach(item => {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    });
    return Array.from(duplicates);
}
// Example usage:   
const arraySetMethod = [1, 2, 3, 4, 5, 3, 2, 1];
console.log(findDuplicatesSetMethod(arraySetMethod)); // Output: [1, 2, 3]

//--------------------------------------------------------------------

function findDuplicatesForEach(arr) {
    const seen = [];
    const duplicates = [];
    arr.forEach(item => {
        if (seen.includes(item)) {
            if (!duplicates.includes(item)) {
                duplicates.push(item);
            }
        } else {
            seen.push(item);
        }
    });
    return duplicates;
}
// Example usage:
const arrayForEach = [1, 2, 3, 4, 5, 3, 2, 1];
console.log(findDuplicatesForEach(arrayForEach)); // Output: [1, 2, 3]

//--------------------------------------------------------------------

