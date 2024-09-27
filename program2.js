/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {




    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanMap[s[i]];

        // If the current value is less than the previous value, we subtract it
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue; // Otherwise, we add it
        }

        // Update the previous value
        prevValue = currentValue;
    }

    return total;
}
console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));























    


module.exports={romanToInt}