function isPalindrome(str){
    return str === str.split('').reverse().join('');

}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false