function secondSmallest_sort(arr) {
    const unique = [...new Set(arr)];
    if (unique.length < 2) return null;

    unique.sort((a, b) => a - b);
    return unique[1];
}

console.log(secondSmallest_sort([1,3,5,6]));

//--------------------------------------------------

function secondSmallest_singlePass(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let x of arr) {
        if (x < smallest) {
            secondSmallest = smallest;
            smallest = x;
        } else if (x > smallest && x < secondSmallest) {
            secondSmallest = x;
        }
    }

    return secondSmallest === Infinity ? null : secondSmallest;
}

//----------------------------------------------------------------

