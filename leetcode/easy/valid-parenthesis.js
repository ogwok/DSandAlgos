/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let dictionary = { "{": "}", "[": "]", "(": ")"};
    let parenthesis = [];
    for ( let i = 0; i < s.length; i++ ) {
        if ( s[i] == "{" || s[i] == "[" || s[i] == "(") parenthesis.push(s[i]);
        else if ( dictionary[parenthesis.pop()] != s[i]) return false;
    }
    return true;
};

let s = "({[]})";
console.log(isValid(s));