function abc(nums) {
    const result = [];
    for(let i=0; i<nums.length; i++) {
      let prod = 1;
      for(let j=0; j<nums.length; j++) {
        if(i !== j) {
          prod *= nums[j]
        }
      }
      result.push(prod)
    }
    console.log("result", result)
  }
  
  abc([1,2,3,4])