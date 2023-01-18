function abc(arr, target) {
    for(let i=0; i<arr.length; i++) {
      for(let j=i+1; j<arr.length; j++) {
        if(arr[i] + arr[j] === target) {
          console.log([i,j]);
          break;
        }
      }
    }
  }
  
  // abc([4,5,9,1,2,3,5,220,8,0,3], 10)
  
  abc([3,2,4],6)