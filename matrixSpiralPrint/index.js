// --- Directions
// Write a function that accepts an integer N
// and creates a array of NxN and return the values of array in spiral format.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [3, 4]]
//  Output - "1,2,4,3"
//  matrix(4)
//     [[1,2,3,4],
//      [5,6,7,8],
//      [9,10,11,12],
//      [13,14,15,16]];
//  Output - "1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10"

function matrix(n) {
    let inpArr = [];

    // Loop to insert blank array at rows for 2D array
    let counter = 1;
    for (let row = 0; row < n; row++) {
        let colValues = [];
        for(let col = 0; col < n; col++) {
            colValues.push(counter);
            counter++;
        }
        inpArr.push(colValues);
    }

    let startRow = 0;
    let startCol = 0;
    let endRow = inpArr.length - 1;
    let endCol = inpArr.length - 1;
    let result = [];

    while (startRow <= endRow && startCol <= endCol) {
        // left to right
        for (let i = startCol; i <= endCol; i++) {
            result.push(inpArr[startRow][i]);
        }
        startRow++;

        // top to bottom
        for (let i = startRow; i <= endRow; i++) {
            result.push(inpArr[i][endCol]);
        }
        endCol--;

        // right to left
        for (let i = endCol; i >= startCol; i--) {
            result.push(inpArr[endRow][i]);
        }
        endRow--;

        // bottom to top
        for (let i = endRow; i >= startRow; i--) {
            result.push(inpArr[i][startCol]);
        }
        startCol++;
    }
    return result.join(',');
}

module.exports = matrix;