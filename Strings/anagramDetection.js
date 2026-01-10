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