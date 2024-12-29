const arr = [10,20,6];


// const res =arr.map((eachVal,index,arr)=>{
//     return eachVal*2;
// })

// console.log(res)


Array.prototype.myMap = function (callBack)
{
   const res = [];
    for (let i=0;i<this.length;i++)
    {

      res.push( callBack(this[i] , i , this));

    }

    // console.log("res" ,res)
    return res;
}

function multiply(num , index , array)
{
    return num * 2;
}


const ans=arr.myMap(multiply);
console.log(ans)

