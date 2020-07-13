// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // Solution 1(*)
    // const chunked = [];
    // let count = 1;
    // let tempArr = [];
    // const lastElement = array[array.length - 1]
    // for (const num of array) {
    //     tempArr.push(num);
    //     if (count !== size && num !== lastElement) {
    //         count++;
    //     } else {
    //         count = 1;
    //         chunked.push([...tempArr]);
    //         tempArr = [];
    //     }
    // }
    // return chunked;

    // Solution 2
    const chuncked = [];
    let index = 0;

    while (index < array.length) {
        chuncked.push(array.slice(index, index + size));
        index += size;
    }

    return chuncked;

    // Solution 3
    // const chunked = [];
    // for (const element of array) {
    //     const last = chunked[chunked.length - 1];

    //     if (!last || last.length == size) {
    //         chunked.push([element]);
    //     } else {
    //         last.push(element)
    //     }
    // }
    // return chunked;
}

module.exports = chunk;
