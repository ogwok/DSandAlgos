let numsexamp = [3, 2, 4],
  targetexamp = 6;

var twoSum = function (nums, target) {
  let final;
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    for (let i = 0; i < nums.length; i++) {
      let num2 = nums[i + 1];
      if (num1 + num2 == target) {
        final = [nums.indexOf(num1), nums.indexOf(num2)];
      }
    }
  }
  return final;
};
console.log(twoSum(numsexamp, targetexamp));
