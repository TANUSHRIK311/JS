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
// Example usage:
console.log(findSubStringCount("hello world world", "world")); // Output: 2

//--------------------------------------------------------------------- 

function findSubStringAllIndices(mainString, subString) {
    if (typeof mainString !== 'string' || typeof subString !== 'string') {
        throw new Error('Both arguments must be strings.');
    }   
    const mainLength = mainString.length;
    const subLength = subString.length;
    const indices = []; 
    if (subLength === 0) {
        for (let i = 0; i <= mainLength; i++) {
            indices.push(i);
        }
        return indices;
    }
    for (let i = 0; i <= mainLength - subLength; i++) {
        let j = 0;
        while (j < subLength && mainString[i + j] === subString[j]) {
            j++;
        }   
        if (j === subLength) {
            indices.push(i);
        }   
    }
    return indices;
}   
// Example usage:
console.log(findSubStringAllIndices("hello world world", "world")); // Output: [6, 12]


//---------------------------------------------------------------------

function findSubStringIgnoreCase(mainString, subString) {
    if (typeof mainString !== 'string' || typeof subString !== 'string') {
        throw new Error('Both arguments must be strings.');
    }       
    const lowerMain = mainString.toLowerCase(); 
    const lowerSub = subString.toLowerCase();
    const mainLength = lowerMain.length;
    const subLength = lowerSub.length;
    if (subLength === 0) return 0;
    for (let i = 0; i <= mainLength - subLength; i++) {
        let j = 0;
        while (j < subLength && lowerMain[i + j] === lowerSub[j]) {
            j++;
        }
        if (j === subLength) {
            return i;
        }
    }
    return -1;
}
console.log(findSubStringIgnoreCase("Hello World", "world")); // Output: 6

//---------------------------------------------------------------------

function findSubStringReverse(mainString, subString) {
    if (typeof mainString !== 'string' || typeof subString !== 'string') {
        throw new Error('Both arguments must be strings.');
    }   
    const reversedMain = mainString.split('').reverse().join('');
    const reversedSub = subString.split('').reverse().join('');
    const mainLength = reversedMain.length;
    const subLength = reversedSub.length;
    if (subLength === 0) return mainLength;
    for (let i = 0; i <= mainLength - subLength; i++) { 
        let j = 0;
        while (j < subLength && reversedMain[i + j] === reversedSub[j]) {
            j++;
        }
        if (j === subLength) {
            return mainLength - i - subLength;
        }
    }
    return -1;
}

console.log(findSubStringReverse("hello world", "world")); // Output: 6
console.log(findSubStringReverse("hello world", "hello")); // Output: 0
console.log(findSubStringReverse("hello world", "planet")); // Output: -1
