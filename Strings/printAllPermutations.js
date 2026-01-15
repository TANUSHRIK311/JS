function printAllPermutations(str) {
    const results = []; 
    const used = Array(str.length).fill(false);

    function backtrack(currentPermutation) {
        if (currentPermutation.length === str.length) {
            results.push(currentPermutation.join(''));
            return;
        }
        for (let i = 0; i < str.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            currentPermutation.push(str[i]);
            backtrack(currentPermutation);
            currentPermutation.pop();
            used[i] = false;
        }
    }
    backtrack([]);
    return results;
}
console.log(printAllPermutations("abc"));

//--------------------------------------------------------------------- 


 