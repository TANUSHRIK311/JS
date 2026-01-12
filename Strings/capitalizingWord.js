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

function capitalizeWordUsingCharCode(word) {
    if (typeof word !== 'string' || word.length === 0) {
        return '';
    }   
    const firstCharCode = word.charCodeAt(0);
    const capitalizedChar = String.fromCharCode(firstCharCode >= 97 && firstCharCode <= 122 ? firstCharCode - 32 : firstCharCode);
    return capitalizedChar + word.slice(1);
}   
console.log(capitalizeWordUsingCharCode("hello")); // "Hello"
console.log(capitalizeWordUsingCharCode("javaScript")); // "JavaScript"

//--------------------------------------------------------------------------------------

function capitalizeWordUsingIntl(word) {
    if (typeof word !== 'string' || word.length === 0) {
        return '';
    }   
    const firstChar = word.charAt(0);
    const capitalizedChar = new Intl.Collator('en', { sensitivity: 'base' }).compare(firstChar, firstChar.toUpperCase()) === 0 ? firstChar : firstChar.toUpperCase();
    return capitalizedChar + word.slice(1);
}
console.log(capitalizeWordUsingIntl("hello")); // "Hello"
console.log(capitalizeWordUsingIntl("javaScript")); // "JavaScript"
//--------------------------------------------------------------------------------------

function capitalizeWordUsingRegex(word) {
    if (typeof word !== 'string' || word.length === 0) {
        return '';
    }   
    return word.replace(/^(.)/, (match, p1) => p1.toUpperCase());
}
console.log(capitalizeWordUsingRegex("hello"));
console.log(capitalizeWordUsingRegex("javaScript"));;
//--------------------------------------------------------------------------------------

function capitalizeWordUsingLoop(word) {
    if (typeof word !== 'string' || word.length === 0) {
        return '';
    }   
    let capitalizedWord = '';
    for (let i = 0; i < word.length; i++) {
        if (i === 0) {
            capitalizedWord += word[i].toUpperCase();
        } else {
            capitalizedWord += word[i];
        }
    }   
    return capitalizedWord;
}
console.log(capitalizeWordUsingLoop("hello"));
console.log(capitalizeWordUsingLoop("javaScript"));

//--------------------------------------------------------------------------------------

function capitalizeWordUsingMap(word) {
    if (typeof word !== 'string' || word.length === 0) {
        return '';
    }
    const chars = word.split('');
    const capitalizedChars = chars.map((char, index) => index === 0 ? char.toUpperCase() : char);
    return capitalizedChars.join('');
}
console.log(capitalizeWordUsingMap("hello")); // "Hello"
console.log(capitalizeWordUsingMap("javaScript")); // "JavaScript"
//--------------------------------------------------------------------------------------