function findSubString(mainString, subString) {
    if (typeof mainString !== 'string' || typeof subString !== 'string') {
        throw new Error('Both arguments must be strings.');
    }
    const mainLength = mainString.length;
    const subLength = subString.length;
    if (subLength === 0) return 0;
    for (let i = 0; i <= mainLength - subLength; i++) {
        let j = 0;
        while (j < subLength && mainString[i + j] === subString[j]) {
            j++;
        }
        if (j === subLength) {
            return i;
        }
    }
    return -1;
}

 console.log(findSubString("hello world", "world")); // Output: 6
 console.log(findSubString("hello world", "planet")); // Output: -1
 console.log(findSubString("abcdef", "def")); // Output: 3

//---------------------------------------------------------------------

function findSubStringLast(mainString, subString) {
    if (typeof mainString !== 'string' || typeof subString !== 'string') {
        throw new Error('Both arguments must be strings.');
    }   
    const mainLength = mainString.length;
    const subLength = subString.length;
    if (subLength === 0) return mainLength;
    for (let i = mainLength - subLength; i >= 0; i--) {
        let j = 0;
        while (j < subLength && mainString[i + j] === subString[j]) {
            j++;
        }
        if (j === subLength) {
            return i;
        }   
    }
    return -1;
}
  console.log(findSubStringLast("hello world world", "world")); // Output: 12

//---------------------------------------------------------------------

function findSubStringCount(mainString, subString) {
    if (typeof mainString !== 'string' || typeof subString !== 'string') {
        throw new Error('Both arguments must be strings.');
    }
    const mainLength = mainString.length;
    const subLength = subString.length;
    if (subLength === 0) return mainLength + 1;
    let count = 0;
    for (let i = 0; i <= mainLength - subLength; i++) {
        let j = 0;
        while (j < subLength && mainString[i + j] === subString[j]) {
            j++;
        }   
        if (j === subLength) {
            count++;
        }
    }
    return count;
}   
    return prefix;
// Example usage:
console.log(findSubStringCount("hello world world", "world")); // Output: 2

//--------------------------------------------------------------------- 
