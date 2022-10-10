// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.


let reg_name = "xyz@masai.com";
let reg_pass = "masai";

let user_name = "yz@masai.com";
let user_pass = "masai";

if(reg_name == user_name){
  if(reg_pass == user_pass){
    console.log("user can login");
   
} else {
  console.log("incorrect password");
}
} else {
  console.log("wrong user name");
}