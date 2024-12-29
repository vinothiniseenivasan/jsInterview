const num = [20,25,39,46];


// const ans = num.filter((eachNum)=>{
//   return (eachNum > 20);
// })



// polyfil for filter

Array.prototype.customFilter = function (callBack)
{
   const res = [];

   for(let i=0;i<this.length;i++)
   {
   if((callBack(this[i] , i , this)))
   {
    res.push(this[i])
   }
   }

   return res;

}

function check(number , index , arr)
{
 if(number > 30)
 {
  return true;
 }
 return false;
}

const ans =num.customFilter(check);

console.log(ans)