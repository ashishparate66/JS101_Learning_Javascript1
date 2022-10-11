// Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit


  let x =1;
  let sum =0;
  while(x<=30){
        if(x%3===0){
          sum+=x;  
        }
          x++;
    
  }console.log(sum);