// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // Solution 1
    // Get no and charters only and replaces other spaces and special chars with regular expression
    // const cleanStrA = stringA.replace(/[^\w]/g, '').toLowerCase();
    // const cleanStrB = stringB.replace(/[^\w]/g, '').toLowerCase();

    // const charMapA = getCharMap(cleanStrA);
    // const charMapB = getCharMap(cleanStrB);

    // if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    //     return false;
    // }

    // for (const char in charMapA) {
    //     if (charMapA.hasOwnProperty(char)) {
    //         if (charMapA[char] !== charMapB[char]) {
    //             return false;
    //         }   
    //     }
    // }
    // return true;

    // solution 2
    const cleanStrA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    const cleanStrB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    if (cleanStrA !== cleanStrB) {
        return false;
    }
    return true;
}

function getCharMap(str) {
    const chars = {};
    for (const char of str) {
        chars[char] = chars[char] + 1 || 1;
    }
    return chars;
}
module.exports = anagrams;
