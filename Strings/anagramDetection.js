function anagramDetection(str1, str2) {
    const formatStr = str =>
        str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return formatStr(str1) === formatStr(str2);
}
console.log(anagramDetection("listen", "silent")); // true
console.log(anagramDetection("hello", "world")); // false

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