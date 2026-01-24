function smallestElementInArray(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }   
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {  
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
 console.log(smallestElementInArray([3, 5, 7, 2, 8])); // Output: 2

 //--------------------------------------------------------------------

 function smallestElementUsingMathMin(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    return Math.min(...arr);
}
console.log(smallestElementUsingMathMin([3, 5, 7, 2, 8])); // Output: 2

//--------------------------------------------------------------------

function smallestElementUsingForEach(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    let min = arr[0];
    arr.forEach(function(element) {
        if (element < min) {
            min = element;
        }
    });
    return min;
}

console.log(smallestElementUsingForEach([3, 5, 7, 2, 8])); // Output: 2

//--------------------------------------------------------------------

function smallestElementUsingWhileLoop(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    let min = arr[0];
    let i = 1;
    while (i < arr.length) {
        if (arr[i] < min) {
            min = arr[i];
        }
        i++;
    }
    return min;
}
console.log(smallestElementUsingWhileLoop([3, 5, 7, 2, 8])); // Output: 2

//--------------------------------------------------------------------

function smallestElementUsingRecursion(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }   
    function findMin(index, currentMin) {
        if (index >= arr.length) {
            return currentMin;
        }
        if (arr[index] < currentMin) {
            currentMin = arr[index];
        }
        return findMin(index + 1, currentMin);
    }
    return findMin(1, arr[0]);
}
console.log(smallestElementUsingRecursion([3, 5, 7, 2, 8])); // Output: 2

//--------------------------------------------------------------------

function smallestElementUsingSet(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    const uniqueElements = new Set(arr);
    return Math.min(...uniqueElements);
}
console.log(smallestElementUsingSet([3, 5, 7, 2, 8])); // Output: 2

//--------------------------------------------------------------------

function smallestElementUsingMap(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    const elementMap = new Map();
    arr.forEach((element) => {
        elementMap.set(element, true);
    });
    return Math.min(...elementMap.keys());
}
console.log(smallestElementUsingMap([3, 5, 7, 2, 8])); // Output: 2

//--------------------------------------------------------------------