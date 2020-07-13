// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    let maxVal = 0;
    let maxChar = '';

    for (const key of str) {
        // If chars has key than increase the value by 1 
        // else in key is null or undefiend than assign 1
        chars[key] = chars[key] + 1 || 1;
    }

    for (const key in chars) {
        if (chars.hasOwnProperty(key)) {
            const element = chars[key];
            if (element > maxVal) {
                maxVal = element;
                maxChar = key;
            }
        }
    }
    return maxChar;
}

module.exports = maxChar;
