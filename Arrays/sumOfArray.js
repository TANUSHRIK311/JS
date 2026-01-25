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

function sumUsingRecursion(arr) {
    if (arr.length === 0) {
        return 0; // Return 0 for empty array
    }   
    function recursiveSum(index) {
        if (index >= arr.length) {
            return 0;
        }
        return arr[index] + recursiveSum(index + 1);
    }
    return recursiveSum(0);
}
console.log(sumUsingRecursion([3, 5, 7, 2, 8])); // Output: 25

//--------------------------------------------------------------------

function sumUsingForEach(arr) {
    if (arr.length === 0) {
        return 0; // Return 0 for empty array
    }
    let sum = 0;
    arr.forEach(function(element) {
        sum += element;
    });
    return sum;
}
console.log(sumUsingForEach([3, 5, 7, 2, 8])); // Output: 25


//--------------------------------------------------------------------

function sumUsingSet(arr) {
    if (arr.length === 0) {
        return 0; // Return 0 for empty array
    }
    const uniqueElements = new Set(arr);
    let sum = 0;    
    uniqueElements.forEach(function(element) {
        sum += element;
    }
    );
    return sum;
}
 console.log(sumUsingSet([3, 5, 7, 2, 8, 3, 5])); // Output: 25
  
 //--------------------------------------------------------------------

 function sumUsingMap(arr) {
    if (arr.length === 0) {
        return 0; // Return 0 for empty array
    }   
    const elementMap = new Map();
    arr.forEach((element) => {
        if (elementMap.has(element)) {
            elementMap.set(element, elementMap.get(element) + 1);
        } else {
            elementMap.set(element, 1);
        }
    }); 
    let sum = 0;
    elementMap.forEach((value, key) => {
        sum += key * value;
    }); 
    return sum;
}
console.log(sumUsingMap([3, 5, 7, 2, 8])); // Output: 25

//--------------------------------------------------------------------

