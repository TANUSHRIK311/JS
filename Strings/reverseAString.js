function reverseString(str) {

    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"   

function reverseStringIterative(str) {
    let reversed = '';      
    for (let char of str) {
        reversed = char + reversed;
    }                               
    return reversed;
}
console.log(reverseStringIterative("hello")); // "olleh"
console.log(reverseStringIterative("JavaScript")); // "tpircSavaJ"

function reverseStringRecursive(str) {
    if (str === "") {
        return "";
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverseStringRecursive("hello")); // "olleh"
console.log(reverseStringRecursive("JavaScript")); // "tpircSavaJ"  

function reverseStringTwoPointer(str) {
    let arr = str.split('');
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr.join('');
}
console.log(reverseStringTwoPointer("hello"));
// "olleh"
console.log(reverseStringTwoPointer("JavaScript")); 
// "tpircSavaJ"

function reverseStringReduce(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

console.log(reverseStringReduce("hello")); // "olleh"
console.log(reverseStringReduce("JavaScript")); // "tpircSavaJ"

function reverseStringStack(str) {
    let stack = [];         
    for (let char of str) {
        stack.push(char);
    }
    let reversed = '';
    while (stack.length > 0) {
        reversed += stack.pop();
    }
    return reversed;
}
console.log(reverseStringStack("hello")); // "olleh"
console.log(reverseStringStack("JavaScript")); // "tpircSavaJ"

function reverseStringArrayMethods(str) {
    let arr = Array.from(str);
    arr.reverse();
    return arr.join('');
}
console.log(reverseStringArrayMethods("hello")); // "olleh"
console.log(reverseStringArrayMethods("JavaScript")); // "tpircSavaJ"
