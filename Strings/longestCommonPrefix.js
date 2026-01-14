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

