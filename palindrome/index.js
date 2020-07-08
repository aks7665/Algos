// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // Solution 1
    // const rev = str.split('').reverse().join('');
    // return str === rev;

    // Solution 2
    return str.split('').every((char, index) => str[index] === str[(str.length - index) - 1])

    // Solution 3
    const rev = str.split('').reverse().join('');
    return str === rev;
}

module.exports = palindrome;