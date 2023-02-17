const link = 'https://leetcode.com/problems/two-sum/';

var twoSum = function(nums, target) {
  let arr = [... nums];
  let too1 = []
  
  nums.forEach((el,i) => {
    if(!too1.length) {
      const too = nums.reduce((prev, curr, currentIdex)  => {
        if(too1.length == 0) {
          if(curr + nums[i] == target) {
            too1.push(i, currentIdex)
          }
        }
        return prev + curr
      },0)
    }
  })
  
  return too1;
};

const arr = [3,2,4];

console.log( twoSum(arr, 6));


