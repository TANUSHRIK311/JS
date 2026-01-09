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