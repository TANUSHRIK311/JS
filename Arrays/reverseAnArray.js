function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        // Swap elements
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }   
    return arr;
}

// Example usage:
const array = [1, 2, 3, 4, 5];
console.log(reverseArray(array)); // Output: [5, 4, 3, 2, 1]

//--------------------------------------------------------------------

function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        // Swap elements
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}   
// Example usage:   
const arrayInPlace = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayInPlace)); // Output: [5, 4, 3, 2, 1]

//--------------------------------------------------------------------

function reverseArrayNew(arr) {
    const reversedArr = [];
    for(let i = arr.length - 1; i>= 0; i--) {
        reversedArr.push(arr[i]);
    }   
    return reversedArr;
}
// Example usage:
const arrayNew = [1,3,5,7,9,11,13,15,17,19];
console.log(reverseArrayNew(arrayNew)); // Output: [19,17,15,13,11,9,7,5,3,1]

//--------------------------------------------------------------------

function reverseArrayRecursive(arr) {
    if (arr.length === 0) {
        return [];
    }
let syntax = [arr[arr.length - 1]].concat(reverseArrayRecursive(arr.slice(0, arr.length - 1)));
console.log("SYNTAX", syntax);

return syntax;
}
// Example usage:
const arrayRecursive = [2,4,6,8,10];
console.log(reverseArrayRecursive(arrayRecursive)); // Output: [10,8,6,4,2]

//----------------------------------------------------------------------------

function reverseArrayUsingReduce(arr) {
    return arr.reduce((acc, curr) => [curr, ...acc], []);
}   
// Example usage:
const arrayReduce = [10,20,30,40,50];
console.log(reverseArrayUsingReduce(arrayReduce)); // Output: [50,40,30,20,10]

//--------------------------------------------------------------------

function reverseArrayUsingStack(arr) {
    const stack = [];   
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }
    const reversedArr = [];   
    while (stack.length > 0) {
        reversedArr.push(stack.pop());
    }   
    return reversedArr;
}
// Example usage:
const arrayStack = [100,200,300,400,500];
console.log(reverseArrayUsingStack(arrayStack)); // Output: [500,400,300,200,100]

//--------------------------------------------------------------------

function reverseArrayUsingLoop(arr) {
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
// Example usage:
const arrayLoop = [7,14,21,28,35];
console.log(reverseArrayUsingLoop(arrayLoop)); // Output: [35,28,21,14,7]   

//--------------------------------------------------------------------

function reverseArrayUsingSlice(arr) {
    return arr.slice().reverse();
}
// Example usage:
const arraySlice = [3,6,9,12,15];
console.log(reverseArrayUsingSlice(arraySlice)); // Output: [15,12,9,6,3]

//--------------------------------------------------------------------