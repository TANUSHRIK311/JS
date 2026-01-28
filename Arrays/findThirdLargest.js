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

//------------------------------------------------------------

function thirdLargestElement(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let count = 0;

        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[i]) {
                count++;
            }
        }

        // If exactly 2 elements are greater, this is the 3rd largest
        if (count === 2) {
            return arr[i];
        }
    }

    return null; // if no 3rd largest exists
}
console.log(thirdLargestElement([10, 5, 20, 8, 20])); // 8

//-------------------------------------------------------------------

function thirdLargestElement(arr) {
    arr.sort((a, b) => b - a);
    return arr.length >= 3 ? arr[2] : null;
}
console.log(thirdLargestElement([10, 5, 20, 8, 20])); // 8

//--------------------------------------------------------------

function thirdLargestElement(arr) {
    let unique = arr.filter((v, i) => arr.indexOf(v) === i);
    unique.sort((a, b) => b - a);
    return unique.length >= 3 ? unique[2] : null;
}

//--------------------------------------------------------------
