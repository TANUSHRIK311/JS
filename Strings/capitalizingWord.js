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

function capitalizeWordSliceMethod(word) {
    if (typeof word !== 'string' || word.length === 0) {
        return '';
    }
    return word.slice(0, 1).toUpperCase() + word.slice(1);
}
console.log(capitalizeWordSliceMethod("hello")); // "Hello"
console.log(capitalizeWordSliceMethod("javaScript")); // "JavaScript"

//--------------------------------------------------------------------------------------

function capitalizeWordUsingTemplateLiterals(word) {
    if (typeof word !== 'string' || word.length === 0) {
        return '';
    }   
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}
console.log(capitalizeWordUsingTemplateLiterals("hello")); // "Hello"
console.log(capitalizeWordUsingTemplateLiterals("javaScript")); // "JavaScript"

//--------------------------------------------------------------------------------------

function capitalizeWordUsingArrayDestructuring(word) {
    if (typeof word !== 'string' || word.length === 0) {
        return '';
    }   
    const [firstChar, ...restChars] = word;
    return firstChar.toUpperCase() + restChars.join('');
}
console.log(capitalizeWordUsingArrayDestructuring("hello")); // "Hello"
console.log(capitalizeWordUsingArrayDestructuring("javaScript")); // "JavaScript"
//--------------------------------------------------------------------------------------