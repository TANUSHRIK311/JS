function secondSmallest_sort(arr) {
    const unique = [...new Set(arr)];
    if (unique.length < 2) return null;

    unique.sort((a, b) => a - b);
    return unique[1];
}

console.log(secondSmallest_sort([1,3,5,6]));