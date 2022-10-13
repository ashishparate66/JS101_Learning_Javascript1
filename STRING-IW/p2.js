// Problem 2 : Given an array of string count the overall total number of characters


let arr = ["ashish", "pratik", "dipesh", "santosh"]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  
   sum += arr[i].length
} 
   console.log(sum);