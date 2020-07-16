// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'            
function pyramid(n) {
    let colLimit = (n * 2) - 1;

    for (let row = 1; row <= n; row++) {
        let level = '';
        for (let col = 1; col <= colLimit; col++) {
            if (col >= (n - (row - 1)) && col <= (n + (row - 1))) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

module.exports = pyramid;