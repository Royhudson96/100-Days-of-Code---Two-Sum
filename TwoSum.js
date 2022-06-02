//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//nums = [2,7,11,15], target = 9

let nums = [2,11,15,7];
let target = 9;
function TwoSum(nums, target) {
  for (i=0; i < nums.length; i++) {
    for (j= i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i,j]
      }
    }
  }
  return undefined
}

//nums = [2,11,15,7], target = 9
function TwoSum2(nums, target){
  let map = {};
    for (let i = 0; i <= nums.length; i++) {
      let value = nums[i];
      let complimentPair = target-value;
      if (map[complimentPair] !== undefined) {
        return [map[complimentPair], i]
      }
      map[value] = i;
      // console.log(map)
  }
}
console.log(TwoSum2(nums, target))
