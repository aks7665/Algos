// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // Solution 1
    // let vowels = 0;
    // for (const char of str.toLowerCase()) {
    //     if ( char === 'a' || char === 'e' || char === 'i'|| char === 'o'|| char === 'u' ) {
    //         vowels ++;
    //     }
    // }
    // return vowels;

    // Solution 2
    let vowels = 'aeiou';
    let count = 0;
    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count ++;
        }
    }
    return count;
}

module.exports = vowels;
