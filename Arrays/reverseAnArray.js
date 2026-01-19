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

function reverseArrayUsingMap(arr) {
    return arr.map((_, index) => arr[arr.length - 1 - index]);
}   
// Example usage:
const arrayMap = [11,22,33,44,55];
console.log(reverseArrayUsingMap(arrayMap)); // Output: [55,44,33,22,11]

//--------------------------------------------------------------------

function reverseArrayUsingWhile(arr) {
    const reversedArr = [];
    let index = arr.length - 1; 
    while (index >= 0) {    
        reversedArr.push(arr[index]);
        index--;
    }
    return reversedArr;
}
// Example usage:
const arrayWhile = [5,10,15,20,25];
console.log(reverseArrayUsingWhile(arrayWhile)); // Output: [25,20,15,10,5]

//--------------------------------------------------------------------

function reverseArrayUsingForEach(arr) {
    const reversedArr = [];
    arr.forEach((item) => {
        reversedArr.unshift(item);
    });
    return reversedArr;
}
// Example usage:
const arrayForEach = [8,16,24,32,40];
console.log(reverseArrayUsingForEach(arrayForEach)); // Output: [40,32,24,16,8]

//--------------------------------------------------------------------