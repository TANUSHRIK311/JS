function thirdLargestElement(arr){
  
    let unique = [...new Set(arr)];
    
    if (unique.length < 3) {
        return null; // or throw an error if you prefer
    }

    unique.sort((a, b) => b - a);
    return unique[2];


}

console.log(thirdLargestElement([10, 5, 20, 8, 20])); // 8
console.log(thirdLargestElement([3, 2, 1]));         // 1
console.log(thirdLargestElement([5, 5, 5]));         // null

//------------------------------------------------------------------

function thirdLargestElement(arr) {
    let first = -Infinity, second = -Infinity, third = -Infinity;

    for (let num of arr) {
        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second && num < first) {
            third = second;
            second = num;
        } else if (num > third && num < second) {
            third = num;
        }
    }

    return third === -Infinity ? null : third;
}
console.log(thirdLargestElement([10, 5, 20, 8, 20])); // 8