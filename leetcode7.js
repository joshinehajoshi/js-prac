
//  Top K Frequent Elements

function abc(nums, target) {
    const obj = {};
    const result = [];
    for(let i=0; i<nums.length; i++) {
      if(!obj.hasOwnProperty(nums[i])){
        obj[nums[i]] = 1; 
      }
      else {
        obj[nums[i]] += 1
      }
    }
    for(let k in obj){
      console.log(k, obj[k])
      if(obj[k] >= target) {
        result.push(Number.parseInt(k))
      }
  }
  console.log("result", result)
  }
  
  abc([1,1,1,2,2,3], 2)