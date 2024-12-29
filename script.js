const num =[1,2,3,4];


// const ans = num.reduce((acc,curr)=>{

//   return (acc+curr)

// },0);


// console.log(ans);

Array.prototype.customReduce = function (callBack)
{
  
let res = 0;
  for(let i=0;i<this.length;i++)
  {
    res = callBack(this[i] , res);
  }

  return res;


}

function add(number,res)
{
  
  return(number + res);
  
}

const ans =num.customReduce(add);
console.log(ans);