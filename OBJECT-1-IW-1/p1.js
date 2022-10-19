// Problem 1 :
// Given an array find the unique items in the array

let arr = ["dipesh", "pratik", "santosh", "salman", "dipesh", "salman"]
let obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = 1
} console.log(obj)
