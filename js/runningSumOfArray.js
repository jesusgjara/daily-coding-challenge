// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    // creo una variable que almacena un array vacío con el mismo length que el parametro nums
    let result = new Array(nums.length)
    // el primer elemento del array result = al primer elemento nums
    result[0] = nums[0]
    // loop que va desde i=1 hasta nums.length
    for(let i=1; i<nums.length; i++){
        // los siguientes elementos del array result son = la suma del elemento result[i-1] + el array nums[i] 
        result[i] = result[i-1] + nums[i]
    }
    // return de array result 
    return result
};