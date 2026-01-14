function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";   
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }   
    }
    return prefix;
}
// Example usage:
const strings1 = ["flower", "flow", "flight"];
const commonPrefix1 = longestCommonPrefix(strings1);
console.log(commonPrefix1); // Output: "fl"
const strings2 = ["dog", "racecar", "car"];
const commonPrefix2 = longestCommonPrefix(strings2);
console.log(commonPrefix2); // Output: ""
const strings3 = ["interspecies", "interstellar", "interstate"];
const commonPrefix3 = longestCommonPrefix(strings3);
console.log(commonPrefix3); // Output: "inters"4

//---------------------------------------------------------------------

var longestCommonPrefix2 = function(strs) {
    strs.sort();
    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;

    while (i < first.length && first[i] === last[i]) {
        i++;
    }

    return first.slice(0, i);
};
 
// Example usage:
const strings4 = ["flower", "flow", "flight"];
const commonPrefix4 = longestCommonPrefix2(strings4);
console.log(commonPrefix4); // Output: "fl"
const strings5 = ["dog", "racecar", "car"];
const commonPrefix5 = longestCommonPrefix2(strings5);
console.log(commonPrefix5); // Output: ""
const strings6 = ["interspecies", "interstellar", "interstate"];
const commonPrefix6 = longestCommonPrefix2(strings6);
console.log(commonPrefix6); // Output: "inters"

function longestCommonPrefix3(strs) {
    if (strs.length === 0) return "";       
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        prefix = prefix.substring(0, j);
        if (prefix === "") return "";
    }
    return prefix;
}   
// Example usage:
const strings7 = ["flower", "flow", "flight"];
const commonPrefix7 = longestCommonPrefix3(strings7);
console.log(commonPrefix7); // Output: "fl"
const strings8 = ["dog", "racecar", "car"];
const commonPrefix8 = longestCommonPrefix3(strings8);
console.log(commonPrefix8); // Output: ""
const strings9 = ["interspecies", "interstellar", "interstate"];
const commonPrefix9 = longestCommonPrefix3(strings9);
console.log(commonPrefix9); // Output: "inters"


function longestCommonPrefix4(strs) {
    if (strs.length === 0) return "";       
    let prefix = strs[0];      
    for (let i = 1; i < strs.length; i++) {
        prefix = commonPrefixBetweenTwo(prefix, strs[i]);
        if (prefix === "") return "";
    }
    return prefix;
}

const strings10 = ["interspecies", "interstellar", "interstate"];
const commonPrefix10 = longestCommonPrefix4(strings10);
console.log(commonPrefix10); // Output: "inters"