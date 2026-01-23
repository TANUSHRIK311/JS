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

function largestElementUsingWhileLoop(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    let max = arr[0];
    let i = 1;  
    while (i < arr.length) {
        if (arr[i] > max) {
            max = arr[i];
        }
        i++;
    }
    return max;
}
console.log(largestElementUsingWhileLoop([3, 5, 7, 2, 8])); // Output: 8

//--------------------------------------------------------------------

function largestElementUsingRecursion(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    function findMax(index, currentMax) {
        if (index >= arr.length) {
            return currentMax;
        }
        if (arr[index] > currentMax) {
            currentMax = arr[index];
        }
        return findMax(index + 1, currentMax);
    }
    return findMax(1, arr[0]);
}
console.log(largestElementUsingRecursion([3, 5, 7, 2, 8])); // Output: 8

//--------------------------------------------------------------------

function largestElementUsingSet(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    const uniqueElements = new Set(arr);
    return Math.max(...uniqueElements);
}
console.log(largestElementUsingSet([3, 5, 7, 2, 8])); // Output: 8

//--------------------------------------------------------------------