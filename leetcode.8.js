function abc(nums) {
    for(let i=0; i<=nums.length; i++) {
      if(!nums.includes(i)){
        console.log(i)
      }
    }
  }
  
  abc([3,0,1,4])