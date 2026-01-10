function anagramDetection(str1, str2) {
    const formatStr = str =>
        str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return formatStr(str1) === formatStr(str2);
}
console.log(anagramDetection("listen", "silent")); // true
console.log(anagramDetection("hello", "world")); // false

//--------------------------------------------------------------------------------------

function anagramUsingFrequencyCounter(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const freqCounter = {};
    for (let char of str1) {
        freqCounter[char] = (freqCounter[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!freqCounter[char]) {
            return false;
        }
        freqCounter[char]--;
    }
    return true;
}
console.log(anagramUsingFrequencyCounter("triangle", "integral")); // true
console.log(anagramUsingFrequencyCounter("apple", "pale")); // false

//--------------------------------------------------------------------------------------

function anagramUsingMap(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const map = new Map();
    for (let char of str1) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    for (let char of str2) {
        if (!map.has(char)) {
            return false;
        }
        map.set(char, map.get(char) - 1);
    }
    return true;
}
console.log(anagramUsingMap("triangle", "integral")); // true
console.log(anagramUsingMap("apple", "pale")); // false

//--------------------------------------------------------------------------------------

function anagramDetectionUsingSort(str1, str2) {
    const normalize = str =>
        str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log(anagramDetectionUsingSort("Dormitory", "Dirty room")); // true
console.log(anagramDetectionUsingSort("Hello", "World")); // false

//--------------------------------------------------------------------------------------

function anagramUsingCharCount(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }           
    const charCount = {};
    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!charCount[char]) {
            return false;
        }   
        charCount[char]--;
    }
    return true;
}   

console.log(anagramUsingCharCount("conversation", "voices rant on")); // true
console.log(anagramUsingCharCount("example", "samples")); // false

//--------------------------------------------------------------------------------------

function anagramUsingArray(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const charArray = new Array(256).fill(0);
    for (let char of str1) {
        charArray[char.charCodeAt(0)]++;
    }
    for (let char of str2) {
        charArray[char.charCodeAt(0)]--;
        if (charArray[char.charCodeAt(0)] < 0) {
            return false;
        }   
    }
    return true;
}   
console.log(anagramUsingArray("listen", "silent")); // true
console.log(anagramUsingArray("hello", "world")); // false  

//--------------------------------------------------------------------------------------

function anagramUsingSet(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }   
    const charSet = new Set();
    for (let char of str1) {
        charSet.add(char);
    }
    for (let char of str2) {
        if (!charSet.has(char)) {
            return false;
        }
        charSet.delete(char);
    }   
    return charSet.size === 0;
}
console.log(anagramUsingSet("evil", "vile"));
// true
console.log(anagramUsingSet("hello", "world"));
// false
//--------------------------------------------------------------------------------------

function anagramUsingBitManipulation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }       
    let bitVector = 0;
    for (let char of str1) {
        const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
        bitVector ^= (1 << charCode);
    }


    for (let char of str2) {
        const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
        bitVector ^= (1 << charCode);
    }
    return bitVector === 0;
}
console.log(anagramUsingBitManipulation("abcde", "edcba")); // true
console.log(anagramUsingBitManipulation("hello", "world")); // false

//--------------------------------------------------------------------------------------