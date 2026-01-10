function anagramDetection(str1, str2) {
    const formatStr = str =>
        str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return formatStr(str1) === formatStr(str2);
}
console.log(anagramDetection("listen", "silent")); // true
console.log(anagramDetection("hello", "world")); // false

