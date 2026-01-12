function capitalizeWord(word) {
    if (typeof word !== 'string' || word.length === 0) {
        return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);    
}

console.log(capitalizeWord("hello")); // "Hello"
console.log(capitalizeWord("javaScript")); // "JavaScript"

//--------------------------------------------------------------------------------------

function capitalizeWordAlternative(word) {  
    if (typeof word !== 'string' || word.length === 0) {
        return '';
    }
    return word.replace(/^./, char => char.toUpperCase());
}

console.log(capitalizeWordAlternative("hello"));
console.log(capitalizeWordAlternative("javaScript"));

//--------------------------------------------------------------------------------------

function capitalizeWordArrayMethod(word) {
    if (typeof word !== 'string' || word.length === 0) {
        return '';
    }   
    let chars = word.split('');
    chars[0] = chars[0].toUpperCase();
    return chars.join('');
}
console.log(capitalizeWordArrayMethod("hello")); // "Hello"
console.log(capitalizeWordArrayMethod("javaScript")); // "JavaScript"

//--------------------------------------------------------------------------------------
