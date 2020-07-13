// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const rev = parseInt(n.toString().split('').reverse().join(''));
    // To check number is positive & negative

    /*
    if(Math.sign(n) < 0) {
        return 0 - rev;
    }
    return rev;
    */
    // or

    // If n is positve than (rev * 1) so result will be positive else 
    // If n is negative than (rev * -1) so result will be negative
    return rev * Math.sign(n);
}

module.exports = reverseInt;
