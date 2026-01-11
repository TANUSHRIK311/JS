function countWordOccurrences(text, word) {
    // Create a regular expression to match the word with word boundaries and case insensitive  
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    // Use match to find all occurrences
    const matches = text.match(regex);
    // Return the count of occurrences, or 0 if no matches found
    return matches ? matches.length : 0;
}
// Example usage:
const text = "The quick brown fox jumps over the lazy dog. The dog barked.";
const word = "the";
console.log(countWordOccurrences(text, word)); // Output: 3
console.log(countWordOccurrences("Hello world! Hello everyone!", "Hello")); // Output: 2
console.log(countWordOccurrences("JavaScript is great. I love JavaScript.", "JavaScript")); // Output: 2
console.log(countWordOccurrences("This is a test. This test is only a test.", "test")); // Output: 3
console.log(countWordOccurrences("No occurrences here.", "missing")); // Output: 0
//----------------------------------------------------------------------------------------
function countWordOccurrencesAlternative(text, word) {
    const wordsArray = text.toLowerCase().split(/\W+/);
    const targetWord = word.toLowerCase();
    let count = 0;
    for (let w of wordsArray) {
        if (w === targetWord) {
            count++;
        }
    }
    return count;
}
console.log(countWordOccurrencesAlternative(text, word)); // Output: 3

//--------------------------------------------------------------------------------------------

function countWordOccurrencesReduce(text, word) {
    const wordsArray = text.toLowerCase().split(/\W+/);
    const targetWord = word.toLowerCase();
    return wordsArray.reduce((count, w) => (w === targetWord ? count + 1 : count), 0);
}   
console.log(countWordOccurrencesReduce(text, word)); // Output: 3

//--------------------------------------------------------------------------------------------

function countWordOccurrencesMap(text, word) {
    const wordsArray = text.toLowerCase().split(/\W+/);
    const targetWord = word.toLowerCase();
    const wordMap = new Map();  
    for (let w of wordsArray) {
        wordMap.set(w, (wordMap.get(w) || 0) + 1);
    }
    return wordMap.get(targetWord) || 0;
}
console.log(countWordOccurrencesMap(text, word)); // Output: 3

//--------------------------------------------------------------------------------------------

function countWordOccurrencesFilter(text, word) {
    const wordsArray = text.toLowerCase().split(/\W+/);
    const targetWord = word.toLowerCase();
    return wordsArray.filter(w => w === targetWord).length;
}
console.log(countWordOccurrencesFilter(text, word)); // Output: 3

//--------------------------------------------------------------------------------------------

function countWordOccurrencesLoop(text, word) {
    const wordsArray = text.toLowerCase().split(/\W+/);
    const targetWord = word.toLowerCase();
    let count = 0;  
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === targetWord) {
            count++;
        }   

    }
    return count;
}   
console.log(countWordOccurrencesLoop(text, word)); // Output: 3

//--------------------------------------------------------------------------------------------

function countWordOccurrencesWhile(text, word) {
    const wordsArray = text.toLowerCase().split(/\W+/);
    const targetWord = word.toLowerCase();
    let count = 0;
    let index = 0;
    while (index < wordsArray.length) {
        if (wordsArray[index] === targetWord) {
            count++;
        }   
        index++;
    }
    return count;
}
console.log(countWordOccurrencesWhile(text, word)); // Output: 3
//--------------------------------------------------------------------------------------------

function countWordOccurrencesForEach(text, word) {
    const wordsArray = text.toLowerCase().split(/\W+/);
    const targetWord = word.toLowerCase();
    let count = 0;
    wordsArray.forEach(w => {
        if (w === targetWord) {
            count++;
        }
    });
    return count;
}   
console.log(countWordOccurrencesForEach(text, word)); // Output: 3
//--------------------------------------------------------------------------------------------

function countWordOccurrencesCharByChar(text, word) {
    const lowerText = text.toLowerCase();
    const lowerWord = word.toLowerCase();
    let count = 0;
    let wordLength = lowerWord.length;
    let textLength = lowerText.length;
    for (let i = 0; i <= textLength - wordLength; i++) {
        let match = true;
        for (let j = 0; j < wordLength; j++) {
            if (lowerText[i + j] !== lowerWord[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            // Check word boundaries
            if ((i === 0 || !/\w/.test(lowerText[i - 1])) &&
                (i + wordLength === textLength || !/\w/.test(lowerText[i + wordLength]))) {
                count++;
            }
        }
    }
    return count;
}
console.log(countWordOccurrencesCharByChar(text, word)); // Output: 3
//--------------------------------------------------------------------------------------------