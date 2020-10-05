/**
 * @param {string} s
 * @return {number}
 */

let dictionary = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
var romanToInt = function(s) {
 
    let number = 0;
    for(let i = s.length - 1; ~i; i--){
        let current_value = dictionary[s.charAt(s)];
        if(current_value * 3 > 0 ) number += current_value;
        else number -= current_value;
    }
    return number
};
