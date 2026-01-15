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


 function printAllPermutationsUnique(str) {
    const results = new Set(); 
    const used = Array(str.length).fill(false);
    const chars = str.split('').sort();

    function backtrack(currentPermutation) {
        if (currentPermutation.length === str.length) {
            results.add(currentPermutation.join(''));
            return;
        }
        for (let i = 0; i < str.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            currentPermutation.push(chars[i]);
            backtrack(currentPermutation);
            currentPermutation.pop();
            used[i] = false;
        }
    }
    backtrack([]);
    return Array.from(results);
}   
 console.log(printAllPermutationsUnique("aabc"));

 //---------------------------------------------------------------------

 function printAllPermutationsIterative(str) {
    const results = [];
    const chars = str.split('').sort();
    const n = chars.length;
    const factorial = (num) => (num <= 1 ? 1 : num * factorial(num - 1));
    const totalPermutations = factorial(n);
    for (let i = 0; i < totalPermutations; i++) {
        let temp = chars.slice();
        let permutation = '';
        let k = i;
        for (let j = n; j > 0; j--) {
            const fact = factorial(j - 1);
            const index = Math.floor(k / fact);
            permutation += temp[index];
            temp.splice(index, 1);
            k %= fact;
        }   
        results.push(permutation);
    }   
    return results;
}
 console.log(printAllPermutationsIterative("abc"));