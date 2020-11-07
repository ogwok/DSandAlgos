/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let size = strs.length;

    if (size === 0) return " ";
    if (size === 1) return strs;

    strs.sort();

    let i = 0;

    let minLength = Math.min(strs[0].length, strs[size - 1].length)
    console.log(minLength)
    
    while ( i < minLength && strs[0][i] == strs[size - 1][i] ) i++;
        let long_prefix = strs[0].substring(0, i);
        return long_prefix;
    
   
};

let input = ["flower","flow","flight"]
console.log(longestCommonPrefix(input));