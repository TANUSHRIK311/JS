function capitalizeWord(word) {
    if (typeof word !== 'string' || word.length === 0) {
        return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);    
}

console.log(capitalizeWord("hello")); // "Hello"
console.log(capitalizeWord("javaScript")); // "JavaScript"
