function isPalindrome(str){
    return str === str.split('').reverse().join('');

}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false


function twoPointerPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }       left++;
        right--;
    }
    return true;
}
console.log(twoPointerPalindrome("madam")); // true
console.log(twoPointerPalindrome("world")); // false
