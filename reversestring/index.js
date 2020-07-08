// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Solution 1
    // return str.split('').reverse().join('');

    // Solution 2
    // let revStr = '';
    // for (const char of str) {
    //     revStr = char + revStr;
    // }
    // return revStr;

    // Solution 3
    return str.split('').reduce((reversed, char) => char + reversed, '');

    // Solution 4
    // let revStr = '';
    // for (let i = (str.length - 1); i >= 0; i--) {
    //     revStr = revStr + str[i];
    // }
    // return revStr;
}

module.exports = reverse;