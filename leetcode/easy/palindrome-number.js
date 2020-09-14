/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let x_reverse = parseInt(x.toString().split('').reverse().join(''));
    return x === x_reverse;
};

