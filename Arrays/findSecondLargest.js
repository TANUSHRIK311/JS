function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for second largest
    }   
    let first = -Infinity;
    let second = -Infinity; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }
    return (second === -Infinity) ? null : second;
}
console.log(findSecondLargest([3, 5, 7, 2, 8])); // Output: 7

//--------------------------------------------------------------------

function findSecondLargestUsingSort(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for second largest
    }   
    let uniqueArr = Array.from(new Set(arr)); // Remove duplicates
    uniqueArr.sort((a, b) => b - a);
    return (uniqueArr.length < 2) ? null : uniqueArr[1];
}
console.log(findSecondLargestUsingSort([3, 5, 7, 2, 8])); // Output: 7

//--------------------------------------------------------------------

function findSecondLargestUsingReduce(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for second largest
    }
    let uniqueArr = Array.from(new Set(arr)); // Remove duplicates
    if (uniqueArr.length < 2) {
        return null;
    }
    const result = uniqueArr.reduce((acc, val) => {
        if (val > acc.first) {
            acc.second = acc.first;
            acc.first = val;
        }
        else if (val > acc.second && val !== acc.first) {
            acc.second = val;
        }
        return acc;
    }, { first: -Infinity, second: -Infinity });
    return (result.second === -Infinity) ? null : result.second;
}
console.log(findSecondLargestUsingReduce([3, 5, 7, 2, 8])); // Output: 7

//--------------------------------------------------------------------

function findSecondLargestUsingFilter(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for second largest
    }
    let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index); // Remove duplicates
    if (uniqueArr.length < 2) {
        return null;
    }
    let max = Math.max(...uniqueArr);
    uniqueArr = uniqueArr.filter(item => item !== max);
    return Math.max(...uniqueArr);
}
console.log(findSecondLargestUsingFilter([3, 5, 7, 2, 8])); // Output: 7

//--------------------------------------------------------------------

function findSecondLargestUsingForEach(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for second largest
    }
    let first = -Infinity;
    let second = -Infinity; 
    let uniqueArr = Array.from(new Set(arr));
    uniqueArr.forEach(num => {
        if (num > first) {
            second = first;
            first = num;
        }
        else if (num > second && num !== first) {
            second = num;
        }
    });
    return (second === -Infinity) ? null : second;
}
console.log(findSecondLargestUsingForEach([3, 5, 7, 2, 8])); // Output: 7

//--------------------------------------------------------------------

function findSecondLargestUsingWhile(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for second largest
    }   
    let first = -Infinity;
    let second = -Infinity; 
    let uniqueArr = Array.from(new Set(arr));
    let i = 0;  
    while (i < uniqueArr.length) {
        if (uniqueArr[i] > first) {
            second = first;
            first = uniqueArr[i];
        } else if (uniqueArr[i] > second && uniqueArr[i] !== first) {
            second = uniqueArr[i];
        }   
        i++;
    }
    return (second === -Infinity) ? null : second;
}
console.log(findSecondLargestUsingWhile([3, 5, 7, 2, 8])); // Output: 7

//--------------------------------------------------------------------

function findSecondLargestUsingSortDesc(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for second largest
    }   
    let uniqueArr = Array.from(new Set(arr)); // Remove duplicates
    if (uniqueArr.length < 2) {
        return null;
    }   
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr[1];
}
console.log(findSecondLargestUsingSortDesc([3, 5, 7, 2, 8])); // Output: 7  

//--------------------------------------------------------------------

function findSecondLargestUsingSplice(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for second largest
    }
    let uniqueArr = Array.from(new Set(arr)); // Remove duplicates
    if (uniqueArr.length < 2) {
        return null;
    }

    let max = Math.max(...uniqueArr);
    let maxIndex = uniqueArr.indexOf(max);
    uniqueArr.splice(maxIndex, 1);  
    return Math.max(...uniqueArr);
}
console.log(findSecondLargestUsingSplice([3, 5, 7, 2, 8])); // Output: 7

//--------------------------------------------------------------------

function findSecondLargestUsingMap(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for second largest
    }   
    let uniqueMap = new Map();
    arr.forEach(num => {
        uniqueMap.set(num, true);
    });
    let uniqueArr = Array.from(uniqueMap.keys());
    if (uniqueArr.length < 2) {
        return null;
    }
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr[1];
}
console.log(findSecondLargestUsingMap([3, 5, 7, 2, 8])); // Output: 7

//--------------------------------------------------------------------

function findSecondLargestUsingRecursion(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for second largest
    }   
    let uniqueArr = Array.from(new Set(arr)); // Remove duplicates
    if (uniqueArr.length < 2) {
        return null;
    }
    function findLargestAndSecondLargest(index, first, second) {
        if (index >= uniqueArr.length) {
            return second;
        }
        if (uniqueArr[index] > first) {
            second = first;
            first = uniqueArr[index];
        }
        else if (uniqueArr[index] > second && uniqueArr[index] !== first) {
            second = uniqueArr[index];
        }
        return findLargestAndSecondLargest(index + 1, first, second);
    }   

    const result = findLargestAndSecondLargest(0, -Infinity, -Infinity);
    return (result === -Infinity) ? null : result;
}   
console.log(findSecondLargestUsingRecursion([3, 5, 7, 2, 8])); // Output: 7

//--------------------------------------------------------------------
