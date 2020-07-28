/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let result = [];
  for(let x = 0; x < Math.max(word1.length, word2.length); x++){
    if(word1.charAt(x)){
      result.push(word1.charAt(x))
    }
    if(word2.charAt(x)){
      result.push(word2.charAt(x))
    } 
  }  
  let answer = result.join("")
  return answer;
};