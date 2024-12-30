// function sum(a)
// {

//   return function (b)
//   {
//     if(b)
//     {
//       // we ve another argument
      
//       return sum(a+b)
//     }
//     // console.log("b exist")
//     return (a);
//   }
  
  
// }

// console.log(sum(1)(5)(7));


function sum(a) {
  return function (b) {
    if (b) {
       console.log(`Intermediate sum: ${a + b}`);
      return sum(a + b);
    }
    // console.log("Intermediate sum:" ,a);
    return a;
  };
}

// Example usage:

 const ans = sum(1)(4)(8)(6)(1); // Logs intermediate sums and final output

 console.log(ans())
