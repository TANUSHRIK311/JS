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
